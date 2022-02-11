import { useState, useEffect, useContext } from 'react'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { OrderContext } from '../../context/OrderContext'
import { AuthContext } from '../../context/AuthContext'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { CheckoutForm } from '../../components/CheckoutForm'

import { OrderService } from '../../service/OrderService'

import './styles.css'

const STRIPE_KEY = 'pk_test_51KRfbxJzeLnk59jC27oRMTz9ZThl3GZGuNCp9h7gTXi2fcwEwRchfmUkWOoX5qhevpnzHqwnslxnMlNg55vpGfJq00y1Y0rFdh'

const stripePromise = loadStripe(STRIPE_KEY)

export const Checkout = () => {
  const [clientSecret, setClientSecret] = useState('')
  const { order } = useContext(OrderContext)
  const { authToken } = useContext(AuthContext)

  useEffect(() => {
    async function createStripePayment(order) {
      const orderService = new OrderService()
      const data = await orderService.createPaymentSession(order, authToken)
      setClientSecret(data.clientSecret)
    }
    createStripePayment(order)
  }, [])

  const appearance = {
    theme: 'flat'
  }
  const options = {
    clientSecret,
    appearance
  }

  return (
    <>
      {
        clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <Layout>
              <NavBar />
              <Container>
                <h2 className='text-center'>
                  Confirmar <span className='text-strong'>pago</span>
                </h2>
                <CheckoutForm />
              </Container>
            </Layout>
            <Footer />
          </Elements>)
      }
    </>
  )
}
