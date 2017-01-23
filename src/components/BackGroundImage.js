import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';

const windowDims = Dimensions.get('window')

class BackgroundImage extends Component {

  render() {
    return (
      <Image source={this.props.source}
        style={styles.backgroundImage}>
          {this.props.children}
      </Image>
    );
  }
}

const styles = {
  backgroundImage: {
    width: null,
    height: windowDims.height,
    resizeMode: 'cover'
  }
}

export default BackgroundImage
