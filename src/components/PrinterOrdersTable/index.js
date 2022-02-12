import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PrinterAuthContext } from '../../context/PrinterAuthContext'

import { LABEL_STYLE, ORDER_STATUS } from '../../utils/orderStatus'
import { Spinner } from '../Spinner'

import { OrderService } from '../../service/OrderService'
import { PrinterService } from '../../service/PrinterService'

import { CustomButton } from '../../components/CustomButton'

import { dateFormatter } from '../../utils/dateFormatter'

export const PrinterOrdersTable = () => {
  const { printerAuthToken } = useContext(PrinterAuthContext)
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getPrints() {
      const printerService = new PrinterService()
      const { id } = await printerService.getPrinterId(printerAuthToken)
      const orderService = new OrderService()
      const response = await orderService.getOrdersByPrinter(id, printerAuthToken)
      setOrders(response)
      setIsLoading(false)
    }
    getPrints()
  }, [])

  const handleOrderState = async (orderId, status) => {
    const orderService = new OrderService()
    const response = await orderService.updateOrderStatus(orderId, { status: status }, printerAuthToken)
    const newOrders = [...orders].map(order => {
      return order.id === response.id ? response : order
    })
    setOrders(newOrders)
  }

  return isLoading ?
    <Spinner /> :
    orders.length === 0 ?
      <div>
        No has realizado pedidos todavía.
      </div> :
      <div className='prints-table-container'>
        <table className='prints-table'>
          <thead>
            <tr>
              <th>Nº de pedido</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Estado</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => {
              return (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{dateFormatter(new Date(order.createdAt))}</td>
                  <td>{order.totalPrice}€</td>
                  <td>
                    <span className={LABEL_STYLE[order.status]}>
                      {ORDER_STATUS[order.status]}
                    </span>
                  </td>
                  <th>
                    <Link
                      to={`/printer/orders/${order.id}`}
                      className='button button-secondary'
                    >
                      Detalle</Link>
                  </th>
                  <th>
                    <CustomButton
                      onClick={() => handleOrderState(order.id, 'paid')}
                    >
                      Pagado
                    </CustomButton>
                  </th>
                  <th>
                    <CustomButton
                      onClick={() => handleOrderState(order.id, 'sent')}
                    >
                      Enviado
                    </CustomButton>
                  </th>
                  <th>
                    <CustomButton
                      onClick={() => handleOrderState(order.id, 'received')}
                    >
                      Recibido
                    </CustomButton>
                  </th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
}