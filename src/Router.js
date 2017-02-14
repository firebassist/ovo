import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome'

import Title from './components/Title';
import LibraryList from './components/LibraryList';
import ItemView from './components/ItemView';
import PromoView from './components/PromoView';
import Contact from './components/Contact';


class RouterComponent extends Component {

  customRight() {
    return (
      <TouchableOpacity onPress={() => Actions.contact()} style={{ flex: 1, flexDirection: 'row' }}>

        <Icon name='phone'
          size={20}
          style={styles.cutleryStyle}
        />

      </TouchableOpacity>
      )
  }

  customLeft() {
    return (
      <TouchableOpacity onPress={() => Actions.itemList()} style={{ flex: 1, flexDirection: 'row' }}>

        <Icon name='cutlery'
          size={20}
          style={styles.cutleryStyle}
        />

      </TouchableOpacity>
      )
  }

  render() {
    return (
      <Router>
      <Scene key="main" navigationBarStyle={styles.navStyle}>

        <Scene
          key="titleMain"
          component={Title}
          renderRightButton={this.customRight}
          title="Our Version Of"
          titleStyle={styles.titleStyle}
          renderLeftButton={this.customLeft}
        />
        <Scene
          key="itemList"
          component={LibraryList}
          title="Menu"
          titleStyle={styles.titleStyle}
          leftButtonIconStyle = {{ tintColor:'red'}}
        />
        <Scene
          key="itemView"
          component={ItemView}
          leftButtonIconStyle = {{ tintColor:'red'}}
          title="Satisfy Your Craving"
          titleStyle={styles.titleStyle}
        />

        <Scene
          key="promoView"
          component={PromoView}
          leftButtonIconStyle = {{ tintColor:'red'}}
          titleStyle={styles.titleStyle}
        />

        <Scene
          key="contact"
          component={Contact}
          title="Visit Us"
          titleStyle={styles.titleStyle}
          leftButtonIconStyle = {{ tintColor:'red'}}
        />

      </Scene>
      </Router>
    );
  }
}

const styles = {
  navStyle: {
    backgroundColor: 'rgba(11,10,10,.7)'
  },
  titleStyle: {
    color: 'red'
  },
  cutleryStyle: {
    color: 'red',
    alignItems: 'flex-start',
    marginRight: 20,
    marginLeft: 20
  }
}

export default RouterComponent;
