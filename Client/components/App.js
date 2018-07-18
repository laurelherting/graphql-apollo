import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import Start from './Start';
import Card from './Card';

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
});

