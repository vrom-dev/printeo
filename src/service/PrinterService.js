import { HttpService } from './HttpService'

const createPrinter = async (printer) => {
  const response = await window.fetch(`${baseUrl}/printer`, {
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

const loginPrinter = async (credentials) => {
  const response = await window.fetch(`${baseUrl}/printer/login`, {
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

const getPrinterId = async () => {
  const response = await window.fetch(`${baseUrl}/printer/token`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
  const { data } = await response.json()
  return data
}

const getPrinter = async (printerId) => {
  const response = await window.fetch(`${baseUrl}/printer/${printerId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
  const { data } = await response.json()
  return data
}

const getAllPrinters = async () => {
  const response = await window.fetch(`${baseUrl}/printer`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
  const { data } = await response.json()
  return data
}

const editPrinter = async (printerId, updatedPrinter) => {
  const response = await window.fetch(`${baseUrl}/printer/${printerId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(updatedPrinter)
  })
  const { data } = await response.json()
  return data
}

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

export {
  createPrinter,
  loginPrinter,
  getPrinterId,
  getPrinter,
  getAllPrinters,
  editPrinter
}
