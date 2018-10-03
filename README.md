# GRAPHQL-APOLLO
An example repo using apollo, react, mongod, and express-graphql

## Getting Up and Running
Server and Client side have separate `package.json` and `yarn.lock` files

### Server: Install
From the root project folder, run `yarn`

### Server: Running the project
- Open up a tab in the terminal and start MongoDB
- Open up a tab in the terminal. From the root project folder, run: `yarn start`

### Client: Install
From the `Client` folder, run: `yarn`

### Client: Running the project
#### Apollo and webpack-dev-server will be run in watch mode
Open up a tab in the terminal. From the `Client` project folder, run: `yarn start`

## Express-GraphQL Notes
The GraphQL schema docs are located in: `server/models`

## GraphiQL Notes
- Open up a tab in the terminal and start MongoDB
- Open up a tab in the terminal. From the root project folder, run: `yarn start`
An in-browser IDE for writing, validating, and testing queries

## Apollo Notes
[Getting started doc]:(https://www.apollographql.com/docs/apollo-server/v2/getting-started.html)

### Schema
The Client side schema file is located at: `client/src/components/BookList.js`

### Node
.nvmrc added to both Server and Client side for node version consistency

## Additional information
The client-side was originally created without create-react-app (though was available at this time) and Relay. Relay was replaced with Apollo for its flexibility within the environment. A connection with MongoDB depicts this. After working with Apollo's more lighweight and flexible approach, a future application using Relay will be developed.
