import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'

import { UserService } from '../../service/UserService'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { Submenu } from '../../components/Submenu'
import { CustomInput } from '../../components/CustomInput'
import { CustomButton } from '../../components/CustomButton'
import { Spinner } from '../../components/Spinner'
import { Notification } from '../../components/Notification'

import './styles.css'

export const UserAdmin = () => {
  const { authToken } = useContext(AuthContext)
  const [user, setUser] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationSucceed, setNotificationSucceed] = useState(false)
  const userService = new UserService()


  useEffect(() => {
    async function getUserInfo() {
      const { id } = await userService.getUserId(authToken)
      const response = await userService.getUser(id, authToken)
      setUser(response)
      setIsLoading(false)
    }
    getUserInfo()
  }, [])

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

  const [validateStatus, setValidateStatus] = useState({
    name: true,
    firstSurname: true,
    secondSurname: true,
    email: true,
    phone: true,
    country: true,
    street: true,
    city: true,
    zipcode: true
  })

  const formIsValid = () => {
    return validateStatus.name &&
      validateStatus.firstSurname &&
      validateStatus.secondSurname &&
      validateStatus.email &&
      validateStatus.phone &&
      validateStatus.country &&
      validateStatus.street &&
      validateStatus.city &&
      validateStatus.zipcode
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formIsValid()) return
    const userToUpdate = {
      name: e.target.name.value,
      firstSurname: e.target.firstSurname.value,
      secondSurname: e.target.secondSurname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: {
        street: e.target.street.value,
        country: e.target.country.value,
        city: e.target.city.value,
        zipcode: e.target.zipcode.value
      }
    }
    const newUser = await userService.editUser(user.id, userToUpdate, authToken)
    if (newUser) {
      setUser(newUser)
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
                    <h3 className='text-center'>Tus datos</h3>
                    <CustomInput
                      fieldName='Nombre'
                      name='name'
                      type='text'
                      required
                      initialValue={user ? user.name : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                    <CustomInput
                      fieldName='Primer apellido'
                      name='firstSurname'
                      type='text'
                      required
                      initialValue={user ? user.firstSurname : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                    <CustomInput
                      fieldName='Segundo apellido'
                      name='secondSurname'
                      type='text'
                      required
                      initialValue={user ? user.secondSurname : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                    <CustomInput
                      fieldName='Correo electrónico'
                      name='email'
                      type='email'
                      errorMessage='Introduce un correo electrónico válido'
                      required
                      initialValue={user ? user.email : ''}
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
                      initialValue={user ? user.address.street : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                    <CustomInput
                      fieldName='Ciudad'
                      name='city'
                      type='text'
                      required
                      initialValue={user ? user.address.city : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                    <CustomInput
                      fieldName='País'
                      name='country'
                      type='text'
                      required
                      initialValue={user ? user.address.country : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                    <CustomInput
                      fieldName='Código Postal'
                      name='zipcode'
                      type='number'
                      required
                      initialValue={user ? user.address.zipcode : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                    <CustomInput
                      fieldName='Teléfono'
                      name='phone'
                      type='tel'
                      errorMessage='Introduce un número de teléfono válido'
                      initialValue={user ? user.phone : ''}
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                    />
                  </div>
                </div>
                <div className='signup-button-container'>
                  <CustomButton
                    disabled={!formIsValid()}
                  >Guardar cambios</CustomButton>
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
