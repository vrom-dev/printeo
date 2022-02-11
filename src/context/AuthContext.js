import React, { useState } from 'react'

export const AuthContext = React.createContext()

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() => {
    const token = window.localStorage.getItem('printeo-session')
    return token ?
      JSON.parse(token) :
      null
  })

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
