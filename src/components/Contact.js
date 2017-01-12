import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from './common/Header';
import MapView from 'react-native-maps';


class Contact extends Component {

  render() {
    return (
      <View>
        <Header />

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 14.680219,
            longitude: 121.080838,
            latitudeDelta: 0.00422,
            longitudeDelta: 0.0041,
          }}
        >
        <MapView.Marker
            coordinate={{
              latitude: 14.680219,
              longitude: 121.080838 }}
              title={"Our Version Of"}
              description={"description"}
         />
      </MapView>

        <Text style={styles.mainText}>Our Version Of</Text>
        <Text style={styles.mainText}>
          ADDRESS: Bahay Sa Don Antonio: 26 Holy Spirit Drive
          Quezon City, Philippines
        </Text>
        <Text style={styles.mainText}>
          https://www.facebook.com/ourversionof/
          Call: +63 917 824 2271
        </Text>

      </View>
    );
  }
}

const styles = {
  mainText: {
    textAlign: 'center',
    color: '#000000',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16
  },
  map: {
    height: 150,
    width: 300,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000'
  }
}



export default Contact;
