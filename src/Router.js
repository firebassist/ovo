import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LibraryList from './components/LibraryList';
import ItemEdit from './components/ItemEdit';
import ItemAdd from './components/ItemAdd';

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
      <Router sceneStyle={{ paddingTop: 5}}>
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
          key="editItem"
          component={ItemEdit}
          title="EDIT ITEM FORM"
        />
        <Scene
          key="addItem"
          component={ItemAdd}
          title="Add New Item"
        />
      </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
