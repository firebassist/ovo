import React, { Component } from 'react';
import { Image } from 'react-native';

class BackgroundImage extends Component {

  render() {
    return (
      <Image source={require('../images/main-background.jpg')}
        style={styles.backgroundImage}>
          {this.props.children}
      </Image>
    );
  }
}

const styles = {
  backgroundImage: {
    //flex: 1,
    width: null,
    height: 600,
    resizeMode: 'cover',
    backgroundColor: '#000000'
  }
}

export default BackgroundImage
