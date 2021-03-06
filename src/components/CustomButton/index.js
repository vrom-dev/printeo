import './styles.css'

import { BsFillCartCheckFill } from 'react-icons/bs'

export const CustomButton = ({
  children,
  filled = false,
  secondary = false,
  addToCart = false,
  disabled = false,
  warning = false,
  onClick
}) => {

  const checkIfFilled = filled ? 'button button-filled' : 'button'
  let styles = checkIfFilled
  if (secondary) {
    styles += ' button-secondary'
  }
  if (warning) {
    styles += ' button-warning'
  }
  return (
    <button
      className={styles}
      disabled={disabled}
      onClick={onClick}
    >{
        addToCart
          ? <BsFillCartCheckFill />
          : children
      }</button>
  )
}
