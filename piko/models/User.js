const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        provider: { 
            type: String, 
            enum: ['local', 'google', 'apple'], 
            default: 'local' 
        },
        providerId: {
            type: String
        },
        score: {
            type: Number,
            default: 0,
        },
        diamond: {
            type: Number,
            default: 0,
        },
        inventory: {
            hats: {
                type: [String],
                default: [],
            },
            eyewears: {
                type: [String],
                default: [],
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
