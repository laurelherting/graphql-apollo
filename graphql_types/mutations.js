const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');

const User = require('../mongoose_models/user');
const UserType = require('./user_type.js');

const mutations = new GraphQLObjectType({
  name: 'Mutations',
  description: 'These are things we can change',
  fields: () => ({
    changeUserName: {
      type: UserType,
      description: 'Change a user with id and return the newName.',
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

module.exports = mutations;

