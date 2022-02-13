import { Link } from 'react-router-dom'

import './styles.css'

import PrinteoLogo from '../../assets/printeo-logo-32h.png'

import { BsLinkedin, BsGithub } from 'react-icons/bs'

import { Layout } from '../Layout'

export const Footer = () => {
  return (
    <footer className='app-footer'>
      <Layout>
        <div>
          <div className='footer-box'>
            <div className='footer-social-container'>
              <img src={PrinteoLogo} className='footer-logo' />
              <p className='text-center text-secondary footer-text'>
                Copyright © 2021 Printeo<br />
                All rights reserved.
              </p>
              <div>
                <BsLinkedin className='footer-social-logos' />
                <BsGithub className='footer-social-logos' />
              </div>
            </div>
            <div className='footer-nav-container'>
              <div>
                <h3 className='footer-nav-list__title'>Impresor</h3>
                <ul className='footer-nav-list'>
                  <li><Link to='/printer/signup' className='footer-nav-link'>Registro impresor</Link></li>
                  <li><Link to='/printer/login' className='footer-nav-link'>Inicio de sesión impresor</Link></li>
                </ul>
              </div>
              <div>
                <h3 className='footer-nav-list__title'>Cliente</h3>
                <ul className='footer-nav-list'>
                  <li><Link to='/signup' className='footer-nav-link'>Registro cliente</Link></li>
                  <li><Link to='/login' className='footer-nav-link'>Inicio de sesión cliente</Link></li>
                </ul>
              </div>
              <div>
                <h3 className='footer-nav-list__title'>Home</h3>
                <ul className='footer-nav-list'>
                  <li><Link to='/' className='footer-nav-link'>Portada</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </footer >
  )
}
