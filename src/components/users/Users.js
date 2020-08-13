import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';


const Users = () => {
  const githubContext = useContext(GithubContext)
  const {users,loading} = githubContext
  const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '1rem',
  };
  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};


export default Users;
