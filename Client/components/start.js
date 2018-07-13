const React = require('react');
const { graphql, createFragmentContainer } = require('react-relay');

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

module.exports = createFragmentContainer(
  Start,
  graphql`
  fragment Start_userToGreet on Viewer {
    user {
      name
      id
    }
  }
  `
);

