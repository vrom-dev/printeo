import { useEffect, useState, useContext } from 'react'

import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'

import { OrderContext } from '../../context/OrderContext'

import { CustomButton } from '../CustomButton'
import { Spinner } from '../Spinner'

import './styles.css'

export const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const { order } = useContext(OrderContext)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!stripe) {
      return
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    )
    if (!clientSecret) {
      return
    }
    stripe.retrievePaymentIntent(clientSecret)
  }, [stripe])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }
    setIsLoading(true)
    await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:8080/checkout/completed'
      }
    })
    setIsLoading(false)
  }

  return (
    <>
      <div className='payment-message-wrapper'>
        <div className='payment-message'>
          Total pago a realizar: <span className='payment-price'>{order.totalPrice}€</span>
        </div>
        <div className='payment-message'>
          El pago se realizará a printeo@printeo.com
        </div>
      </div>
      <form id='payment-form' onSubmit={handleSubmit}>
        <PaymentElement
          id='payment-element'
        />
        {
          isLoading ?
            <Spinner /> :
            <CustomButton
              disabled={isLoading || !stripe || !elements}
              id='submit'
              label='Pagar ahora'
            >
              Confirmar pago
            </CustomButton>
        }
      </form>
    </>
  )
}
