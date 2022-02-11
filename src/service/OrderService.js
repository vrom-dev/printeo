import { HttpService } from './HttpService'

export class OrderService extends HttpService {
  async createOrder(order, token) {
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
}