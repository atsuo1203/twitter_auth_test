import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js'
import Profile from './profile.js'

class App extends Component {
  render() {
    const querys = window.location.search.slice(1)
    let login = null
    let profile = null
    if (querys === '') {
      login = (<Login />)
      profile = (<Profile />)
    } else {
      const queryList = querys.split('&')
      const queryDict = {}
      queryList.forEach (query => {
        const key = query.split('=')[0]
        const value = query.split('=')[1]
        queryDict[key]=value
      })
      profile = (<Profile
        name={queryDict.name}
      />)
      console.log(queryDict)
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {login}
        {profile}
      </div>
    );
  }
}

export default App;
