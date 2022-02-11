import { useState, useContext } from 'react'

import './styles.css'

import { AuthContext } from '../../context/AuthContext'
import { UserService } from '../../service/UserService'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { CustomInput } from '../../components/CustomInput'
import { CustomButton } from '../../components/CustomButton'

export const Login = () => {
  const { setAuthToken } = useContext(AuthContext)
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
    const userService = new UserService()
    const accessToken = await userService.loginUser(credentials)
    setAuthToken(accessToken)
  }
  return (
    <>
      <Layout>
        <NavBar />
        <Container>
          <h2 className='text-center'>
            Iniciar sesión en <span className='text-strong'>Printeo</span>
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
