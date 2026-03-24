const { connectDB } = require('../db');
const User = require('../models/User');

const deleteUser = async (id) => {
    await connectDB();

    if (!id) {
        return { success: false, message: 'Kullanıcı ID zorunludur.' };
    }

    const user = await User.findByIdAndDelete(id);

    if (!user) {
        return { success: false, message: 'Kullanıcı bulunamadı.' };
    }

    return { success: true, message: 'Kullanıcı başarıyla silindi.' };
};

module.exports = { deleteUser };
