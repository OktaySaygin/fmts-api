const { connectDB } = require('../db');
const User = require('../models/User');

const allUsers = async () => {
    await connectDB();
    const users = await User.find({}, { password: 0 });

    if (users.length === 0) {
        return { success: false, message: 'Kayıtlı kullanıcı bulunamadı.' };
    }

    return { success: true, users };
};

module.exports = { allUsers };