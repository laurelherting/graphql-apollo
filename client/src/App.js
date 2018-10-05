import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  displayAuthors() {
    let data = this.props.data;
        if (data.loading) {
            return( <option disabled>Loading authors</option> );
        } else {
            return data.authors.map(author => {
                return( <option key={ author.id } value={author.id}>{ author.name }</option> );
            });
        }
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
