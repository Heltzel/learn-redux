import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [], amount: 0, total: 0 }

    case DECREASE:
      let decreaseCart = []
      if (action.payload.amount === 1) {
        decreaseCart = state.cart.filter(
          (item) => item.id !== action.payload.id,
        )
      } else {
        decreaseCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item = { ...item, amount: item.amount - 1 }
          }
          return item
        })
      }
      return { ...state, cart: decreaseCart }

    case INCREASE:
      let increaseCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount + 1 }
        }
        return item
      })
      return { ...state, cart: increaseCart }

    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, CartItem) => {
          const { price, amount } = CartItem
          const itemTotal = price * amount
          cartTotal.total += itemTotal
          cartTotal.amount += amount

          return cartTotal
        },
        {
          total: 0,
          amount: 0,
        },
      )
      total = parseFloat(total).toFixed(2)
      return { ...state, amount: amount, total: total }

    default:
      break
  }

  // if (action.type === CLEAR_CART) {
  //   return { ...state, cart: [], amount: 0, total: 0 }
  // }

  return state
}

export default reducer
