import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { AuthContextProvider } from './context/AuthContext'
import { PrinterAuthContextProvider } from './context/PrinterAuthContext'
import { OrderContextProvider } from './context/OrderContext'

import './style.css'

import { App } from './App'

ReactDOM.render(
  <Router>
    <OrderContextProvider>
      <PrinterAuthContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </AuthContextProvider>
      </PrinterAuthContextProvider>
    </OrderContextProvider>
  </Router>,
  document.getElementById('app')
)
