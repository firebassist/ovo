import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
//import Header from './common/Header'
import { connect } from 'react-redux';

import * as actions from '../actions';

import BackgroundImage from './BackGroundImage';

class Title extends Component {

  componentWillMount() {
    this.props.fetchMenuActionCreator(this.props.dispatch)
    this.props.selectTitleActionCreator(0)
  }

  render() {
    return (
        <BackgroundImage>

          <View style={styles.wrapStyle}>
            <Image
              source={require('../images/ovo-logo.jpg')}
              style={{ height: 80, width: 100 }}
            />

            <Text style={styles.mainText}>
              Bahay Sa Don Antonio: 26 Holy Spirit Drive
              mapStateToProps in title viewitem
              Call +63 917 824 2271
            </Text>

            <Text style={styles.mainText}>

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


export default connect(null, actions)(Title);
