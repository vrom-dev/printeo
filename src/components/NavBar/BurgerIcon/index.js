import { useState } from 'react'
import './styles.css'

export const BurgerIcon = ({ toggle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    toggle()
  }

  const iconStyles = isOpen
    ? 'burger-icon__open burger-icon'
    : 'burger-icon'

  return (
    <button
      className='burger-button'
      onClick={handleClick}
    >
      <div className={iconStyles} />
    </button>
  )
}
