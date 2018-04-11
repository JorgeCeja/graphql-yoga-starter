const { pool } = require('../../../database/utils');
const { authenticate } = require('../../utils/utils');

const createTodo = async (_, { content }, ctx) => {
  const userId = authenticate(ctx);

  try {
    const query = {
      text: 'INSERT INTO todos (user_id, todo) VALUES ($1, $2) RETURNING todo_id, todo',
      values: [userId, content]
    };

    const { rows: [newTodo] } = await pool.query(query);

    return { _id: newTodo.todo_id, content: newTodo.todo };
  } catch (err) {
    throw new Error(err);
  }
};

const updateTodo = async (_, { _id, content }, ctx) => {
  const userId = authenticate(ctx);

  try {
    const query = {
      text:
        'UPDATE todos SET todo = $1 WHERE todo_id = $2 AND user_id = $3 RETURNING todo_id, todo',
      values: [content, _id, userId]
    };

    const { rows: [updatedTodo] } = await pool.query(query);

    return { _id: updatedTodo.todo_id, content: updatedTodo.todo };
  } catch (err) {
    throw new Error(err);
  }
};

const deleteTodo = async (_, { _id }, ctx) => {
  const userId = authenticate(ctx);

  try {
    const query = {
      text: 'DELETE FROM todos WHERE todo_id = $1 AND user_id = $2 RETURNING todo_id, todo',
      values: [_id, userId]
    };

    const { rows: [deletedTodo] } = await pool.query(query);

    return { _id: deletedTodo.todo_id, content: deletedTodo.todo };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo
};
