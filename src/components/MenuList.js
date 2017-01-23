import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import ListItem from './ListItem';

import api from '../Api'
import { connect } from 'react-redux';

import fetchMenuActionCreator from '../actions';

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

const mapStateToProps = state => {
  console.log(state)
  return { librariesFromList: state.selectedLibraryIdFromReducer }
}

export default MenuList;
//export default connect(mapStateToProps, fetchMenuActionCreator)(MenuList);
