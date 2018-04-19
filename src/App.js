import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js'
import Profile from './profile.js'

class App extends Component {

  handleReturn = (component) => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {component}
      </div>
    );
  }

  render() {
    const querys = window.location.search.slice(1)
    const localA = localStorage.getItem('access_token')
    const localN = localStorage.getItem('name')
    let component = null

    if ((localA === null) && (querys === '')) {
      component = (<Login />)
    }

    if ((localA !== null) && (localN !== null)){
      component = (
      <Profile
        name={localN}
      />)
    }

    if ((localA === null) && (querys !== '')){
      const queryList = querys.split('&')
      const queryDict = {}
      queryList.forEach (query => {
        const key = query.split('=')[0]
        const value = query.split('=')[1]
        queryDict[key]=value
      })
      component = (<Profile
        name={queryDict.name}
      />)
      localStorage.setItem('access_token', queryDict.access_token)
      localStorage.setItem('name', queryDict.name)
    }

    return (
      this.handleReturn(component)
    );
  }
}

export default App;
