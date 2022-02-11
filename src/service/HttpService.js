export class HttpService {
  constructor() {
    this.token = null
    this.baseUrl = 'http://localhost:3003'
  }

  setToken(newToken) {
    this.token = `Bearer ${newToken}`
  }
}
