const mongoose = require('mongoose');
const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;

// sample data
const books = [
  { name: 'Dark Tower', genre: 'fantasy', id: '1' },
  { name: 'The Forbidden Tower', genre: 'fantasy', id: '2' },
  { name: 'Tales of Mithgar', genre: 'fantasy', id: '3' },
  { name: 'Dragon Quest', genre: 'fantasy', id: '4' },
  { name: 'Foundation & Earth', genre: 'fantasy', id: '5' },
  { name: 'Enders Game', genre: 'fantasy', id: '6' },
];

const authors = [
  { name: 'Stephen King', age: '70', id: '1' },
  { name: 'Marion Bradley', age: '69', id: '2' },
  { name: 'Dennis McKiernan', age: '86', id: '3' },
  { name: 'Donita Paul', age: '67', id: '4' },
  { name: 'Isaac Asimov', age: '72', id: '5' },
  { name: 'Orson Card', age: '67', id: '6' },
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      author: {
        type: AuthorType,
        resolve(parent, args) {
          console.log(parent);
          return _.find(authors, { id: parent.authorId });
        }
      }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
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
      },
      author: {
        type: AuthorType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args){
          return _.find(authors, { id: args.id });
        }
      }
    }
  });

module.exports = new GraphQLSchema({
    query: RootQuery
});
