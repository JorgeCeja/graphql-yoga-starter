const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../../database/models/UserModel');
const config = require('../../config/config');

const signup = async (_, { email, password }) => {
  try {
    const _email = await User.findOne({ email }).lean();

    if (_email) {
      throw new Error('Email is already taken');
    }

    const _password = await bcrypt.hash(password, 10);
    const user = await new User({ email, password: _password }).save();

    const token = jwt.sign({ userId: user._id }, config.APP_SECRET);

    return { token, user };
  } catch (err) {
    throw new Error(err);
  }
};

const login = async (_, { email, password }) => {
  try {
    const user = await User.findOne({ email }).lean();
    if (!user) {
      throw new Error('No such user found');
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    // remove password from user object which will be returned
    delete user.password;

    return {
      token: jwt.sign({ userId: user._id }, config.APP_SECRET),
      user
    };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  signup,
  login
};
