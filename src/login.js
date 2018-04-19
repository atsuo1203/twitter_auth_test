import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {
  componentWillMount = () => {
    console.log('componentWillMount')
  }

  componentDidMount = () => {
    console.log('componentDidMount')
  }

  async get_data() {
    const response = await axios({
      method: 'get',
      url: 'http://127.0.0.1:5000/',
    });
    console.log(response)
  }

  handleCache = () => {
    // localStorage.setItem('hogehoge', 'hugahuga')
  }

  handleAuthorize = () => {
    document.location.href = 'http://127.0.0.1:5000/authorize'
  }

  render() {
    return (
      <div>
        <button
        onClick={this.handleAuthorize}
        >
        ログイン
        </button>
      </div>
    );
  }
}

export default Login;
