import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { Submenu } from '../../components/Submenu'
import { UserOrdersTable } from '../../components/UserOrdersTable'

export const UserOrders = () => {
  const paths = [
    {
      pathTo: '/user/admin',
      tag: 'Información de la cuenta'
    },
    {
      pathTo: '/user/prints',
      tag: 'Mis STLs'
    },
    {
      pathTo: '/user/orders',
      tag: 'Mis Pedidos'
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
          <UserOrdersTable />
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
