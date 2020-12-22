import { DECREASE, INCREASE, CLEAR_CART } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [], amount: 0, total: 0 }

    default:
      return state
  }

  // if (action.type === CLEAR_CART) {
  //   return { ...state, cart: [], amount: 0, total: 0 }
  // }
  // return state
}

export default reducer
