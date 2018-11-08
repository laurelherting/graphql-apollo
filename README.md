# GRAPHQL-APOLLO
An example repo using apollo, react, mongod, and express-graphql

## Getting Up and Running
Server and Client side have separate `package.json` and `yarn.lock` files

### Server: Install
From the root project folder, run `yarn`

### Server: Running the project
The credentials for mlab.com must be exported as shell environment variables.
```console
$ export MLAB_USERNAME=''
$ export MLAB_PASSWORD=''
```
This must be done every time a new terminal window is opened and used for the
server side.

- Open up a tab in the terminal and start MongoDB
- Open up a tab in the terminal. From the root project folder, run: `yarn start`

### Server: Debugging
Requires the [Node.js V8 inspector extension](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj?hl=en)

To debug the server enter a `debugging` line in the server codebase.

Example: `./server/schema/schema.js`
```javascript
resolve(parent, args) {
  debugger;
  return Book.findById(args.id);
},
```

Then run `yarn run debug` to run the server in debug mode. Open Chrome and the
inspector (dev tools). Click the green Node.js V8 inspector extension icon. Use
breakpoints as necessary to move through the code and inspect.

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

#### Additional information
The Client side was originally created without create-react-app (though was available at this time) and Relay. Relay was replaced with Apollo for its flexibility within the environment. A connection with MongoDB depicts this. After working with Apollo's more lightweight and flexible approach, a future application(requiring more complex data) will be developed using Relay.
