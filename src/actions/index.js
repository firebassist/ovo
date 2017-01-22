
import api from '../Api'
const API_URL = 'https://dl.dropboxusercontent.com/s/b3hvg307y3t2qjy/albums.json';


export const selectCatActionCreator = (category) => {
  return {
    type: 'select_cat',
    payloadCategory: category
  }
}

export const selectTitleActionCreator = (id) => {
  return {
    type: 'select_title',
    payloadId: id
  }
}

export const fetchMenuActionCreator=(dispatch)=> {
  return (dispatch) => {
    api.getMenus().then(
      data => dispatch({ type: 'fetch_menu', payload: data.menus })
    );
  }
}
