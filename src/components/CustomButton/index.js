import './styles.css'

import { BsCartPlus } from 'react-icons/bs'

export const CustomButton = ({
  children,
  filled = false,
  secondary = false,
  addToCart = false,
  disabled = false
}) => {
  const checkAddToCartIcon = window.innerWidth < 600 && addToCart

  const checkIfFilled = filled ? 'button button-filled' : 'button'
  const styles = secondary ? checkIfFilled + ' button-secondary' : checkIfFilled
  return (
    <button className={styles} disabled={disabled}>{
      checkAddToCartIcon
        ? <BsCartPlus/>
        : children
    }</button>
  )
}
