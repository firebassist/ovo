import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome'

class Header extends Component {
  render () {
    return (
      <View style={styles.headerWrapperStyle}>

        <View style={styles.headerLogoStyle}>
          <Image
            source={require('../../images/ovo-logo.jpg')}
            style={{ height: 80, width: 100 }}
          />
        </View>

        <View style={styles.menuContactStyle}>

          <TouchableOpacity onPress={() => Actions.addItem()}>
            <View>
              <Icon name='cutlery'
                size={30}
                style={styles.cutleryStyle}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Actions.itemList()}>
            <View>
              <Icon name='phone'
                size={30}
                style={styles.cutleryStyle}
              />
            </View>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
};

const styles = {
  headerWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerLogoStyle: {
    marginLeft: 10
  },
  menuContactStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 10
  },
  iconButtonStyle: {
    marginRight: 20,
    marginLeft: 20
  },
  cutleryStyle: {
    color: "#000000",
    marginRight: 20,
    marginLeft: 20
  }
};

export default Header;
