const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');

const User = require('../server/mongoose_models/user');
const UserType = require('./user_type.js');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    changeUserName: {
      type: UserType,
      args: {
        newName: { type: GraphQLString },
        userId: { type: GraphQLID }
      },
      resolve: (parentValue, { newName, userId }) => {
        return User.changeName(userId, newName);
      }
    }
  }),
});

module.exports = mutation;

