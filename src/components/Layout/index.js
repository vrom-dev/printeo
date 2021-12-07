import { Helmet } from 'react-helmet'
import './styles.css'

export const Layout = ({ children, title, subtitle }) => (
  <>
    <Helmet>
      <title>Printeo</title>
      {subtitle && <meta name="description" content={subtitle} />}
    </Helmet>
    <div className='app-layout'>{children}</div>
  </>
)
