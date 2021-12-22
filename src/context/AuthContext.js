import React, { useState, useEffect } from 'react'

export const AuthContext = React.createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = window.localStorage.getItem('printeo-session')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  return (
    <AuthContext.Provider
    value={{
      user,
      setUser
    }}
  >
    {children}
  </AuthContext.Provider>
  )
}
