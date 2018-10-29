import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  displayAuthors() {
    const { data } = this.props;
    if (data.loading) {
      return (
        <option
          disabled>Loading authors
        </option> );
    }
    return data.authors.map(author => {
      <option
        key={author.id}
        value={author.id}>{author.name}
      </option>;
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div id="Main">
          <h1>My Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
