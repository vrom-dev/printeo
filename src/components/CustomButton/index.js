import './styles.css'

import { BsCartPlus } from 'react-icons/bs'

export const CustomButton = ({ label, filled = false, secondary = false, addToCart = false }) => {
  const checkAddToCartIcon = window.innerWidth < 600 && addToCart

  const checkIfFilled = filled ? 'button button-filled' : 'button'
  const styles = secondary ? checkIfFilled + ' button-secondary' : checkIfFilled
  return (
    <button className={styles}>{
      checkAddToCartIcon
        ? <BsCartPlus/>
        : label
    }</button>
  )
}
