import { useState, useContext, useEffect } from 'react'
import { PrinterAuthContext } from '../../context/PrinterAuthContext'

import { PrinterService } from '../../service/PrinterService'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { Submenu } from '../../components/Submenu'
import { CustomInputRadio } from '../../components/CustomInputRadio'
import { CustomInput } from '../../components/CustomInput'
import { CustomButton } from '../../components/CustomButton'
import { Spinner } from '../../components/Spinner'
import { Notification } from '../../components/Notification'

import './styles.css'

export const PrinterAdmin = () => {
  const { printerAuthToken } = useContext(PrinterAuthContext)
  const [printer, setPrinter] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationSucceed, setNotificationSucceed] = useState(false)
  const [shippingTime, setShippingTime] = useState('')

  useEffect(() => {
    async function getUserInfo() {
      const printerService = new PrinterService()
      const { id } = await printerService.getPrinterId(printerAuthToken)
      const response = await printerService.getPrinter(id, printerAuthToken)
      setPrinter(response)
      setIsLoading(false)
    }
    getUserInfo()
  }, [])

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


  const [validateStatus, setValidateStatus] = useState({
    companyName: true,
    email: true,
    printingPrice: true,
    shippingTime: false,
    shippingPrice: true,
    country: true,
    street: true,
    city: true,
    zipcode: true
  })

  const formIsValid = () => {
    return validateStatus.companyName &&
      validateStatus.email &&
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
    const printerToUpdate = {
      companyName: e.target.companyName.value,
      email: e.target.email.value,
      printingPrice: e.target.printingPrice.value,
      shippingTime: e.target.shippingTime.value,
      shippingPrice: e.target.shippingPrice.value,
      address: {
        street: e.target.street.value,
        country: e.target.country.value,
        city: e.target.city.value,
        zipcode: e.target.zipcode.value
      }
    }
    const printerService = new PrinterService()
    const updatedPrinter = await printerService.editPrinter(printer.id, printerToUpdate, printerAuthToken)
    if (updatedPrinter) {
      setPrinter(updatedPrinter)
      setNotificationMessage('Se han guardado los datos con éxito');
      setNotificationSucceed(true)
      setTimeout(() => {
        setNotificationMessage('')
      }, 3000)
    } else {
      setNotificationMessage('No se ha podido realizar la operación');
      setNotificationSucceed(false)
      setTimeout(() => {
        setNotificationMessage('')
      }, 3000)
    }
  }

  return (
    <>
      <Layout>
        <NavBar />
        <Container>
          <h2 className='text-center'>
            Panel de <span className='text-strong'>control</span>
          </h2>
          <Submenu sections={paths} />
          {
            notificationMessage &&
            <Notification
              message={notificationMessage}
              succeed={notificationSucceed}
            />
          }
          {isLoading ?
            <Spinner /> :
            (
              <form className='signup-form' onSubmit={handleSubmit}>
                <div className='signup-form__container'>
                  <div className='signup-form__column'>
                    <h3 className='text-center'>Datos de la empresa</h3>
                    <CustomInput
                      fieldName='Nombre de la empresa/impresor'
                      name='companyName'
                      type='text'
                      required
                      initialValue={printer ? printer.companyName : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                    <CustomInput
                      fieldName='Correo electrónico'
                      name='email'
                      type='email'
                      errorMessage='Introduce un correo electrónico válido'
                      required
                      initialValue={printer ? printer.email : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                    <CustomInput
                      fieldName='Precio de impresión (€/mm3):'
                      name='printingPrice'
                      type='number'
                      errorMessage='Introduce una cantidad válida'
                      required
                      initialValue={printer ? printer.printingPrice : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                    <CustomInput
                      fieldName='Precio de envío (€/mm3):'
                      name='shippingPrice'
                      type='number'
                      errorMessage='Introduce una cantidad válida'
                      required
                      initialValue={printer ? printer.shippingPrice : ''}
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
                      initialValue={printer ? printer.address.street : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                    <CustomInput
                      fieldName='Ciudad'
                      name='city'
                      type='text'
                      required
                      initialValue={printer ? printer.address.city : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                    <CustomInput
                      fieldName='País'
                      name='country'
                      type='text'
                      required
                      initialValue={printer ? printer.address.country : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                    <CustomInput
                      fieldName='Código Postal'
                      name='zipcode'
                      type='number'
                      required
                      initialValue={printer ? printer.address.zipcode : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                  </div>
                </div>
                <div className='signup-button-container'>
                  <CustomButton
                    disabled={!formIsValid()}
                  >
                    Guardar cambios
                  </CustomButton>
                </div>
              </form>
            )
          }
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
