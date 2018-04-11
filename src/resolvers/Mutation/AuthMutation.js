const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool } = require('../../utils');
const config = require('../../config');

const signup = async (_, { email, password }) => {
  try {
    let query = {
      text: 'SELECT email from users WHERE email = $1',
      values: [email]
    };

    const { rowCount: userFound } = await pool.query(query);

    if (userFound) {
      throw new Error('Email is already taken');
    }

    const _password = await bcrypt.hash(password, 10);

    query = {
      text: 'INSERT INTO users(email, password) VALUES($1, $2) RETURNING user_id, email',
      values: [email, _password]
    };

    // deconstruction magic - no need for another varibale
    const { rows: [user] } = await pool.query(query);

    const token = jwt.sign({ userId: user.user_id }, config.SESSION_SECRET);

    return { token, user };
  } catch (err) {
    throw new Error(err);
  }
};

const login = async (_, { email, password }) => {
  try {
    const query = {
      text: 'SELECT user_id, email, password FROM users WHERE email = $1',
      values: [email]
    };

    const { rows: [user] } = await pool.query(query);

    if (!user) {
      throw new Error('No such user found');
    }

    const valid = await bcrypt.compare(password, user.password);

    // remove password from user object to limit scope (security)
    user.password = undefined;

    if (!valid) {
      throw new Error('Invalid password');
    }

    return {
      token: jwt.sign({ userId: user.user_id }, config.SESSION_SECRET),
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
