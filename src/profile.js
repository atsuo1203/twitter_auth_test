import React, { Component } from 'react';

class Profile extends Component {
  componentWillMount = () => {
    console.log('componentWillMount')
  }

  componentDidMount = () => {
    console.log('componentDidMount')
  }

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

export default Profile;
