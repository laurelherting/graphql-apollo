const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://lad:12ddyy94@ds231991.mlab.com:31991/relay_work';

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useMongoClient: true });
mongoose.connection
  .once('open', () => console.log('Connection to MongoDB is started'))
  .on('error', error => console.warn('Error connecting to MongoDB: ', error));

module.exports = mongoose;

