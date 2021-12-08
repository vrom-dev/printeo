import { useState, useEffect } from 'react'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import './styles.css'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { CheckoutForm } from '../../components/CheckoutForm'

const STRIPE_KEY = 'pk_test_51K49IJJB818ZHWtjJlrZJEezS8LwhPNQ5ngRSaaP62HDGxXRYOQ9AHkFyAo7Vyvho9CXa5pxEv0sGBhffpln4guv005zOX9h1a'

const stripePromise = loadStripe(STRIPE_KEY)

export const Checkout = () => {
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('http://localhost:3003/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  const appearance = {
    theme: 'flat'
  }
  const options = {
    clientSecret,
    appearance
  }
  console.log(options)

  return (
    <>
      {
        clientSecret && (
        <Elements options={options} stripe={stripePromise}>
        <Layout>
          <NavBar/>
          <Container>
            <h2 className='text-center'>
                Tus <span className='text-strong'>ofertas</span>
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
