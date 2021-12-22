import {
  token,
  setToken,
  baseUrl
} from './index'

const createUser = async (user) => {
  console.log(user)
  const response = await window.fetch(`${baseUrl}/user/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  const json = await response.json()
  return json
}

export {
  setToken,
  createUser
}
