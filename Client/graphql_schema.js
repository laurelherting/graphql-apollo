const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueries = require('./rootQueries');
const Mutations = require('./mutations');

module.exports = new GraphQLSchema({
  query: RootQueries,
  mutation: Mutations
});

