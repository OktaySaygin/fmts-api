const bcrypt = require('bcryptjs');
const { connectDB } = require('../db');
const User = require('../models/User');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');

const googleClient = new OAuth2Client('412792318888-hl34mlmg46d6hv3lsvktqpr1q22i5vvq.apps.googleusercontent.com');

const createAccount = async (email, username, password, provider, googleIdToken, appleIdentityToken) => {
    await connectDB();

    if (provider === 'google') {
        const ticket = await googleClient.verifyIdToken({
            idToken: googleIdToken,
            audience: '412792318888-hl34mlmg46d6hv3lsvktqpr1q22i5vvq.apps.googleusercontent.com',
        });
        const payload = ticket.getPayload();

        const existingUser = await User.findOne({ email: payload.email });
        if (existingUser) {
            return { success: false, message: 'Bu email zaten kullanımda.' };
        }

        const user = await User.create({
            email: payload.email,
            username: username || payload.name,
            provider: 'google',
            providerId: payload.sub,
        });

        return {
            success: true,
            message: 'Google ile hesap oluşturuldu.',
            user: { id: user._id, email: user.email, username: user.username },
        };
    }

    if (provider === 'apple') {
        const decoded = jwt.decode(appleIdentityToken, { complete: true });
        // Apple public key ile doğrulama yapılmalı (production'da)
        const appleUserId = decoded.payload.sub;
        const appleEmail = email || decoded.payload.email;

        const existingUser = await User.findOne({
            $or: [{ providerId: appleUserId, provider: 'apple' }, { email: appleEmail }],
        });
        if (existingUser) {
            return { success: false, message: 'Bu hesap zaten kullanımda.' };
        }

        const user = await User.create({
            email: appleEmail,
            username: username || 'Apple User',
            provider: 'apple',
            providerId: appleUserId,
        });

        return {
            success: true,
            message: 'Apple ile hesap oluşturuldu.',
            user: { id: user._id, email: user.email, username: user.username },
        };
    }

    // Local sign up
    if (!email || !username || !password) {
        return { success: false, message: 'Email, kullanıcı adı ve şifre zorunludur.' };
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        const field = existingUser.email === email.toLowerCase() ? 'Email' : 'Kullanıcı adı';
        return { success: false, message: `${field} zaten kullanımda.` };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        username,
        password: hashedPassword,
        provider: 'local',
    });

    return {
        success: true,
        message: 'Hesap başarıyla oluşturuldu.',
        user: { id: user._id, email: user.email, username: user.username },
    };
};

module.exports = { createAccount };