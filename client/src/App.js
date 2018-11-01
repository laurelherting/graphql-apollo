import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="Main">
          <h1>My Reading List</h1>
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
