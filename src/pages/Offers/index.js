import { useEffect, useState, useContext } from 'react'

import { PrinterAuthContext } from '../../context/PrinterAuthContext'
import { CartContext } from '../../context/CartContext'

import { PrinterService } from '../../service/PrinterService'
import { PrintService } from '../../service/PrintService'

import { Container } from '../../components/Container'
import { Offer } from '../../components/Offer'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

import './styles.css'

export const Offers = () => {
  const [printersList, setPrintersList] = useState([])
  const [cart, setCart] = useState(null)
  const { printerAuthToken } = useContext(PrinterAuthContext)
  const { shoppingCart } = useContext(CartContext)

  useEffect(() => {
    async function getPrintersListAndTotalVolume() {
      const printerService = new PrinterService()
      const list = await printerService.getAllPrinters(printerAuthToken)
      setPrintersList(list)
      const printsIds = Object.keys(shoppingCart)
      const printService = new PrintService()
      const listOfPrints = await Promise.all(printsIds.map(printId => printService.getOnePrint(printId, printerAuthToken)))
      const cartObj = {}
      listOfPrints.forEach(print => {
        cartObj[print.id] = { ...print, orderQuantity: shoppingCart[print.id] }
      })
      setCart(cartObj)
    }
    getPrintersListAndTotalVolume()
  }, [])

  const calculateTotalVolume = () => {
    if (!cart) return 0
    const printsIds = Object.keys(cart)
    let totalcm3 = 0
    printsIds.forEach(print => {
      const volume = cart[print].file.volume * cart[print].scale * cart[print].innerFill
      totalcm3 += volume * shoppingCart[print]
    })
    return totalcm3
  }
  const totalVolume = calculateTotalVolume()

  return (
    <>
      <Layout>
        <NavBar />
        <Container>
          <h2 className='text-center'>
            Tus <span className='text-strong'>ofertas</span>
          </h2>
          <div>
            <div className='offer-tags'>
              <div className='offer-item'>
                <span className='offer-text-category'>Precio</span>
              </div>
              <div className='offer-item'>
                <span className='offer-text-category'>Entrega en</span>
              </div>
              <div className='offer-item offer-item-hidden'>
                <span className='offer-text-category'>Imprimido en</span>
              </div>
              <div className='offer-item' />
            </div>
            {printersList.map(printer => {
              return <Offer
                printer={printer}
                totalVolume={totalVolume}
                key={printer.id}
              />
            })}
          </div>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
