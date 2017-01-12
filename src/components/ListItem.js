import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import { Card, CardSection, Button } from './common';

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
          <Image source={icon}
            style={styles.imageStyle}/>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  textStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  },
  imageStyle: {
    flex: 1,
    height: 300,
    width: null
  }
}

const mapStateToProps = state => {
  return { selectedLibraryIdFromMapStateToProps: state.selectedLibraryIdFromReducer }
}

export default connect(mapStateToProps, actions)(ListItem);
