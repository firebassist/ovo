import React, { Component } from 'react';
import { ScrollView, View, Text, Image, Dimensions } from 'react-native'

import { connect } from 'react-redux';

import * as actions from '../actions';

import { SimpleButton, Card, CardSection } from './common';
import BackgroundImage from './BackGroundImage';

const windowDims = Dimensions.get('window')


class Title extends Component {

  componentWillMount() {
    this.props.fetchMenuActionCreator(this.props.dispatch)
  }


  render() {
    const titleT = this.props.librariesFromList[0].titleText
    const titleImg = this.props.librariesFromList[0].titleImage
    const backImg = this.props.librariesFromList[1].backImage
    const promoT = this.props.librariesFromList[2].promoText
    const promoImg = this.props.librariesFromList[2].promoImage

    return (
      <BackgroundImage source={{ uri: backImg }}>
          <Card style={{ paddingTop: 200 }}>


<View style={styles.logoWrapStyle}>
            <Image
              source={{ uri: titleImg }}
              style={styles.titleLogoStyle}
            />


</View>
<View style={styles.promoWrapStyle}>
            <Image
              source={{ uri: promoImg }}
              style={{ height: 120, width: 150 }}
            />

            <Text style={styles.promText}>
              {promoT}
            </Text>
</View>
          </Card>
        </BackgroundImage>
    );
  }
}

const styles = {
  logoWrapStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  promoWrapStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white'
  },
  titleLogoStyle: {
    height: 80,
    width: 120
  },
  promoText: {
    textAlign: 'center',
    color: '#000000',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 16
  }
}

const mapStateToProps = state => {
  return { librariesFromList: state.selectedLibraryIdFromReducer }
}

export default connect(mapStateToProps, actions)(Title);
