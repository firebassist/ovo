import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
//import Header from './common/Header'

import BackgroundImage from './BackGroundImage';

class Title extends Component {

  render() {
    return (
        <BackgroundImage>

        <View style={styles.wrapStyle}>
          <Image
            source={require('../images/ovo-logo.jpg')}
            style={{ height: 80, width: 100 }}
          />

          <Text style={styles.mainText}>Our Version Of - OVO</Text>
          <Text style={styles.mainText}>
            Bahay Sa Don Antonio: 26 Holy Spirit Drive
            Quezon vvvvvvv
            Call +63 917 824 2271
          </Text>
        </View>
        </BackgroundImage>
    );
  }
}

const styles = {
  wrapStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 65
  },
  mainText: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16
  }
}



export default Title;
