const React = require('react');

const Start = require('./Start');
const Card = require('./Card');

class App extends React.Component {
  render () {
    return (
      <div>
        <Start name="Foo" />
        <Card />
      </div>
    );
  }
}

module.exports = App;

