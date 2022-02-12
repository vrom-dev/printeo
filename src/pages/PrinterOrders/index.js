import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { Submenu } from '../../components/Submenu'
import { PrinterOrdersTable } from '../../components/PrinterOrdersTable'

export const PrinterOrders = () => {
  const paths = [
    {
      pathTo: '/printer/admin',
      tag: 'Información de la cuenta'
    },
    {
      pathTo: '/printer/orders',
      tag: 'Pedidos recibidos'
    }
  ]

  return (
    <>
      <Layout>
        <NavBar />
        <Container>
          <h2 className='text-center'>
            Panel de <span className='text-strong'>control</span>
          </h2>
          <Submenu sections={paths} />
          <PrinterOrdersTable />
        </Container>
      </Layout>
      <Footer />
    </>
  )
}