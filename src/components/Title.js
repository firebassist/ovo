import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

import { Card, CardSection } from './common';
import BackgroundImage from './BackGroundImage';

const windowDims = Dimensions.get('window')


class Title extends Component {

  componentWillMount() {
    this.props.fetchMenuActionCreator(this.props.dispatch)
  }

  onButtonPress() {
    Actions.promoView(
      { promoText: this.props.librariesFromList[2].promoText,
        promoDescription: this.props.librariesFromList[2].promoDescription,
        promoImage: this.props.librariesFromList[2].promoImage
      }
    );
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

            <TouchableOpacity
                onPress={this.onButtonPress.bind(this)}>

              <View style={styles.promoWrapStyle}>
                  <Image
                    source={{ uri: promoImg }}
                    style={styles.promoImgStyle}
                  />

                  <Text style={styles.promText}>
                    {promoT}
                  </Text>
              </View>

            </TouchableOpacity>

        </Card>
      </BackgroundImage>
    );
  }
}

const styles = {
  logoWrapStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 70
  },
  promoWrapStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, .6)'
  },
  titleLogoStyle: {
    height: 100,
    width: 150
  },
  promoImgStyle: {
    height: 80,
    width: 120
  },
  promoText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 18
  }
}

const mapStateToProps = state => {
  return { librariesFromList: state.selectedLibraryIdFromReducer }
}

export default connect(mapStateToProps, actions)(Title);
