import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

class Start extends React.Component {
  render () {
    const { book } =  this.props.bookInformation;
      return (
        <div>
          <h4>Book Information</h4>
          <p>Book ID is: {book.id}</p>
        </div>
      );
  }
}

export default Start;
