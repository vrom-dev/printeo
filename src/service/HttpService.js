export class HttpService {
  constructor() {
    this.token = null
    this.baseUrl = process.env.API_URL
  }

  setToken(newToken) {
    this.token = `Bearer ${newToken}`
  }
}
