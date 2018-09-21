import React, { Component } from 'react';

import BookList from './components/BookList';

class App extends Component {
  render() {
    return (
      <div id="Main">
        <h1>My Reading List</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
