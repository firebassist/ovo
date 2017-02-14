import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import MapView from 'react-native-maps';


class Contact extends Component {

  render() {
    const titleAdd = this.props.librariesFromList[0].titleAddress
    const titleCont = this.props.librariesFromList[0].titleContact
    const titleWeb = this.props.librariesFromList[0].titleWebsite

    return (
      <View style={{ paddingTop: 65 }}>

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

        <Text style={styles.mainText}>
          {titleAdd}
        </Text>
        <Text style={styles.mainText}>
          {titleCont}
        </Text>
        <Text style={styles.mainText}>
          {titleWeb}
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
    height: 300,
    width: 300,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000'
  }
}

const mapStateToProps = state => {
  return { librariesFromList: state.selectedLibraryIdFromReducer }
}

export default connect(mapStateToProps, null)(Contact);
