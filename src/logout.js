import React, { Component } from 'react';

class Logout extends Component {
  handleLogout = () => {
    localStorage.clear()
    document.location.href = 'http://localhost:3000/'
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleLogout}
        >
        ログアウト
        </button>
      </div>
    );
  }
}

export default Logout;
