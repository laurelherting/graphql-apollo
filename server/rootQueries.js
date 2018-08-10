const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } = graphql;

const BookType = require('./schema');
const UserModel = require('../server/models/user');

const ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    user: {
      type: BookType,
      resolve(args) {
      // code to get data from db / other source
      // return UserModel.findOne(args);
      }
    }
  })
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    user: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
      // return UserModel.findOne({ _id: args.id });
      }
    },
    users: {
      type: new GraphQLList(BookType),
      resolve() {
      // return UserModel.find({});
      }
    },
    myuser: {
      type: ViewerType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
      // return args;
      }
    }
  })
});

module.exports = RootQueryType;
