import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

// components
import BookDetails from './BookDetails';

class BookList extends Component {
  render() {
    return (
      <div>
        <ul id="book-list">
          <li>Book name</li>
        </ul>
        <BookDetails />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
