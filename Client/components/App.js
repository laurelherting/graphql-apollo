const React = require('react');
const { graphql, createFragmentContainer } = require('react-relay');

const Start = require('./Start');
const Card = require('./Card');

class App extends React.Component {
  render () {
    return (
      <div>
        <Start userToGreet={this.props.appUser} />
        <Card />
      </div>
    );
  }
}

module.exports = createFragmentContainer( App, {
  appUser: graphql`
    fragment App_appUser on Viewer {
      ...Start_userToGreet
    }
  `
}
);

