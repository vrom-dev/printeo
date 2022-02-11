import { useState, useContext } from 'react'

import { PrinterAuthContext } from '../../context/PrinterAuthContext'
import { PrinterService } from '../../service/PrinterService'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { CustomInput } from '../../components/CustomInput'
import { CustomButton } from '../../components/CustomButton'

import './styles.css'

export const PrinterLogin = () => {
  const { setPrinterAuthToken } = useContext(PrinterAuthContext)
  const [validateStatus, setValidateStatus] = useState({
    email: false,
    password: false
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const credentials = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    const printerService = new PrinterService()
    const accessToken = await printerService.loginPrinter(credentials)
    setPrinterAuthToken(accessToken)
  }
  return (
    <>
      <Layout>
        <NavBar />
        <Container>
          <h2 className='text-center'>
            Impresor - Iniciar de sesión en <span className='text-strong'>Printeo</span>
          </h2>
          <form className='signup-form' onSubmit={handleSubmit}>
            <div className='signup-form__container'>
              <div className='signup-form__column'>
                <h3 className='text-center'>Tus datos</h3>
                <CustomInput
                  fieldName='Correo electrónico'
                  name='email'
                  type='email'
                  errorMessage='Revisa el email introducido'
                  required
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
                <CustomInput
                  fieldName='Password'
                  name='password'
                  type='password'
                  errorMessage='Revisa la contraseña introducida'
                  required
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
              </div>
            </div>
            <div className='signup-button-container'>
              <CustomButton >Enviar</CustomButton>
            </div>
          </form>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}