import React, {
  Component
} from 'react';
import axios from 'axios'

class Login extends Component {
  state = {
    id: 0,
    twitter_id: "",
    name: "",
    access_token: "",
    access_token_secret: "",
  };

  async get_data() {
    const response = await axios({
      method: 'get',
      url: 'http://127.0.0.1:5000/',
    });
    console.log('aaaaaaaaaaaaaa')
    console.log(response);
    // this.setState({
    //   id: response.data,
    //   twitter_id: "",
    //   name: "",
    //   access_token: "",
    //   access_token_secret: "",
    // });
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
    this.get_data()
    return (
      <div>
        Hello world
      </div>
    );
  }
}

export default Login;