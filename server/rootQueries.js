const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLString } = graphql;

const BookType = require('./schema');
const UserModel = require('../server/models/user');

const ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    book: {
      type: BookType,
      resolve(args) {
      // code to get data from db / other source
      // return UserModel.findOne(args);
      }
    }
  })
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    book: {
      type: BookType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
      }
    },
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery
})
