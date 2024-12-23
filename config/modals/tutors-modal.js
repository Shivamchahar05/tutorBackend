const mongoose = require('mongoose');
const { Schema } = mongoose;

const tutorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experienceYears: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,  
    match: /^[0-9]{10}$/,  
  },
  email: {
    type: String,
    required: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
  },
  classes: [
    {
      className: {
        type: String,
        required: true,
      },
      subjects: {
        type: [String],  
        required: true,  
      },
      rate: {
        type: Number,
        required: true,
      },
    },
  ],
  location: {
    type: String,
    required: true,
  },
}, {
  timestamps: true  
});

const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;
