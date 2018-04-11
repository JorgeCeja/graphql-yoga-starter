/* eslint-disable no-console */
// Load environment variables from .env file
require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const helmet = require('helmet');
const { checkDbConnection } = require('../database/utils');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const config = require('./config');

// Check database connection
checkDbConnection();

const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({ ...req })
});

// HTTP security middleware
server.express.use(helmet());

// only if you're behind a reverse proxy
// (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
server.express.enable('trust proxy');

//  apply rate limiter to all requests
server.express.use(config.limiter);

server.start(config.options, ({ port }) => {
  console.log(`Server running at http://localhost:${port}`);
});
