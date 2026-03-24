const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
    if (isConnected) return;

    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/piko');
        isConnected = true;
        console.log('MongoDB bağlantısı kuruldu.');
    } catch (error) {
        console.error('MongoDB bağlantı hatası:', error.message);
        throw error;
    }
};

module.exports = { connectDB };
