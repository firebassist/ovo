import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Title from './components/Title';
import LibraryList from './components/LibraryList';
import Contact from './components/Contact';

import MenuList from './components/MenuList'
import CategoryList from './components/CategoryList'
import CategoryItem from './components/CategoryItem'

class RouterComponent extends Component {
  customTitle() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }} >
          <Image
            source={require('./images/ovo-logo.jpg')}
            style={{ height: 50, width: 84 }}
            resizeMode="contain"
          />

            <Image
              source={require('./images/ovo-logo.jpg')}
              style={{ height: 50, width: 84 }}
              resizeMode="contain"
            />

        </View>
      )
  }

  render() {
    return (
      <Router>
      <Scene key="main">
      <Scene
        //onRight={() => Actions.addItem()}
        //rightTitle="MENU"
        key="itemList"
        component={LibraryList}
        //title="Item List in App"
        //renderTitle={this.customTitle}
        hideNavBar={true}
      />
        <Scene
          key="titleMain"
          component={Title}
          hideNavBar={true}
        />

        <Scene
          key="contact"
          component={Contact}
          hideNavBar={true}
        />
        <Scene
          key="menu"
          component={MenuList}
          hideNavBar={true}
        />
        <Scene
          key="category"
          component={CategoryList}
          hideNavBar={true}
        />
        <Scene
          key="citem"
          component={CategoryItem}
          hideNavBar={true}
        />

      </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
