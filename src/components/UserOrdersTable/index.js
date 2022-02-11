import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

import { LABEL_STYLE, ORDER_STATUS } from '../../utils/orderStatus'
import { Spinner } from '../Spinner'

import { OrderService } from '../../service/OrderService'
import { UserService } from '../../service/UserService'

import { dateFormatter } from '../../utils/dateFormatter'

import './styles.css'


export const UserOrdersTable = () => {
  const { authToken } = useContext(AuthContext)
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getPrints() {
      const userService = new UserService()
      const { id } = await userService.getUserId(authToken)
      const orderService = new OrderService()
      const response = await orderService.getOrdersByUser(id, authToken)
      setOrders(response)
      setIsLoading(false)
    }
    getPrints()
  }, [])

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
              <th>Total pedido</th>
              <th>Estado</th>
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
                      to={`/user/orders/${order.id}`}
                      className='button button-secondary'
                    >
                      Ver pedido</Link>
                  </th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
}