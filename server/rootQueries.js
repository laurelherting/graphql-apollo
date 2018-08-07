const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } = graphql;

const UserType = require('./user_type');
const UserModel = require('../server/mongoose_models/user');

const ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    user: {
      type: UserType,
      resolve(args) {
        return UserModel.findOne(args);
      }
    }
  })
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        return UserModel.findOne({ _id: args.id });
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return UserModel.find({});
      }
    },
    myuser: {
      type: ViewerType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        return args;
      }
    }
  })
});

module.exports = RootQueryType;
