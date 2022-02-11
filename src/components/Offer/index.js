import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'
import { OrderContext } from '../../context/OrderContext'

import { CustomButton } from '../CustomButton'

import './styles.css'

const roundPrice = (number) => Math.round(number * 100) / 100

export const Offer = ({ printer, totalVolume }) => {
  const { shoppingCart } = useContext(CartContext)
  const { setOrder, saveOrder } = useContext(OrderContext)
  const navigate = useNavigate()

  const productionPrice = roundPrice(printer.printingPrice * totalVolume)
  const shippingPrice = roundPrice(printer.shippingPrice * totalVolume)
  const totalPrice = roundPrice(productionPrice + shippingPrice)
  const shippingDays = printer.shippingTime / 24

  const createNewOrder = (printerId) => {
    const orderObj = {
      printer: printerId,
      totalPrice,
      quantityDetails: shoppingCart,
      prints: Object.keys(shoppingCart)
    }
    setOrder(orderObj)
    saveOrder(orderObj)
    navigate('../checkout', { replace: true })
  }

  return (
    <>
      <div className='offer-container'>
        <div className='offer-item'>
          <span className='offer-text-price'>{totalPrice}€</span>
          <span className='offer-text-description'>({productionPrice}€ prod.)</span>
          <span className='offer-text-description'>({shippingPrice}€ envío)</span>
        </div>
        <div className='offer-item'>
          <span className='offer-text-others'>{shippingDays === 1 ? `${shippingDays} día hábil` : `${shippingDays} días hábiles`}</span>
        </div>
        <div className='offer-item offer-item-hidden'>
          <span className='offer-text-others'>{printer.address.country}</span>
          <span className='offer-text-description'>{printer.companyName}</span>
        </div>
        <CustomButton
          onClick={() => createNewOrder(printer.id)}
        >
          Seleccionar
        </CustomButton>
      </div>
    </>
  )
}
