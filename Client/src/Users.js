import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import environment from './environment';
import App from './App';

class Users extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query UsersQuery {
            users {
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
                {props.users.map(u => (
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

export default Users;
