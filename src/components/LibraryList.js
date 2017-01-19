import React, { Component } from 'react';
import { ListView, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';

//import fetchMenuActionCreator from '../actions';
import * as actions from '../actions';
import Header from './common/Header'
import ListItem from './ListItem';




class LibraryList extends Component {
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
    return <ListItem library={library} />
  }

  render() {
    const dataSource = this.dataSource.cloneWithRows(this.props.librariesFromList);
    return (
      <View>
      <Header />

      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow}
        contentContainerStyle={styles.row}

      />

      </View>
    );
  }
}

const styles = {
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  },
  imageStyle: {
    height: 150,
    width: 150
  }
}


const mapStateToProps = state => {
  return { librariesFromList: state.selectedLibraryIdFromReducer }
}

export default connect(mapStateToProps, actions)(LibraryList);
