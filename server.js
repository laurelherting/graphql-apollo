const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./server/schema/schema');
const db = require('./mongoDB_connection');

const app = express();
const port = 4000;

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () =>
	console.log(`GraphQL Server running at http://127.0.0.1:${port}`)
);
