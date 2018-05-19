const mongoose = require('mongoose');
const User = require('../../database/models/UserModel');
const { authenticate } = require('../../utils/utils');

const { ObjectId } = mongoose.Types;

const createTodo = async (_, { content }, ctx) => {
  const userId = authenticate(ctx);

  try {
    const user = await User.findOne({ _id: userId });

    const newTodo = { _id: new ObjectId(), content };

    user.todos.push(newTodo);

    user.save();

    return newTodo;
  } catch (err) {
    throw new Error(err);
  }
};

const updateTodo = async (_, { _id, content }, ctx) => {
  const userId = authenticate(ctx);

  try {
    await User.update({ _id: userId, 'todos._id': _id }, { $set: { 'todos.$.content': content } });

    return { _id, content };
  } catch (err) {
    throw new Error(err);
  }
};

const deleteTodo = async (_, { _id }, ctx) => {
  const userId = authenticate(ctx);

  try {
    await User.update({ _id: userId }, { $pull: { todos: { _id } } }, { multi: true });

    return { _id };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo
};
