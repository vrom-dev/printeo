import { useContext } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'

import { AuthContext } from './context/AuthContext'
import { PrinterAuthContext } from './context/PrinterAuthContext'
import { OrderContext } from './context/OrderContext'

import { Home } from './pages/Home'
import { UserAdmin } from './pages/UserAdmin'
import { STLAdmin } from './pages/STLAdmin'
import { STLEdit } from './pages/STLEdit'
import { Print } from './pages/Print'
import { Signup } from './pages/Signup'
import { PrinterSignup } from './pages/PrinterSignup'
import { PrinterLogin } from './pages/PrinterLogin'
import { PrinterAdmin } from './pages/PrinterAdmin'
import { Login } from './pages/Login'
import { Offers } from './pages/Offers'
import { Checkout } from './pages/Checkout'
import { CheckoutSuccess } from './pages/CheckoutSuccess'
import { ShoppingCart } from './pages/ShoppingCart'
import { UserOrders } from './pages/UserOrders'
import { OrderDetail } from './pages/OrderDetail'

export function App() {
  const { authToken } = useContext(AuthContext)
  const { printerAuthToken } = useContext(PrinterAuthContext)
  const { order } = useContext(OrderContext)

  return (
    <Routes>
      <Route exact path="/" element={!authToken && !printerAuthToken ? <Home /> : authToken ? <Navigate to='/user/admin' replace /> : <Navigate to='/printer/admin' replace />} />
      <Route exact path="/user/admin" element={authToken && !printerAuthToken ? <UserAdmin /> : <Navigate to='/' replace />} />
      <Route exact path="/user/prints/:id" element={authToken && !printerAuthToken ? <STLEdit /> : <Navigate to='/' replace />} />
      <Route exact path="/user/prints" element={authToken && !printerAuthToken ? <STLAdmin /> : <Navigate to='/' replace />} />
      <Route exact path="/user/orders/:id" element={authToken && !printerAuthToken ? <OrderDetail /> : <Navigate to='/' replace />} />
      <Route exact path="/user/orders" element={authToken && !printerAuthToken ? <UserOrders /> : <Navigate to='/' replace />} />
      <Route exact path="/print" element={!authToken || printerAuthToken ? <Navigate to='/login' replace /> : <Print />} />
      <Route exact path="/signup" element={!authToken && !printerAuthToken ? <Signup /> : <Navigate to='/' replace />} />
      <Route exact path="/login" element={!printerAuthToken && !authToken ? <Login /> : <Navigate to='/' replace />} />
      <Route exact path="/offers" element={authToken && !printerAuthToken ? <Offers /> : <Navigate to='/' replace />} />
      <Route exact path="/cart" element={!printerAuthToken ? <ShoppingCart /> : <Navigate to='/' replace />} />
      <Route exact path="/printer/signup" element={!authToken && !printerAuthToken ? <PrinterSignup /> : <Navigate to='/' replace />} />
      <Route exact path="/printer/login" element={!authToken && !printerAuthToken ? <PrinterLogin /> : <Navigate to='/' replace />} />
      <Route exact path="/printer/admin" element={!authToken && printerAuthToken ? <PrinterAdmin /> : <Navigate to='/' replace />} />
      <Route exact path="/printer/orders/:id" element={!authToken && printerAuthToken ? <OrderDetail /> : <Navigate to='/' replace />} />
      <Route exact path="/printer/orders" element={!authToken && printerAuthToken ? <PrinterAdmin /> : <Navigate to='/' replace />} />
      <Route exact path="/checkout" element={authToken && !printerAuthToken && order ? <Checkout /> : <Navigate to='/' replace />} />
      <Route exact path="/checkout/completed" element={!authToken ? <Navigate to='/' /> : <CheckoutSuccess />} />
    </Routes>
  )
}

