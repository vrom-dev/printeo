import { Routes, Route, Link } from 'react-router-dom'

import { CartContextProvider } from './context/CartContext'

import { Home } from './pages/Home'
import { Print } from './pages/Print'
import { UserSignup } from './pages/UserSignup'
import { Offers } from './pages/Offers'
import { Checkout } from './pages/Checkout'

export function App () {
  return (
    <CartContextProvider
      value={{
        shoppingCart: [],
        user: null
      }}
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/print" element={<Print />} />
        <Route exact path="/signup/user" element={<UserSignup />} />
        <Route exact path="/offers" element={<Offers />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </CartContextProvider>
  )
}
