import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import environment from './environment';
import App from './App';

class RendererHelper extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ChangeName() {
            name
          }
        `}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <div>{props.page.name} works!</div>;
          }
          return <div>Loading</div>;
        }
      />
    );
  }
}

module.exports = RenderHelper;
