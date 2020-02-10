import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import Headers from './Header';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Headers style={{flex: 1}} />
        <View style={{flex: 1}}>
          <Image
            source={require('../src/image/Vision-Map-01.jpg')}
            resizeMode="contain"
            style={styles.imageTopLogin}
          />
        </View>
        <View
          style={{flex: 4, flexDirection: 'column', justifyContent: 'center'}}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageTopLogin: {
    width: null,
    height: 150,
  },
});

export default Home;
