const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  // Don't return password unless specified to
  password: { type: String, select: false },
  todos: [
    {
      content: { type: String }
    }
  ]
});

module.exports = mongoose.model('user', userSchema);
