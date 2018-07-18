const ReactDOM = require('react-dom');
const React = require('react');

const App = require('./App');


function RootComponent() {
  const rootQuery = graphql`
    query reactComponentsRootQuery {
      randome_label2: myuser(name: "Becky") {
        ...App_appUser
      }
    }
  `;

  function onRenderHelper();
}

ReactDOM.render(
  <RootComponent />,
  document.getElementById('root')
);

