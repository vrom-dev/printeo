const baseUrl = 'http://localhost:3003'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

export {
  token,
  setToken,
  baseUrl
}
