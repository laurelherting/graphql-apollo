import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

// components
import BookDetails from './BookDetails';

class BookList extends Component {
  displayBooks() {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading Books...</div>;
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list" />
        <BookDetails />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
