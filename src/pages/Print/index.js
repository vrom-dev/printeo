import './styles.css'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

import { CustomInputFile } from '../../components/CustomInputFile'
import { CustomInputRadio } from '../../components/CustomInputRadio'
import { CustomInputRange } from '../../components/CustomInputRange'
import { CustomSelect } from '../../components/CustomSelect'
import { CustomButton } from '../../components/CustomButton'

export const Print = () => {
  // TODO set all values for every input

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <>
      <Layout>
        <NavBar/>
        <Container>
          <h2 className='text-center'>
            Sube tu modelo <br/>
            y empieza a <span className='text-strong'>imprimir</span>
          </h2>
          <form
            className='upload-form-container'
            onSubmit={handleSubmit}
            >
            <CustomInputFile />
            <div className='upload-form'>
              <div className='upload-form__item'>
                <p className='upload-form__item-title'>2. Selecciona material</p>
                <CustomSelect
                  options={['Gris', 'Marrón', 'Lila', 'Verde']}
                />
              </div>
              <div className='upload-form__item'>
                <p className='upload-form__item-title'>3. Relleno interior</p>
                <CustomInputRadio
                  elements={[50, 80, 100]}
                  radioGroup='inner-fill'
                  unit='%'
                />
              </div>
              <div className='upload-form__item'>
                <p className='upload-form__item-title'>4. Precisión</p>
                <CustomInputRadio
                  elements={[0.02, 0.04]}
                  radioGroup='precision'
                  unit='mm'
                />
              </div>
              <div className='upload-form__item'>
                <p className='upload-form__item-title'>5. Escala</p>
                <CustomInputRange />
              </div>
            </div>
            <CustomButton
              label='Ver ofertas'
            />
          </form>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
