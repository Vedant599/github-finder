import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    search_user: '',
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.search_user === '') {
      this.props.setAlert('Please Search Someone', 'light');
    } else {
      this.props.searchUsers(this.state.search_user);
      this.setState({ search_user: '' });
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='search_user'
            placeholder='Search Users...'
            onChange={this.onChange}
            value={this.state.search_user}
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
  }
}

export default Search;