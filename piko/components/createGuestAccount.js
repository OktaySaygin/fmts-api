const bcrypt = require('bcryptjs');
const { connectDB } = require('../db');
const User = require('../models/User');

const GUEST_PASSWORD = '123456piko';

const generateSuffix = () =>
    Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

const createGuestAccount = async () => {
    await connectDB();

    let email, username, isUnique = false;

    // Çakışma olursa farklı suffix ile tekrar dene
    for (let i = 0; i < 5; i++) {
        const suffix = generateSuffix();
        email = `guest${suffix}@piko.com`;
        username = `guest${suffix}`;

        const existing = await User.findOne({ $or: [{ email }, { username }] });
        if (!existing) {
            isUnique = true;
            break;
        }
    }

    if (!isUnique) {
        throw new Error('Benzersiz misafir hesabı oluşturulamadı, tekrar deneyin.');
    }

    const hashedPassword = await bcrypt.hash(GUEST_PASSWORD, 10);

    const user = await User.create({
        email,
        username,
        password: hashedPassword,
        provider: 'guest',
    });

    return {
        success: true,
        message: 'Misafir hesabı oluşturuldu.',
        user: { id: user.id, email: user.email, username: user.username },
    };
};

module.exports = { createGuestAccount };
