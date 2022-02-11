import { useState, useEffect, useContext } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'

import { OrderContext } from '../../context/OrderContext'
import { AuthContext } from '../../context/AuthContext'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

import { OrderService } from '../../service/OrderService'

import './styles.css'

export const CheckoutSuccess = () => {
  const { order, removeOrder } = useContext(OrderContext)
  const { authToken } = useContext(AuthContext)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const payment = searchParams.get('payment_intent')

  useEffect(() => {
    if (!payment) {
      navigate('/', { replace: true })
    }
    const orderObj = { ...order, payment }
    async function saveOrderInDB(order) {
      const orderService = new OrderService()
      await orderService.createOrder(order, authToken)
    }
    saveOrderInDB(orderObj)
    removeOrder()
  }, [])


  return (
    <>
      <Layout>
        <NavBar />
        <Container>
          <h2 className='text-center'>
            Pago procesado con <span className='text-strong'>éxito</span>
          </h2>
          <div className='checkout-success-container'>
            <p className='checkout-success-message'>Número de orden: {payment}</p>
            <p className='checkout-success-message'>Pulsa <Link to='/user/orders' className='checkout-success-link'>aquí</Link> para ver el estado de tus pedidos</p>
          </div>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
