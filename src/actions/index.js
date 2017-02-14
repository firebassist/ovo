import api from '../Api'


export const fetchMenuActionCreator=(dispatch)=> {
  return (dispatch) => {
    api.getMenus().then(
      data => dispatch({ type: 'fetch_menu', payload: data })
    );
  }
}
