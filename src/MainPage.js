import React from 'react';
import Text from './ui/Text';
import Button from './ui/Button';
 

class MainPage extends React.Component {
  constructor(props) {
    super(props);
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