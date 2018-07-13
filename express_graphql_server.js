const express = require('express');
const cors = require('cors');
const expressGraphQL = require('express-graphql');
const schema = require('./graphql_types/graphql_schema');
const db = require('./mongoDB_connection');

const app = express();

app.use(cors());

app.use('/graphql', expressGraphQL ({
  schema: schema,
  graphql: true
}));

app.listen(4000, () => {
// console.log('Running a CORS-enabled GraphQL API server at localhost:4000/graphql'),
});

