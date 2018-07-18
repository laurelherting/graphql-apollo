const ReactDOM = require('react-dom');
const React = require('react');
const { QueryRenderer, graphql } = require('react-relay');
const environment = require('./environment');

const App = require('./App');

function RootComponent() {
  const rootQuery = graphql`
    query reactComponentsRootQuery {
      random_label2: myuser(name: "Becky") {
        ...App_appUser
      }
    }
  `;

  function onRenderHelper({ err, props }) {
    if (err) {
      return <div>{err.message}</div>;
    } else if (props) {
      return <App appUser={props.random_label2} />;
    } else {
      return <div>Loading...</div>;
    }
  }

  return <QueryRenderer environment={environment} query={rootQuery} render={onRenderHelper} />;

}

ReactDOM.render(
  <RootComponent />,
  document.getElementById('root')
);

