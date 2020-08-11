import React from 'react';
import { Fragment } from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types'


const Repos = ({ repos }) => {
  return (
    <Fragment>
      {repos.map((repo) => {
        return <RepoItem key={repo.id} repo={repo} />;
      })}
    </Fragment>
  );
};
Repos.propTypes={
    repos: PropTypes.array.isRequired,
}
export default Repos;
