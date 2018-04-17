import React, {
  Component
} from 'react';
import axios from 'axios'

class Login extends Component {
  state = {
    id: 0,
    twitter_id: "000000",
    name: "takashi",
    access_token: "access_token_yade",
    access_token_secret: "access_token_secret_yade",
  };


  componentWillMount = () => {
    this.get_data()
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

  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
    this.setState({
      resultName: event.target.value
    });
  }

  handleSubmit = event => {
    if (this.state.name !== '') {
      this.get_data();
      this.setState({
        name: ''
      });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {this.state.id}
        <br/>
        {this.state.twitter_id}
        <br/>
        {this.state.name}
        <br/>
        {this.state.access_token}
        <br/>
        {this.state.access_token_secret}
      </div>
    );
  }
}

export default Login;