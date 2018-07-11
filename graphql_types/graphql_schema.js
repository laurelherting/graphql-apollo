const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueries = require('./rootQueries');

module.exports = new GraphQLSchema({
  query: RootQueries
});

