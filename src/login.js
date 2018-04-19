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
    const responseData = response.data[0]
    this.setState({
      id: responseData['id'],
      twitter_id: responseData['twitter_id'],
      name: responseData['name'],
      access_token: responseData['access_token'],
      access_token_secret: responseData['access_token_secret'],
    });
  }

  handleCache = () => {
    // localStorage.setItem('hogehoge', 'hugahuga')
  }

  render() {
    return (
      <div>
        <button>
          ログインボタン
        </button>
      </div>
    );
  }
}

export default Login;
