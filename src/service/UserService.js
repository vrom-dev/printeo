import { HttpService } from './HttpService'

export class UserService extends HttpService {
  async createUser(user) {
    const response = await window.fetch(`${this.baseUrl}/user/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const { data } = await response.json()
    await window.localStorage.setItem('printeo-session', JSON.stringify(data.accessToken))
    return data.accessToken
  }

  async loginUser(credentials) {
    const response = await window.fetch(`${this.baseUrl}/user/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    const { data } = await response.json()
    await window.localStorage.setItem('printeo-session', JSON.stringify(data.accessToken))
    return data.accessToken
  }

  async getUser(userId, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/user/${userId}`, {
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

  async editUser(userId, updatedUser, token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/user/${userId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      },
      body: JSON.stringify(updatedUser)
    })
    const { data } = await response.json()
    return data
  }

  async getUserId(token) {
    this.setToken(token)
    const response = await window.fetch(`${this.baseUrl}/user/token`, {
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
}