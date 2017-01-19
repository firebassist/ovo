import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import { Card, CardSection } from './common';


const windowDims = Dimensions.get('window')
const itemSize  = (windowDims.width / 2) - 15


class ListItem extends Component {
  onButtonPress() {
    Actions.titleMain();
  }

  render() {
    const { id, title, image } = this.props.library

    return (
      <Card>
        <CardSection>

        <TouchableOpacity
          onPress={this.onButtonPress.bind(this)}>

            <Image source={{ uri: image }}
              style={styles.imageStyle} >

              <CardSection style={{ padding: 5 }}>

                  <View>
                    <Text style={styles.textStyle}>
                      {title}
                    </Text>
                  </View>

              </CardSection>
            </Image>

          </TouchableOpacity>
          
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  textStyle: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  },
  imageStyle: {
    flex: 1,
    height: windowDims.height/3.2,
    width: windowDims.width,
    flexDirection: 'column'
  }
}

const mapStateToProps = state => {
  return { selectedLibraryIdFromMapStateToProps: state.selectedLibraryIdFromReducer }
}

export default connect(mapStateToProps, actions)(ListItem);
