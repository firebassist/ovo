import { combineReducers } from 'redux';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  selectedLibraryIdFromReducer: SelectionReducer
});
