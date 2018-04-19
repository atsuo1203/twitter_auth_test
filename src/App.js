import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js'

class App extends Component {
  render() {
    const querys = window.location.search.slice(1)
    let login = null
    if (querys === '') {
      console.log('query is null')
      login = (<Login />)
    } else {
      const queryList = querys.split('&')
      const queryDict = {}
      queryList.forEach (query => {
        const key = query.split('=')[0]
        const value = query.split('=')[1]
        queryDict[key]=value
      })
      console.log(queryDict.name)
      console.log(queryDict.access_token)
      login = (<Login
        name={queryDict.name}
        access_token={queryDict.access_token}
      />)
      console.log(queryDict)
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {login}
      </div>
    );
  }
}

export default App;
