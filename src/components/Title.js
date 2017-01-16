import React, { Component } from 'react';
import { View, Text } from 'react-native'
import Header from './common/Header'

import BackgroundImage from './BackGroundImage';

class Title extends Component {

  render() {
    return (
      <View>
        <Header />
        <BackgroundImage>
          <Text style={styles.mainText}>Our Version Of - OVO</Text>
          <Text style={styles.mainText}>
            Bahay Sa Don Antonio: 26 Holy Spirit Drive
            Quezon City
            Call +63 917 824 2271
          </Text>
        </BackgroundImage>
      </View>
    );
  }
}

const styles = {
  mainText: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16
  }
}



export default Title;
