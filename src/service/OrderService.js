import { HttpService } from './HttpService'

export class OrderService extends HttpService {
  async createOrder(order, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/order`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      },
      body: JSON.stringify(order)
    })
    const data = await response.json()
    return data
  }

  async createPaymentSession(order, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/payment`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      },
      body: JSON.stringify({ items: order })
    })
    const data = await response.json()
    return data
  }

  async getOrdersByUser(userId, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/order/user/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    })
    const { data } = await response.json()
    return data
  }

  async getOrdersByPrinter(printerId, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/order/printer/${printerId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    })
    const { data } = await response.json()
    return data
  }

  async getOrder(orderId, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/order/${orderId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    })
    const { data } = await response.json()
    return data
  }

  async updateOrderStatus(orderId, status, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/order/${orderId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      },
      body: JSON.stringify(status)
    })
    const { data } = await response.json()
    return data
  }
}