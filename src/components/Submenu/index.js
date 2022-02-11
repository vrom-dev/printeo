import { Link, useLocation } from 'react-router-dom'
import './styles.css'


export const Submenu = ({ sections }) => {
  const { pathname } = useLocation()
  return (
    <div>
      <ul className='submenu'>
        {
          sections.map(section => {
            return (
              <li className='submenu-item' data-current-path={pathname === section.pathTo} key={section.pathTo}>
                <Link to={section.pathTo} className='submenu-link'>
                  {section.tag}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )

}