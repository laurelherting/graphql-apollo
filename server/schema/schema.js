const mongoose = require('mongoose');
const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID
} = graphql;

// sample data
const books = [
  { name: 'Dark Tower', genre: 'fantasy', id: '1' },
  { name: 'The Forbidden Tower', genre: 'fantasy', id: '2' },
  { name: 'Tales of Mithgar', genre: 'fantasy', id: '3' },
  { name: 'Dragon Quest', genre: 'fantasy', id: '4' },
  { name: 'Foundation & Earth', genre: 'fantasy', id: '5' },
  { name: 'Enders Game', genre: 'fantasy', id: '6' }
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ( ) => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                // code to get data from db / other source
                return _.find(books, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
