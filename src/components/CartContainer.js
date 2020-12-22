import React from 'react'
import { connect } from 'react-redux'
import { CLEAR_CART } from '../redux/actions'
import CartItem from './CartItem'

const CartContainer = ({ cart = [], total, dispatch }) => {
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>&euro; {parseFloat(total).toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}
const mapStateToProps = (state) => {
  return { cart: state.cart, total: state.total }
}
export default connect(mapStateToProps)(CartContainer)
