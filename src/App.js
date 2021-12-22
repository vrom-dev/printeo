import { Routes, Route } from 'react-router-dom'

import { CartContextProvider } from './context/CartContext'
import { AuthContextProvider } from './context/AuthContext'

import { Home } from './pages/Home'
import { Print } from './pages/Print'
import { Signup } from './pages/Signup'
import { Offers } from './pages/Offers'
import { Checkout } from './pages/Checkout'

export function App () {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/print" element={<Print />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/offers" element={<Offers />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </CartContextProvider>
    </AuthContextProvider>
  )
}
