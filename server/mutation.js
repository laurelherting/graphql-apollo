const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');

const Book = require('../server/models/book');
const BookType = require('./schema.js');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    changeUserName: {
      type: BookType,
      args: {
        newName: { type: GraphQLString },
      },
      resolve: (parentValue, { newName, userId }) => {
        return User.changeName(userId, newName);
      }
    }
  }),
});

module.exports = mutation;

