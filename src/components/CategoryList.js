import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';

//import fetchMenuActionCreator from '../actions';
import * as actions from '../actions';
//import ListItem from './ListItem';
import CategoryItem from './CategoryItem';

class CategoryList extends Component {
  constructor (props) {
    super(props)
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
  }

  componentWillMount() {
    this.props.fetchMenuActionCreator(this.props.dispatch)
  }



  renderRow(library) {
    return <CategoryItem library={library} />
  }

  render() {
    const dataSource = this.dataSource.cloneWithRows(this.props.librariesFromList);
    return (
      <View>
      <Header />
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow}
      />
      </View>
    );
  }
}


const mapStateToProps = state => {
  return { librariesFromList: state.selectedLibraryIdFromReducer }
}

export default connect(mapStateToProps, actions)(CategoryList);
