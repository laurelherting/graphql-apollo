const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./server/schema/schema');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab
mongoose.connect(
  `mongodb://${process.env.MLAB_USERNAME}:${
    process.env.MLAB_PASSWORD
  }@ds231991.mlab.com:31991/relay_work`
);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

// bind express with graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
