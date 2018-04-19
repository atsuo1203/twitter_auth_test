import React, { Component } from 'react';

class Login extends Component {
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
