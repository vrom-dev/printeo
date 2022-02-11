import { HttpService } from './HttpService'

export class PrintService extends HttpService {
  async createPrint(print, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/print`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      },
      body: JSON.stringify(print)
    })
    const { data } = await response.json()
    return data
  }

  async getPrintsFromUser(token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/print`, {
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
  async getOnePrint(printId, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/print/${printId}`, {
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
  async updatePrint(printId, updatedPrint, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/print/${printId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      },
      body: JSON.stringify(updatedPrint)
    })
    const { data } = await response.json()
    return data
  }
  async deletePrint(printId, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/print/${printId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    })
    const { data } = await response.json()
    return data
  }
}