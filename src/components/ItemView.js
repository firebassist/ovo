import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { SimpleButton, Card, CardSection, Input } from './common';
//import ItemScreen from './ItemScreen';
import * as actions from '../actions';

const windowDims = Dimensions.get('window')

class ItemView extends Component {

  render() {
    const { id, title, image, description } = this.props.library

    return (
      <Card>
        <CardSection>

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

        </CardSection>

        <CardSection>
          <View>
            <Text style={styles.descriptionStyle}>
              {description}
            </Text>
          </View>
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
    height: windowDims.height*.6,
    width: windowDims.width*.93,
    marginTop: 65,
    marginLeft: 10,
    marginRight: 10
  },
  descriptionStyle: {
    fontSize: 16,
    fontWeight: '600',
    padding: 10
  },
};

const mapStateToProps = state => {
  return { selectedLibraryIdFromMapStateToProps: state.selectedLibraryIdFromReducer }
}


export default connect(null, actions)(ItemView);
