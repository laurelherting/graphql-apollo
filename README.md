# RELAY-MODERN
An example repo using relay-modern, react, mongod, and express-graphql

## Getting Up and Running
Server and Client side have separate `package.json` and `yarn.lock` files
This repo uses webpack and babel. See this helpful [post](https://www.valentinog.com/blog/react-webpack-babel/)
create-react-app is not used in this repo although that is an option

### Server: Install
From the root project folder, run `yarn`

### Server: Running the project
- Open up a tab in the terminal and start MongoDB
- Open up a tab in the terminal. From the root project folder, run `yarn start`

### Client: Install
From the `Client` folder, run `yarn`

### Client: Running the project
#### Relay and webpack-dev-server will be run in watch mode
Open up a tab in the terminal. From the `Client` project folder, run:

## Express-GraphQL Notes
The GraphQL schema docs are located in `graphql_types`

## Relay Notes
[Getting started doc]:(https://facebook.github.io/relay/docs/en/query-renderer.html)
### Schema
The Client side schema file is located at: `Client/schema.graphql`

### QueryRenderer Name Spacing
#### [Medium Post on Name Spacing](https://medium.com/@feus4177/an-adventure-with-graphql-and-relay-part-1-1381e285edd2)
The name spacing for Relay's QueryRenderer can be challenging. Do not use the
index.js file with the QueryRenderer method. It would require a confusing
namespace such as:
```
query={graphql`
  query srcindexQuery {
    users {
      id
      name
    }
  }
`}
```

Create separate files for each QueryRenderer call and use the filename as the
namespace. Example: `Client/src/Users.js`
```
query={graphql`
  query UsersQuery {
    users {
      id
      name
    }
  }
`}
```
