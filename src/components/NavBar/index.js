import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'

import { CustomButton } from '../CustomButton'
import { BurgerIcon } from './BurgerIcon'

import './styles.css'
import PrinteoLogo from '../../assets/printeo-logo-32h.png'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, setUser } = useContext(AuthContext)

  const onLogout = () => {
    window.localStorage.removeItem('printeo-session')
    setUser(null)
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
        <img src={PrinteoLogo} className='navbar-logo'/>
      </Link>
      <BurgerIcon toggle={handleOpenMenu}/>
      <ul className={showMenu}>
        {
          !user
            ? (
            <>
              <li>
                <Link to="/signup">
                  <CustomButton>Registrarse</CustomButton>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <CustomButton secondary>Iniciar sesión</CustomButton>
                </Link>
              </li>
            </>
              )
            : (
            <li>
              <Link to="/">
                <CustomButton
                  secondary
                  onClick={onLogout}
                >Logout</CustomButton>
              </Link>
            </li>
              )
        }

          <li className='navbar-list__item'>
            <Link to="/print">
              Imprimir
            </Link>
          </li>
          <li className='navbar-list__item'>Carrito</li>
      </ul>
    </nav>
  )
}
