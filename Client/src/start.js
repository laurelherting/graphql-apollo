import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

class Start extends React.Component {
  render () {
    const { user } =  this.props.userToGreet;

    return (
      <div>
        <h4>Greeting Component</h4>
        <p>Hello, user {user.name}</p>
        <p>Your ID is: {user.id}</p>
      </div>
    );
  }
}

export default Start;
