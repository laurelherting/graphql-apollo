import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

// components
import BookDetails from './BookDetails';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayBooks() {
    const { data } = this.props.data;

    if (data.loading) {
    return <div>Loading books...</div>
    } else {
      return data.books.map}(book => {
        <a
          style={{ display: 'list-item' }}
          tabIndex={-42}
          key={book.id}
          onClick={this.set.state({ selected: book.id })}
          onKeyPress=
          {this.handleKeyPress}>{book.name}
        </a>
      });
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()} onClick=
          {this.handleClick} onKeyPress=
          {this.handleKeyPress}
        </ul>
        <BookDetails bookId={this.state} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
