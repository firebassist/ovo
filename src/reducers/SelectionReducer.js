
const initialState = [
    {"id":0,
      "titleText":"CHANGE TO BLANK FROM REDUCER",
      "titleImage":"https://dl.dropboxusercontent.com/s/bflfsx20brnwj52/ovo-logo.jpg"
    },
    {"id":1,"backText":"CHANGE BACKGROUND IMAGE",
      "backImage":"https://dl.dropboxusercontent.com/s/ef1y9d9qe0mu13t/newMenu.jpg"
    },
    {"id":2,"promoText":"CHANGE PROMO IMAGE",
      "promoImage":"https://dl.dropboxusercontent.com/s/476e6yd13ahem0j/were-open.jpg"
    }
  ]


export default (state = initialState, action) => {
  switch (action.type) {

    case 'fetch_menu':
      let obj = action.payload
      state = Object.assign({}, obj);
      return state

    default:
      return state;
  }
}
