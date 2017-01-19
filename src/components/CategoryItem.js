import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

import { Card, CardSection, SimpleButton } from './common';

class CategoryItem extends Component {


  onButtonPress() {
    Actions.itemList()
    //this.props.selectCatActionCreator(category)
  }

  render() {
    const { category } = this.props.library
    return (
      <Card>

        <CardSection style={{ padding: 5 }}>
          <SimpleButton
            onPress={() => this.props.selectCatActionCreator(category)}>
            {category}
          </SimpleButton>
        </CardSection>

      </Card>
    );
  }
}


const mapStateToProps = state => {
  return { librariesFromList: state.selectedLibraryIdFromReducer }
}

export default connect(null, actions)(CategoryItem);
