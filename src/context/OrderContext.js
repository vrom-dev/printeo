import React, { useState } from 'react'

export const OrderContext = React.createContext()

export const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState(() => {
    const orderObj = window.localStorage.getItem('printeo-order')
    return orderObj ?
      JSON.parse(orderObj) :
      null
  })

  const saveOrder = (order) => {
    window.localStorage.setItem('printeo-order', JSON.stringify(order))
  }
  const removeOrder = () => {
    window.localStorage.removeItem('printeo-order')
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        saveOrder,
        removeOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}