import { useState } from 'react'

import './styles.css'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

import { STLViewer } from '../../components/STLViewer'
import { CustomInputFile } from '../../components/CustomInputFile'
import { CustomInputRadio } from '../../components/CustomInputRadio'
import { CustomInputRange } from '../../components/CustomInputRange'
import { CustomSelect } from '../../components/CustomSelect'
import { CustomButton } from '../../components/CustomButton'

const getMeasure = (size, scale) => Math.round(size * scale * 100) / 100 + 'mm'

export const Print = () => {
  const [scale, setScale] = useState(1)
  const [loadedFile, setLoadedFile] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()
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
          {
            loadedFile
              ? <STLViewer stlFile={'http://localhost:3003' + loadedFile.url}/>
              : <CustomInputFile setLoadedFile={setLoadedFile} />
          }
          {
            loadedFile && scale &&
            <div className='measures'>
              <div className='measures-coord'>X: {getMeasure(loadedFile.boundingBox[0], scale)}</div>
              <div className='measures-coord'>Y: {getMeasure(loadedFile.boundingBox[1], scale)}</div>
              <div className='measures-coord'>Z: {getMeasure(loadedFile.boundingBox[2], scale)}</div>
            </div>
          }

          <form
            className='upload-form-container'
            onSubmit={handleSubmit}
            >
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
                <CustomInputRange
                  setScale={setScale}
                />
              </div>
            </div>
            <CustomButton disabled={!loadedFile}>Ver ofertas</CustomButton>
          </form>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
