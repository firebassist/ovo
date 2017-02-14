import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';

import * as actions from '../actions';

const windowDims = Dimensions.get('window')

class PromoView extends Component {

  render() {
    const promoText = this.props.promoText
    const promoDescription = this.props.promoDescription
    const promoImage = this.props.promoImage

    return (
      <Card>

        <CardSection>
            <Image source={{ uri: promoImage }}
              style={styles.imageStyle} >

              <CardSection style={{ padding: 5 }}>
                  <View>
                    <Text style={styles.textStyle}>
                      {promoText}
                    </Text>
                  </View>
              </CardSection>

            </Image>
        </CardSection>

        <CardSection>
          <View>
            <Text style={styles.descriptionStyle}>
              {promoDescription}
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
    padding: 5
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


export default connect(null, actions)(PromoView);
