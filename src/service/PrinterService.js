import { HttpService } from './HttpService'

export class PrinterService extends HttpService {

  async createPrinter(printer) {
    const response = await window.fetch(`${this.baseUrl}/printer`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(printer)
    })
    const { data } = await response.json()
    await window.localStorage.setItem('printeo-printer-session', JSON.stringify(data.accessToken))
    return data.accessToken
  }

  async loginPrinter(credentials) {
    const response = await window.fetch(`${this.baseUrl}/printer/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    const { data } = await response.json()
    await window.localStorage.setItem('printeo-printer-session', JSON.stringify(data.accessToken))
    return data.accessToken
  }

  async getPrinterId(token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/printer/token`, {
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

  async getPrinter(printerId, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/printer/${printerId}`, {
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

  async getAllPrinters(token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/printer`, {
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

  async editPrinter(printerId, updatedPrinter, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/printer/${printerId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      },
      body: JSON.stringify(updatedPrinter)
    })
    const { data } = await response.json()
    return data
  }
}