import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'
import { PrinterAuthContext } from '../../context/PrinterAuthContext'
import { CartContext } from '../../context/CartContext'

import { BurgerIcon } from './BurgerIcon'
import { BsCart } from 'react-icons/bs'

import './styles.css'
import PrinteoLogo from '../../assets/printeo-logo-32h.png'
import PrinteoLogoForPrinters from '../../assets/printeo-logo-32h-printers.png'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { authToken, setAuthToken } = useContext(AuthContext)
  const { printerAuthToken, setPrinterAuthToken } = useContext(PrinterAuthContext)
  const { totalProducts, clearCart } = useContext(CartContext)

  const handleLogout = () => {
    window.localStorage.removeItem('printeo-session')
    window.localStorage.removeItem('printeo-printer-session')
    clearCart()
    setAuthToken(null)
    setPrinterAuthToken(null)
  }

  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
  }

  const showMenu = isOpen
    ? 'navbar-list navbar-list__open'
    : 'navbar-list'

  return (
    <nav className='navbar'>
      <Link to="/">
        <img src={printerAuthToken ? PrinteoLogoForPrinters : PrinteoLogo} className='navbar-logo' />
      </Link>
      <BurgerIcon toggle={handleOpenMenu} />
      <ul className={showMenu}>
        {
          !authToken && !printerAuthToken
            ? (
              <>
                <li className='navbar-list__item'>
                  <Link to="/signup" className='button'>
                    Registrarse
                  </Link>
                </li>
                <li className='navbar-list__item'>
                  <Link
                    to="/login"
                    className='button button-secondary'
                  >
                    Iniciar sesión
                  </Link>
                </li>
              </>
            )
            :
            <>
              <li className='navbar-list__item'>
                <Link
                  to="/"
                  className='button button-secondary'
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>

              {
                authToken ?
                  <>
                    <li className='navbar-list__item'>
                      <Link to="/user/admin" className='navbar-list__link'>
                        Panel de control
                      </Link>
                    </li>
                    <li className='navbar-list__item'>
                      <Link to="/print" className='navbar-list__link'>
                        Nueva impresión
                      </Link>
                    </li>
                    <li className='navbar-list__item'>
                      <Link to="/cart" className='navbar-list__link'>
                        <BsCart
                          className='cart-icon'
                        />
                        {totalProducts()}
                      </Link>
                    </li>
                  </> :
                  <li className='navbar-list__item'>
                    <Link to="/printer/admin" className='navbar-list__link'>
                      Panel de control
                    </Link>
                  </li>
              }
            </>
        }
      </ul>
    </nav>
  )
}
