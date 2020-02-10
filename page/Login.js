/* eslint-disable react/jsx-no-duplicate-props */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import {Button, TextInput} from 'react-native-paper';

class Login extends Component {
  state = {
    uname: '',
    pass: '',
  };

  // handleChangeText = e => {
  //   this.setState({
  //     [e.target.id]: e.target.value,
  //   });
  // };
  // onPress() {}

  // const {history} = this.props;
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 2}}>
          <Image
            source={require('../src/image/Header-Product.jpg')}
            style={styles.imageTopLogin}
          />
        </View>

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 4,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <View style={styles.containerForm}>
            <View style={styles.FormLogin}>
              <Image
                source={require('../src/image/kraftHeinzLogo_whiteBorder_CMYK.png')}
                resizeMode="contain"
                style={styles.imageFormLogin}
              />
            </View>
            <TextInput
              label="Username"
              value={this.state.text}
              onChangeText={text => this.setState({text})}
              style={styles.inputform}
              id="uname"
              value={this.state.uname}
              onChange={this.handleChangeText}
            />
            <TextInput
              label="Password"
              value={this.state.pass}
              onChangeText={pass => this.setState({pass})}
              style={styles.inputformpass}
              id="pass"
              value={this.state.pass}
              onChange={this.handleChangeText}
            />
            <Button
              mode="contained"
              onPress={() => this.props.history.push('/home')}>
              Login
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  prelative: {
    flexDirection: 'column',
  },
  imageTopLogin: {
    width: null,
    height: 250,
  },
  FormLogin: {
    alignSelf: 'center',

    justifyContent: 'center',
    alignItems: 'center',
  },
  imageFormLogin: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    width: 300,
    alignSelf: 'center',
  },
  inputform: {
    marginTop: 15,
    backgroundColor: 'transparent',
  },
  inputformpass: {
    marginTop: 10,
    backgroundColor: 'transparent',
    marginBottom: 15,
  },
});

export default Login;
