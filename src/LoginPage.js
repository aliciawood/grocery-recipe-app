import React from 'react';
import Text from './ui/Text';
import Button from './ui/Button';
 

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: '',
      // password: ''
    };
    this.email = '';
    this.password = '';
  }

  onClick(){
    console.log("LOG IN!!!!");
    console.log("email: ",this.state.email);
    console.log("password: ",this.state.password);
  }

  changeEmail(e){
    console.log('changeEmail: ',e);
  }
 
  render() {
    return (
      <div>
        <Text
          placeholder={'email'}
          value={this.email}      //change to MODEL soon!
          onChange={this.changeEmail}
        />
        <Text
          placeholder={'password'}
          value={this.password}
        />
        <Button
          label={'Log In'}
          onClick={this.onClick}
        />
      </div>
    );
  }
}
export default LoginPage;