import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import { Card, CardSection, Button } from './common';


const windowDims = Dimensions.get('window')
const itemSize  = (windowDims.width / 2) - 20


class ListItem extends Component {
  onButtonPress() {
    Actions.titleMain();
  }

  getImage(id) {
      switch(id) {
          case 0:
              return require('../images/spiced-beef.jpg');
          case 1:
              return require('../images/herbed-chicken.jpg');
          case 2:
              return require('../images/cheesy-potato.jpg');
          case 3:
              return require('../images/rice-pilaf.jpg');
          default:
              return require('../images/ovo-logo.jpg');
      }
  }

  render() {
    const { id, title, image } = this.props.library
    //var icon = require('../images/spiced-beef.jpg')
    icon = this.getImage(id)

    return (
      <Card>

        <CardSection style={{ padding: 5 }}>
          <TouchableOpacity
            onPress={this.onButtonPress.bind(this)}>
            <View>
              <Text style={styles.textStyle}>
                {title}
              </Text>
            </View>
          </TouchableOpacity>
        </CardSection>

        <CardSection>
          <Image source={{ uri: image }}
            style={styles.imageStyle}/>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  textStyle: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  },
  imageStyle: {
    height: itemSize,
    width: itemSize
  }
}

const mapStateToProps = state => {
  return { selectedLibraryIdFromMapStateToProps: state.selectedLibraryIdFromReducer }
}

export default connect(mapStateToProps, actions)(ListItem);
