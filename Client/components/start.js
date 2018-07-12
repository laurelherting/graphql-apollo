const React = require('react');

class Start extends React.Component {
  render () {
    return (
      <h1>Hello, {this.props.name}<h1>
    );
  }
}

module.exports = Start;

