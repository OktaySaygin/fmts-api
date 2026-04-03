const { connectDB } = require('../db');
const User = require('../models/User');

const addInventoryItem = async (userId, category, itemId) => {
    await connectDB();

    if (!['hats', 'eyewears'].includes(category)) {
        return { success: false, message: 'Geçersiz kategori. hats veya eyewears olmalı.' };
    }

    const field = `inventory.${category}`;
    const user = await User.findByIdAndUpdate(
        userId,
        { $addToSet: { [field]: itemId } },
        { new: true, select: '-password' }
    );

    if (!user) {
        return { success: false, message: 'Kullanıcı bulunamadı.' };
    }

    const { _id, ...rest } = user.toObject();
    return { success: true, user: { id: _id, ...rest } };
};

module.exports = { addInventoryItem };
