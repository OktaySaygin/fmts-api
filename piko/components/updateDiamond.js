const { connectDB } = require('../db');
const User = require('../models/User');

const updateDiamond = async (userId, diamond) => {
    await connectDB();
    const user = await User.findByIdAndUpdate(
        userId,
        { diamond },
        { new: true, select: '-password' }
    );

    if (!user) {
        return { success: false, message: 'Kullanıcı bulunamadı.' };
    }

    return { success: true, user };
};

module.exports = { updateDiamond };
