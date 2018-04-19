import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.url}
          alt="プロフィール画像"
          width="200" height="200"
          border="0"
        />
        <br/>
        {this.props.name}
      </div>
    );
  }
}

export default Profile;
