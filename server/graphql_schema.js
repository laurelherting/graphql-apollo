const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueries = require('./rootQueries');
const Mutation = require('./mutation');

module.exports = new GraphQLSchema({
  query: RootQueries,
  mutation: Mutation
});

