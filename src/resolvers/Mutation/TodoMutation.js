/* eslint-disable camelcase */
const { pool } = require('../../../database/utils');
const { authenticate } = require('../../utils/utils');

const createTodo = async (_, { content }, ctx) => {
  const userId = authenticate(ctx);

  try {
    const query = {
      text: 'INSERT INTO todos (user_id, content) VALUES ($1, $2) RETURNING todo_id, content',
      values: [userId, content]
    };

    const { rows: [newTodo] } = await pool.query(query);

    return newTodo;
  } catch (err) {
    throw new Error(err);
  }
};

const updateTodo = async (_, { todo_id, content }, ctx) => {
  const userId = authenticate(ctx);

  try {
    const query = {
      text:
        'UPDATE todos SET content = $1 WHERE todo_id = $2 AND user_id = $3 RETURNING todo_id, content',
      values: [content, todo_id, userId]
    };

    const { rows: [updatedTodo] } = await pool.query(query);

    return updatedTodo;
  } catch (err) {
    throw new Error(err);
  }
};

const deleteTodo = async (_, { todo_id }, ctx) => {
  const userId = authenticate(ctx);

  try {
    const query = {
      text: 'DELETE FROM todos WHERE todo_id = $1 AND user_id = $2 RETURNING todo_id, content',
      values: [todo_id, userId]
    };

    const { rows: [deletedTodo] } = await pool.query(query);

    return deletedTodo;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo
};
