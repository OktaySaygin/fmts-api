const mongoose = require('mongoose');

// Vercel serverless ortamında bağlantıyı global cache'de tut
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 10000,
        }).then((m) => m);
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        console.error('MongoDB bağlantı hatası:', error.message);
        throw error;
    }

    return cached.conn;
};

module.exports = { connectDB };
