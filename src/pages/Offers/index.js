import './styles.css'

import { Container } from '../../components/Container'
import { Offer } from '../../components/Offer'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

export const Offers = () => {
  // TODO Seleccionar proveedores y ordenar por precios

  return (
    <>
      <Layout>
        <NavBar/>
        <Container>
          <h2 className='text-center'>
              Tus <span className='text-strong'>ofertas</span>
          </h2>
          <div>
            <Offer />
          </div>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
