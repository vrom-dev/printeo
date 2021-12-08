import React, { useState } from 'react'

const CartContext = React.createContext()

export const CartContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([])

  const addPrint = (newPrint) => {
    setShoppingCart(shoppingCart.concat(newPrint))
  }
  const removePrint = (printId) => {
    const newShoppingCart = shoppingCart.filter(print.id !== printId)
    setShoppingCart(newShoppingCart)
  }
  const clearChart = () => {
    setShoppingCart([])
  }

  return (
    <CartContext.Provider
      value={
        {
          shoppingCart,
          addPrint,
          removePrint,
          clearChart
        }}
    >
      {children}
    </CartContext.Provider>
  )
}
