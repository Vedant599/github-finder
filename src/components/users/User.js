import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from './repos/Repos';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.user_login);
    this.props.getUserRepos(this.props.match.params.user_login);
  }
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  };
  render() {
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
    } = this.props.user;
    if (this.props.loading) {
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
        <Repos repos={this.props.repos} />
      </Fragment>
    );
  }
}

export default User;
