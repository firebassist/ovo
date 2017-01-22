//import data from './LibraryList.json'

const initialState = {
  menus: [
    {"id":0,"title":"Garlic Pasta","category":"carbs","image":"https://dl.dropboxusercontent.com/s/dg9ftsssexbgb85/garlic-pasta.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"},
    {"id":1,"title":"Herbed Chicken","category":"protein","image":"https://dl.dropboxusercontent.com/s/832hih9k12gft7x/herbed-chicken.jpg","thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"}
  ]
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'select_cat':
    console.log("cat")
    console.log(action.payloadCategory)


        return state



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
      console.log("FETCHED")
      console.log(state)
      let obj = action.payload
      state = Object.assign({}, obj);
      console.log(state)
      return state





    default:
      return state;
  }
}
