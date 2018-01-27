// Load environment variables from .env file
require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const config = require('./config/config');

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

// Set up default mongoose connection
mongoose.connect(config.MONGODB_URI, {
  useMongoClient: true
});

// Bind connection to error event (to get notification of connection errors)
mongoose.connection
  .once('open', () => console.log('Mongodb running'))
  .on('error', console.error.bind(console, 'MongoDB connection error:'));

const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: req => ({ ...req })
});

// only if you're behind a reverse proxy
// (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
server.express.enable('trust proxy');

//  apply rate limiter to all requests
server.express.use(config.limiter);

server.start(config.options, ({ port }) => {
  console.log(`Server running at http://localhost:${port}`);
});
