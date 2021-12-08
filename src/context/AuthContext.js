import React, { useState } from 'react'

const AuthContext = React.createContext()

export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider
    value={
      {
        shoppingCart,
        addPrint,
        removePrint,
        clearChart
      }}
  >
    {children}
  </AuthContext.Provider>
  )
}
