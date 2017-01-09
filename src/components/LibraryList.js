import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import Header from './common/Header'
import ListItem from './ListItem';

class LibraryList extends Component {
  constructor (props) {
    super(props)
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
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
        renderRow={(rowData) => this.renderRow(rowData)}
      />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { librariesFromList: state.selectedLibraryIdFromReducer }
}

export default connect(mapStateToProps)(LibraryList);
