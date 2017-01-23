//import data from './LibraryList.json'

const initialState = [
    {"id":0,"titleText":"CHANGE TO BLANK FROM REDUCER","category":"carbs","titleImage":"https://dl.dropboxusercontent.com/s/dg9ftsssexbgb85/garlic-pasta.jpg"},
    {"id":1,"backText":"CHANGE BACKGROUND IMAGE","category":"protein","backImage":"https://dl.dropboxusercontent.com/s/bkv9xjl3w0ii8b1/Ovo-Title.jpg"}
  ]


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
