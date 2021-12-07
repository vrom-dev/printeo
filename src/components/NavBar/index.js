import { useState } from 'react'

import { CustomButton } from '../CustomButton'
import { BurgerIcon } from './BurgerIcon'

import './styles.css'
import PrinteoLogo from '../../assets/printeo-logo-32h.png'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
  }

  const showMenu = isOpen
    ? 'navbar-list navbar-list__open'
    : 'navbar-list'

  return (
    <nav className='navbar'>
      <img src={PrinteoLogo} className='navbar-logo'/>
      <BurgerIcon toggle={handleOpenMenu}/>
      <ul className={showMenu}>
          <li className='navbar-list__item'>
            <CustomButton label='Registrarse'/>
          </li>
          <li className='navbar-list__item'>Carrito</li>
          <li className='navbar-list__item'>Carrito</li>
          <li className='navbar-list__item'>Carrito</li>
          <li className='navbar-list__item'>Carrito</li>
          <li className='navbar-list__item'>Carrito</li>
      </ul>
    </nav>
  )
}
