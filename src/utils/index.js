const databaseUtis = require('./database');
const authUtils = require('./auth');

module.exports = { ...databaseUtis, ...authUtils };
