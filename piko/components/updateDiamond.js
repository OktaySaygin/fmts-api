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

    const { _id, ...rest } = user.toObject();
    return { success: true, user: { id: _id, ...rest } };
};

module.exports = { updateDiamond };
