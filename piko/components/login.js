const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { connectDB } = require('../db');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'piko_secret_key_change_in_production';

const login = async (username, password) => {
    await connectDB();

    if (!username || !password) {
        return { success: false, message: 'Kullanıcı adı ve şifre zorunludur.' };
    }

    const user = await User.findOne({ username });
    if (!user) {
        return { success: false, message: 'Kullanıcı adı veya şifre hatalı.' };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return { success: false, message: 'Kullanıcı adı veya şifre hatalı.' };
    }

    const token = jwt.sign(
        { id: user._id, username: user.username },
        JWT_SECRET,
        { expiresIn: '7d' }
    );

    return {
        success: true,
        message: 'Giriş başarılı.',
        token,
        user: {
            id: user._id,
            email: user.email,
            username: user.username,
            name: user.name,
            surname: user.surname,
            score: user.score,
            diamond: user.diamond,
            inventory: user.inventory,
        },
    };
};

module.exports = { login };
