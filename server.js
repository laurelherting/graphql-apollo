const express = require('express');
const cors = require('cors');
const expressGraphQL = require('express-graphql');
const schema = require('./graphql_types/graphql_schema');
const db = require('./mongoDB_connection');

const app = express();
const port = 4000;

app.use(cors());

app.use('/graphql', expressGraphQL ({
  schema: schema,
  graphql: true
}));

app.listen(port, () =>
	console.log(`GraphQL Server running at http://127.0.0.1:${port}`)
);
