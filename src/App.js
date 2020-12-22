import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'

// redux stuff
import { createStore } from 'redux'
import reducer from './redux/reducer'
import { Provider } from 'react-redux'

// store
const store = createStore(reducer)

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
