const {
  NODE_ENV, MONGODB_URI, SESSION_SECRET, PORT
} = process.env;

const CONFIG = {
  SESSION_SECRET,
  MONGODB_URI,
  options: {
    port: PORT,
    endpoint: '/api',
    // disable playground in production
    playground: NODE_ENV === 'development' ? '/playground' : false
  }
};

module.exports = { ...CONFIG };
