import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import environment from './environment';
import App from './App';

class Books extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query BooksQuery {
            books {
              id
              name
            }
          }
        `}
        render={({error, props}) => {
          if (error) {
            return (<div>{error.message}</div>);
          } else if (props) {
            return (
              <div>
                {props.books.map(u => (
                    <p key={u.id}>{u.id} {u.name}</p>
                ))}
              </div>
            )
          }
          return (<div>Loading</div>);
        }}
      />
    );
  }
}

export default Books;
