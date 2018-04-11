/* eslint-disable no-console */
const { Pool, Client } = require('pg');
const config = require('../config');

const connectionString = config.POSTGRESQL_URI;

const pool = new Pool({ connectionString });

const checkDbConnection = async () => {
  const client = new Client({ connectionString });

  try {
    await client.connect();
    console.log('Database connection check: Successful');
    await client.end();
    console.log('Database connection check: Ended');
  } catch (err) {
    throw new Error('Database connection check: ', err);
  }
};

module.exports = { pool, checkDbConnection };
