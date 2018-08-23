const mongoose = require('mongoose');
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

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
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                // code to get data from db / other source

            }
        }
    }
});

book(id: "2") {
  name
  genre
}

module.exports = new GraphQLSchema({
    query: RootQuery
});
