// const { number } = require('joi');
// const mongoose = require('../db.config'); 
// const { Schema } = mongoose;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    // required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber:{
    type:Number,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
