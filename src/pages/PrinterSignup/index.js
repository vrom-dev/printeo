import { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { PrinterAuthContext } from '../../context/PrinterAuthContext'


import { PrinterService } from '../../service/PrinterService'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { CustomInput } from '../../components/CustomInput'
import { CustomButton } from '../../components/CustomButton'
import { CustomInputRadio } from '../../components/CustomInputRadio'

import './styles.css'

export const PrinterSignup = () => {
  const { setPrinterAuthToken } = useContext(PrinterAuthContext)
  const navigate = useNavigate()
  const [shippingTime, setShippingTime] = useState('')

  const [validateStatus, setValidateStatus] = useState({
    companyName: false,
    email: false,
    password: false,
    printingPrice: false,
    shippingTime: false,
    shippingPrice: false,
    country: false,
    street: false,
    city: false,
    zipcode: false
  })

  const formIsValid = () => {
    return validateStatus.companyName &&
      validateStatus.email &&
      validateStatus.password &&
      validateStatus.printingPrice &&
      validateStatus.shippingTime &&
      validateStatus.shippingPrice &&
      validateStatus.country &&
      validateStatus.street &&
      validateStatus.city &&
      validateStatus.zipcode
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formIsValid()) return
    const printer = {
      companyName: e.target.companyName.value,
      email: e.target.email.value,
      printingPrice: e.target.printingPrice.value,
      shippingTime: e.target.shippingTime.value,
      password: e.target.password.value,
      shippingPrice: e.target.shippingPrice.value,
      address: {
        street: e.target.street.value,
        country: e.target.country.value,
        city: e.target.city.value,
        zipcode: e.target.zipcode.value
      }
    }
    const printerService = new PrinterService()
    const accessToken = await printerService.createPrinter(printer)
    setPrinterAuthToken(accessToken)
    navigate('../')
  }
  return (
    <>
      <Layout>
        <NavBar />
        <Container>
          <h2 className='text-center'>
            Hazte <span className='text-strong'>Impresor</span> y empieza a vender
          </h2>
          <form className='signup-form' onSubmit={handleSubmit}>
            <div className='signup-form__container'>
              <div className='signup-form__column'>
                <h3 className='text-center'>Datos de la empresa</h3>
                <CustomInput
                  fieldName='Nombre de la empresa/impresor'
                  name='companyName'
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
                <CustomInput
                  fieldName='Precio de impresión (€/cm3):'
                  name='printingPrice'
                  type='number'
                  errorMessage='Introduce una cantidad válida'
                  required
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
                <div className='custom-input-container'>
                  <label name='shippingTime' className='custom-input-label'>Plazo de entrega garantizado: (*)</label>
                  <div>
                    <CustomInputRadio
                      elements={[24, 48, 72, 96]}
                      name='shippingTime'
                      unit='h'
                      setInputValue={setShippingTime}
                      inputValue={shippingTime}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                  </div>
                </div>
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
                  fieldName='Precio de envío (€/cm3):'
                  name='shippingPrice'
                  type='number'
                  errorMessage='Introduce una cantidad válida'
                  required
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
              </div>
            </div>
            <div className='signup-button-container'>
              <CustomButton
                disabled={!formIsValid()}
              >
                Alta como impresor
              </CustomButton>
            </div>
            <div className='signup-button-container'>
              <Link
                to='../printer/login'
                className='login-link'
              >
                Ya estoy registrado como impresor
              </Link>
            </div>
          </form>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
