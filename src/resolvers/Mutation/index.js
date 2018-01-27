const AuthMutation = require('./AuthMutation');
const TodoMutation = require('./TodoMutation');

module.exports = { ...AuthMutation, ...TodoMutation };
