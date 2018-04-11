/* eslint-disable camelcase */
const { pool } = require('../../../database/utils');
const { authenticate } = require('../../utils/utils');

const allTodos = async (_, __, ctx) => {
  const userId = authenticate(ctx);

  try {
    const query = {
      text: 'SELECT todo_id, content FROM todos WHERE user_id = $1',
      values: [userId]
    };

    const { rows: todos } = await pool.query(query);

    return todos;
  } catch (err) {
    throw new Error(err);
  }
};

const Todo = async (_, { todo_id }, ctx) => {
  const userId = authenticate(ctx);

  try {
    const query = {
      text: 'SELECT todo_id, content FROM todos WHERE todo_id = $1 AND user_id = $2',
      values: [todo_id, userId]
    };

    const { rows: [todo] } = await pool.query(query);

    return todo;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  allTodos,
  Todo
};
