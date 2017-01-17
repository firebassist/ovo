//import data from './LibraryList.json'

const initialState = {
  menus: []
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'select_library':
      return state.map(todo => {
        if (todo.id !== action.payloadId) {
          return todo;
        }

        return {
          ...todo,
          title: action.payloadTitle,
          description: action.payloadDescription
        }
      })

    case 'add_library':
      return [
        ...state, {
          id: v4(),
          title: action.payloadTitle,
          description: action.payloadDescription
        }
      ]

    case 'remove_library':
        console.log(action.payloadId + ' SELECTED')

        const todoId = action.payloadId;
          return state.filter(todo => todo.id !== todoId);

    case 'fetch_menu':
      console.log(action.payload)
      
      return action.payload


    default:
      return state;
  }
}
