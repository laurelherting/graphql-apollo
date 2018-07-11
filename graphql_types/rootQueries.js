const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } = graphql;

const UserType = require('./user_type');
const UserModel = require('../mongoose_models/user');

const RootQueryType = new GraphQLObjectType ({
  name: 'RootQuery',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return UserModel.find({});
      }
    }
  })
});

module.exports = RootQueryType;
