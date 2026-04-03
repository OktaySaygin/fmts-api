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

    const { _id, ...rest } = user.toObject();
    return { success: true, user: { id: _id, ...rest } };
};

module.exports = { updateScore };
