const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./server/schema/schema');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

mongoose.connect('mongodb://author:12ddyy94@ds231991.mlab.com:31991/relay_work');

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () =>
	console.log(`GraphQL Server running at http://127.0.0.1:${port}`)
);
