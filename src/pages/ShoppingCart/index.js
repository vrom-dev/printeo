import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'

import { AuthContext } from '../../context/AuthContext'
import { CartContext } from '../../context/CartContext'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { CustomButton } from '../../components/CustomButton'

import { PrintService } from '../../service/PrintService'

import './styles.css'

export const ShoppingCart = () => {
  const { authToken } = useContext(AuthContext)
  const {
    shoppingCart,
    addPrint,
    deletePrint,
    decreasePrint
  } = useContext(CartContext)

  const [cart, setCart] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getPrintsInfo() {
      const printsIds = Object.keys(shoppingCart)
      const printService = new PrintService()
      const listOfPrints = await Promise.all(printsIds.map(printId => printService.getOnePrint(printId, authToken)))
      const cart = {}
      listOfPrints.forEach(print => {
        cart[print.id] = print
      })
      printsIds.forEach(id => {
        cart[id] = { ...cart[id], orderQuantity: shoppingCart[id] }
      })
      setCart(cart)
      setIsLoading(false)
    }
    getPrintsInfo()
  }, [])

  const addItem = (printId) => {
    addPrint(printId)
    const newCart = { ...cart }
    newCart[printId].orderQuantity += 1
    setCart(newCart)
  }

  const removeItem = (printId) => {
    decreasePrint(printId)
    const newCart = { ...cart }
    newCart[printId].orderQuantity -= 1
    if (newCart[printId].orderQuantity === 0) {
      delete newCart[printId]
    }
    setCart(newCart)
  }

  const deleteItem = (printId) => {
    deletePrint(printId)
    const newCart = { ...cart }
    delete newCart[printId]
    setCart(newCart)
  }

  return (
    <>
      <Layout>
        <NavBar />
        <Container>
          <h2 className='text-center'>
            Tu <span className='text-strong'>cesta</span>
          </h2>
          {Object.keys(cart).length > 0 ?
            (
              <div>
                {
                  Object.keys(cart).map(print => (
                    <div
                      key={cart[print].id}
                      className='cart-item'
                    >
                      <div className='cart-item-description'>
                        <div className='cart-item-name'>{cart[print].file.fileName}</div>
                        <ul className='cart-item-list'>
                          <li>Relleno interior: {cart[print].innerFill * 100}%</li>
                          <li>Material: {cart[print].material}</li>
                          <li>Precisión: {cart[print].accuracy} mm</li>
                          <li>Escala: {cart[print].scale * 100} %</li>
                        </ul>
                      </div>
                      <div className='cart-item-description'>
                        <button
                          className='cart-button'
                          onClick={() => removeItem(cart[print].id)}
                        >-</button>
                        <span className='cart-quantity'>{cart[print].orderQuantity}</span>
                        <button
                          className='cart-button'
                          onClick={() => addItem(cart[print].id)}
                        >+</button>
                        <button
                          className='cart-delete-button'
                          onClick={() => deleteItem(cart[print].id)}
                        ><FiTrash2 /></button>
                      </div>
                    </div>
                  ))
                }
                <div className='cart-printer'>
                  <Link to='../offers'>
                    <CustomButton>
                      Seleccionar impresor
                    </CustomButton>
                  </Link>
                </div>
              </div>
            ) :
            !isLoading &&
            <div className='cart-item-message'>
              No hay nada en tu cesta todavía.
            </div>
          }
        </Container>
      </Layout>
      <Footer />
    </>
  )
}