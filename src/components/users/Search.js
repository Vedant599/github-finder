import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { searchUsers, clearUsers, users } = githubContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const showClear = users.length > 0 ? true : false;
  const [search_user, setsearchUser] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (search_user === '') {
      setAlert('Please Search Someone', 'light');
    } else {
      searchUsers(search_user);
      setsearchUser('');
    }
  };

  const onChange = (e) => setsearchUser(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='search_user'
          placeholder='Search Users...'
          onChange={onChange}
          value={search_user}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear Result
        </button>
      )}
    </div>
  );
};

export default Search;
