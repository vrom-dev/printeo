import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'


import { UserService } from '../../service/UserService'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { CustomInput } from '../../components/CustomInput'
import { CustomButton } from '../../components/CustomButton'

import './styles.css'

export const Signup = () => {
  const { setAuthToken } = useContext(AuthContext)
  const navigate = useNavigate()

  const [validateStatus, setValidateStatus] = useState({
    name: false,
    firstSurname: false,
    secondSurname: false,
    email: false,
    password: false,
    phone: true,
    country: false,
    street: false,
    city: false,
    zipcode: false
  })

  const formIsValid = () => {
    return validateStatus.name &&
      validateStatus.firstSurname &&
      validateStatus.secondSurname &&
      validateStatus.email &&
      validateStatus.password &&
      validateStatus.phone &&
      validateStatus.country &&
      validateStatus.street &&
      validateStatus.city &&
      validateStatus.zipcode
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formIsValid()) return
    const user = {
      name: e.target.name.value,
      firstSurname: e.target.firstSurname.value,
      secondSurname: e.target.secondSurname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phone: e.target.phone.value,
      address: {
        street: e.target.street.value,
        country: e.target.country.value,
        city: e.target.city.value,
        zipcode: e.target.zipcode.value
      }
    }
    const userService = new UserService()
    const accessToken = await userService.createUser(user)
    setAuthToken(accessToken)
    navigate('../')
  }
  return (
    <>
      <Layout>
        <NavBar />
        <Container>
          <h2 className='text-center'>
            Únete a la familia <span className='text-strong'>Printeo</span>
          </h2>
          <form className='signup-form' onSubmit={handleSubmit}>
            <div className='signup-form__container'>
              <div className='signup-form__column'>
                <h3 className='text-center'>Tus datos</h3>
                <CustomInput
                  fieldName='Nombre'
                  name='name'
                  type='text'
                  required
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
                <CustomInput
                  fieldName='Primer apellido'
                  name='firstSurname'
                  type='text'
                  required
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
                <CustomInput
                  fieldName='Segundo apellido'
                  name='secondSurname'
                  type='text'
                  required
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
                <CustomInput
                  fieldName='Correo electrónico'
                  name='email'
                  type='email'
                  errorMessage='Introduce un correo electrónico válido'
                  required
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
                <CustomInput
                  fieldName='Password'
                  name='password'
                  type='password'
                  errorMessage='Req. Una mayúscula, una minúscula, un número, un carácter especial y mínimo 8 carácteres'
                  required
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
              </div>
              <div className='signup-form__column'>
                <h3 className='text-center'>Dirección</h3>
                <CustomInput
                  fieldName='Calle'
                  name='street'
                  type='text'
                  required
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
                <CustomInput
                  fieldName='Ciudad'
                  name='city'
                  type='text'
                  required
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
                <CustomInput
                  fieldName='País'
                  name='country'
                  type='text'
                  required
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
                <CustomInput
                  fieldName='Código Postal'
                  name='zipcode'
                  type='number'
                  required
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
                <CustomInput
                  fieldName='Teléfono'
                  name='phone'
                  type='tel'
                  errorMessage='Introduce un número de teléfono válido'
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
              </div>
            </div>
            <div className='signup-button-container'>
              <CustomButton
                disabled={!formIsValid()}
              >Enviar</CustomButton>
            </div>
          </form>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
