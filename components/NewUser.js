import React, {Component} from 'react';
import {Input, View, Button} from 'react-native';

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      email: '',
      address: '',
      created: '',
      balance: '',
    };
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.warn(this.state);
  };

  render() {
    const {first, last, email, address, created, balance} = this.state;
    return (
      <View>
        <View>
          <Input
            type="text"
            name="first"
            value={first}
            onChange={this.changeHandler}
          />
        </View>
        <View>
          <Input
            type="text"
            name="last"
            value={last}
            onChange={this.changeHandler}
          />
        </View>
        <View>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={this.changeHandler}
          />
        </View>
        <View>
          <Input
            type="text"
            name="address"
            value={address}
            onChange={this.changeHandler}
          />
        </View>
        <View>
          <Input
            type="text"
            name="created"
            value={created}
            onChange={this.changeHandler}
          />
        </View>
        <View>
          <Input
            type="text"
            name="balance"
            value={balance}
            onChange={this.changeHandler}
          />
        </View>
        <Button onPress={this.submitHandler}>Submit</Button>
      </View>
    );
  }
}

export default NewUser;
