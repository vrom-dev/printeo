import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'
import { PrinterAuthContext } from '../../context/PrinterAuthContext'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

import { OrderService } from '../../service/OrderService'
import { LABEL_STYLE, ORDER_STATUS } from '../../utils/orderStatus'

export const OrderDetail = () => {
  const { id } = useParams()
  const [order, setOrder] = useState(null)
  const { authToken } = useContext(AuthContext)
  const { printerAuthToken } = useContext(PrinterAuthContext)

  useEffect(() => {
    const getOrder = async (id) => {
      const orderService = new OrderService()
      const token = authToken ? authToken : printerAuthToken
      const { order, printer, user } = await orderService.getOrder(id, token)
      order.user = user
      order.printer = printer
      setOrder(order)
    }
    getOrder(id)
  }, [id])

  return (
    <>
      <Layout>
        <NavBar />
        <Container>
          <h2 className='text-center'>
            Detalle de <span className='text-strong'>pedido</span>
          </h2>
          {
            order &&
            <>
              {
                order.prints.map(print => (
                  <div
                    key={print.id}
                    className='cart-item'
                  >
                    <div className='cart-item-description'>
                      <div className='cart-item-name'>{print.name}</div>
                      <ul className='cart-item-list'>
                        <li>Relleno interior: {print.innerFill * 100}%</li>
                        <li>Material: {print.material}</li>
                        <li>Precisión: {print.accuracy} mm</li>
                        <li>Escala: {print.scale * 100} %</li>
                      </ul>
                    </div>
                    <div className='cart-item-description'>
                      <span className='cart-quantity'>Cantidad: </span>
                      <span className='cart-quantity'>{order.quantityDetails[print.id]}</span>
                    </div>
                  </div>
                ))
              }
              <div className='cart-item'>
                <div className='cart-item-description'>
                  <div className='cart-item-name'>Dirección de envío:</div>
                  <ul className='cart-item-list'>
                    <li>{order.user.name} {order.user.firstSurname} {order.user.secondSurname}</li>
                    <li>{order.user.address.street}</li>
                    <li>{order.user.address.city} {order.user.address.zipcode}</li>
                    <li>{order.user.address.country}</li>
                    <li>Telf. {order.user.phone}</li>
                  </ul>
                </div>
                <div className='cart-item-description'>
                  <div className='cart-item-name'>Imprimido por:</div>
                  <ul className='cart-item-list'>
                    <li>{order.printer.companyName}</li>
                    <li>{order.printer.address.street}</li>
                    <li>{order.printer.address.city} {order.printer.address.zipcode}</li>
                    <li>{order.printer.address.country}</li>
                    <li>Telf. {order.user.phone}</li>
                  </ul>
                </div>
              </div>
              <div className='cart-item'>
                <div className='cart-item-totalprice'>Precio total: <span className='cart-item-detail'>{order.totalPrice}€</span>
                </div>
                <div>
                  <span className={LABEL_STYLE[order.status]}>
                    {ORDER_STATUS[order.status]}
                  </span>
                </div>
              </div>
            </>
          }
        </Container>
      </Layout>
      <Footer />
    </>
  )
}