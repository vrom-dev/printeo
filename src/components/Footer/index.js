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
              <img src={PrinteoLogo} className='footer-logo'/>
              <p className='text-center text-secondary footer-text'>
                Copyright © 2021 Printeo<br/>
                All rights reserved.
              </p>
              <div>
                <BsLinkedin className='footer-social-logos'/>
                <BsGithub className='footer-social-logos'/>
              </div>
            </div>
            <div className='footer-nav-container'>
              <div>
                <h3 className='footer-nav-list__title'>Section</h3>
                <ul className='footer-nav-list'>
                  <li className='footer-nav-list__item'>Link to section 1</li>
                  <li className='footer-nav-list__item'>Link to section 2</li>
                </ul>
              </div>
              <div>
                <h3 className='footer-nav-list__title'>Section</h3>
                <ul className='footer-nav-list'>
                  <li className='footer-nav-list__item'>Link to section 1</li>
                  <li className='footer-nav-list__item'>Link to section 2</li>
                  <li className='footer-nav-list__item'>Link to section 5</li>
                </ul>
              </div>
              <div>
                <h3 className='footer-nav-list__title'>Section</h3>
                <ul className='footer-nav-list'>
                  <li className='footer-nav-list__item'>Link to section 1</li>
                  <li className='footer-nav-list__item'>Link to section 2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  )
}
