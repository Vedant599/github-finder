import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from './repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, loading, getUserRepos } = githubContext;
  useEffect(() => {
    getUser(match.params.user_login);
    getUserRepos(match.params.user_login);
    //eslint-disable-next-line
  }, []);
  const {
    name,
    company,
    blog,
    login,
    avatar_url,
    html_url,
    location,
    hireable,
    bio,
    followers,
    public_gists,
    public_repos,
    following,
  } = user;
  if (loading) {
    return (
      <Fragment>
        <Spinner />
      </Fragment>
    );
  }
  return (
    <Fragment>
      {/* <h1>Shree Ganeshay Namah</h1> */}
      <Link to='/' className='btn btn-light my-1'>
        Back To Search
      </Link>
      <span>
        <h3 style={{ display: 'inline' }}>Hireable</h3>
      </span>
      :&nbsp;&nbsp;
      {hireable ? (
        <i className='fas fa-check text-success'></i>
      ) : (
        <i className='fas fa-times-circle text-danger'></i>
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt='Profile'
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h2>Bio:</h2>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              <Fragment>
                <strong>User Name:</strong>&nbsp;
                <p style={{ display: 'inline' }}>{login}</p>
              </Fragment>
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong>&nbsp;
                  <p style={{ display: 'inline' }}>{company}</p>
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong>&nbsp;
                  <p style={{ display: 'inline' }}>{blog}</p>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-success' style={{ width: '10rem' }}>
          <h3>Followers: {followers}</h3>
        </div>
        <div className='badge badge-primary' style={{ width: '10rem' }}>
          <h3>Following: {following}</h3>
        </div>
        <div className='badge badge-light' style={{ width: '10rem' }}>
          <h3>Public Repos: {public_repos}</h3>
        </div>
        <div className='badge badge-dark' style={{ width: '10rem' }}>
          <h3>Public Gists: {public_gists}</h3>
        </div>
      </div>
      <Repos />
    </Fragment>
  );
};


export default User;
