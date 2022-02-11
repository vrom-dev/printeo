import React, { useState } from 'react'

export const PrinterAuthContext = React.createContext()

export const PrinterAuthContextProvider = ({ children }) => {
  const [printerAuthToken, setPrinterAuthToken] = useState(() => {
    const token = window.localStorage.getItem('printeo-printer-session')
    return token ?
      JSON.parse(token) :
      null
  })

  return (
    <PrinterAuthContext.Provider
      value={{
        printerAuthToken,
        setPrinterAuthToken
      }}
    >
      {children}
    </PrinterAuthContext.Provider>
  )
}