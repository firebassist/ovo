import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native'

import { connect } from 'react-redux';

import * as actions from '../actions';

import BackgroundImage from './BackGroundImage';

class Title extends Component {

  componentWillMount() {
    this.props.fetchMenuActionCreator(this.props.dispatch)
  }


  render() {
    const titleT = this.props.librariesFromList[0].titleText
    const titleImg = this.props.librariesFromList[0].titleImage
    const backImg = this.props.librariesFromList[1].backImage

    return (
        <BackgroundImage source={{ uri: backImg }}>

          <ScrollView contentContainerStyle={styles.wrapStyle}>
            <Image
              source={{ uri: titleImg }}
              style={{ height: 80, width: 100 }}
            />

            <Text style={styles.mainText}>
              {titleT}
            </Text>

            <Image
              source={{ uri: titleImg }}
              style={{ height: 80, width: 100 }}
            />

          </ScrollView>
        </BackgroundImage>
    );
  }
}

const styles = {
  wrapStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 165
  },
  mainText: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16
  }
}

const mapStateToProps = state => {
  return { librariesFromList: state.selectedLibraryIdFromReducer }
}

export default connect(mapStateToProps, actions)(Title);
