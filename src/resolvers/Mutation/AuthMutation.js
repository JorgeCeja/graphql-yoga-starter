const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../database/models/UserModel');
const config = require('../../config/config');

const signup = async (_, { email, password }) => {
  try {
    let user = await User.findOne({ email }).lean();

    if (user) {
      throw new Error('Email is already taken');
    }

    const _password = await bcrypt.hash(password, 10);
    user = await new User({ email, password: _password }).save();

    const token = jwt.sign({ userId: user._id }, config.SESSION_SECRET);

    return { token, user };
  } catch (err) {
    throw new Error(err);
  }
};

const login = async (_, { email, password }) => {
  try {
    const user = await User.findOne({ email }, { password: 1 }).lean();
    if (!user) {
      throw new Error('No such user found');
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    // remove password from user object to limit scope (security)
    user.password = undefined;

    return {
      token: jwt.sign({ userId: user._id }, config.SESSION_SECRET),
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
