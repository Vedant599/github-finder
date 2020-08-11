import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  //Search User with Search
  searchUsers = async (search_user) => {
    console.log(search_user);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search_user}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false, alert: null });
  };

  // Clear USer State
  clearUsers = () => this.setState({ users: [], loading: false });

  //Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  //Find More Details of Specific User
  getUser = async (user_login) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${user_login}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  //Find More Details of Specific User
  getUserRepos = async (user_login) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${user_login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
  };

  render() {
    const { users, loading, alert, user, repos } = this.state;
    return (
      <Router>
        <div className='App'>
          {/* <h1>Shree Ganeshay Namah</h1> */}
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route path='/about' component={About} />
              <Route
                exact
                path='/user/:user_login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
