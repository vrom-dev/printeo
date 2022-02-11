import React, { useState } from 'react'

export const CartContext = React.createContext()

export const CartContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState(() => {
    const token = window.localStorage.getItem('printeo-cart')
    return token ?
      JSON.parse(token) :
      {}
  })

  const addPrint = (printId) => {
    if (shoppingCart[printId] === undefined) {
      const newState = { ...shoppingCart }
      newState[printId] = 1
      setShoppingCart(newState)
      window.localStorage.setItem('printeo-cart', JSON.stringify(newState))
    } else {
      const newState = { ...shoppingCart }
      newState[printId] += 1
      setShoppingCart(newState)
      window.localStorage.setItem('printeo-cart', JSON.stringify(newState))
    }
  }
  const decreasePrint = (printId) => {
    const newState = { ...shoppingCart }
    newState[printId] -= 1
    if (newState[printId] === 0) {
      delete newState[printId]
    }
    setShoppingCart(newState)
    window.localStorage.setItem('printeo-cart', JSON.stringify(newState))
  }
  const deletePrint = (printId) => {
    const newState = { ...shoppingCart }
    delete newState[printId]
    setShoppingCart(newState)
    window.localStorage.setItem('printeo-cart', JSON.stringify(newState))
  }

  const clearCart = () => {
    setShoppingCart({})
    window.localStorage.removeItem('printeo-cart')
  }

  const totalProducts = () => {
    const items = Object.keys(shoppingCart)
    const totalItems = items.reduce((acc, currentValue) => acc + shoppingCart[currentValue], 0)
    return totalItems
  }

  return (
    <CartContext.Provider
      value={
        {
          shoppingCart,
          totalProducts,
          addPrint,
          decreasePrint,
          deletePrint,
          clearCart
        }}
    >
      {children}
    </CartContext.Provider>
  )
}
