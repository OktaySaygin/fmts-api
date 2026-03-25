const { connectDB } = require('../db');
const User = require('../models/User');

const updateScore = async (userId, score) => {
    await connectDB();
    const user = await User.findByIdAndUpdate(
        userId,
        { score },
        { new: true, select: '-password' }
    );

    if (!user) {
        return { success: false, message: 'Kullanıcı bulunamadı.' };
    }

    return { success: true, user };
};

module.exports = { updateScore };
