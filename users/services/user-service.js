'use strict';
const User = require('../../config/modals/users-modal');
const { CommonHelper } = require('../../util/common.helper');
const { JWTHelper } = require('../../util/jwt.token.helper');


class UserService {

  signInUser = async (data) => {
    console.log(data.email, "data");
    const { name, email, password, phoneNumber } = data;

    if (data) {
      try {
        const existingUser = await User.findOne({ phoneNumber: data.phoneNumber });
        console.log(existingUser, "existingUser");

        if (existingUser) {
          throw new Error('User already exists');
        }

        const hashedPassword = await CommonHelper.hashingPassword(data.password);

        const newUser = new User({
          name,
          email,
          password: hashedPassword,
          phoneNumber
        });

        const result = await newUser.save();
        return result;
      } catch (error) {
        console.error('Error in sign-in:', error);
        throw error;
      }
    }
  }


  loginUser = async (data) => {
    try {
      const { phoneNumber, password } = data;
      const existingUser = await User.findOne({ phoneNumber });
      console.log(existingUser, "existingUser")
      if (existingUser) {
        const hashedPassword = await CommonHelper.hashingComparePassword(password, existingUser.password);
        console.log(hashedPassword, "hashedPassword")
        if (hashedPassword) {
          const token = await JWTHelper.generateToken({ userId: existingUser.id }, "1d")
          console.log(token, "token")
          return token
        } else {
          throw new Error("Invalid password")
        }
      }else{
        throw new Error("User Not Found")
      }
    } catch (e) {
      throw (e)
    }


  }

  userProfile = async (data) => {
    try {
      const existingUser = await User.findOne({ _id: data.userId });
      return existingUser
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new UserService();
