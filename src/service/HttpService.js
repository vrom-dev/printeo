export class HttpService {
  constructor () {
    this.token = null
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL
  }

  setToken (newToken) {
    this.token = `Bearer ${newToken}`
  }
}
