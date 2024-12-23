const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the booking
const bookingSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tutor',
        required: true,
    },
    studentName: {
        type: String,
        required: [true, 'Student name is required'],
        minlength: [3, 'Student name must be at least 3 characters long']
    },
    studentPhone: {
        type: String,
        required: [true, 'Student phone number is required'],
        match: [/^\+?\d{10,15}$/, 'Phone number must be a valid phone number (10-15 digits)']
    },
    studentClass: {
        type: String,
        required: [true, 'Student class is required'],
    },
    name: {
        type: String,
        required: [true, 'Your name is required'],
        minlength: [3, 'Your name must be at least 3 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/\S+@\S+\.\S+/, 'Email must be a valid email address']
    },
    subject: {
        type: Array,
        required: [true, 'Subject is required'],
    },
    sessionDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'canceled'],
        default: 'pending',
    },
    paymentStatus: {
        type: String,
        enum: ['unpaid', 'paid'],
        default: 'unpaid',
    }
}, {
    timestamps: true
});

const TutorBooked = mongoose.model('TutorBooked', bookingSchema);

module.exports = TutorBooked;
