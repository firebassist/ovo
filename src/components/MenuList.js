import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import Header from './common/Header'
import ListItem from './ListItem';

import api from '../Api'

class MenuList extends Component {
  state = {
    menus: []
  }

  componentWillMount() {
    api.getMenus().then((res) => {
      this.setState({
        menus: res.menus
      })
    })
  }


  renderMenus() {
    return this.state.menus.map(library =>
      <ListItem key={library.title} library={library} />
      )
  }

  render () {
    console.log(this.state)
    return (
      <View>
      <Header />
      <ScrollView>
        {this.renderMenus()}
      </ScrollView>
      </View>
    );
  }
}

export default MenuList;
