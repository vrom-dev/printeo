import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

import { AuthContext } from '../../context/AuthContext'

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

import { PrintService } from '../../service/PrintService'

const getMeasure = (size, scale) => Math.round(size * scale * 100) / 100 + 'mm'

export const Print = () => {
  const { authToken } = useContext(AuthContext)
  const navigate = useNavigate()
  const [loadedFile, setLoadedFile] = useState(null)
  const [scale, setScale] = useState(1)
  const [innerFill, setInnerFill] = useState('')
  const [accuracy, setAccuracy] = useState('')
  const [material, setMaterial] = useState('')
  const [validateStatus, setValidateStatus] = useState({
    scale: true,
    innerFill: false,
    accuracy: false,
    material: false
  })

  const formIsValid = () => {
    return validateStatus.scale &&
      validateStatus.innerFill &&
      validateStatus.accuracy &&
      validateStatus.material
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formIsValid()) return
    const newPrint = {
      material,
      innerFill,
      accuracy,
      scale,
      file: loadedFile,
    }
    const printService = new PrintService()
    await printService.createPrint(newPrint, authToken)
    navigate('../user/prints')
  }

  return (
    <>
      <Layout>
        <NavBar />
        <Container>
          <h2 className='text-center'>
            Sube tu modelo <br />
            y empieza a <span className='text-strong'>imprimir</span>
          </h2>
          <form
            className='upload-form-container'
            onSubmit={handleSubmit}
          >
            {
              loadedFile
                ? <STLViewer stlFile={'http://localhost:3003' + loadedFile.url} />
                : <CustomInputFile setLoadedFile={setLoadedFile} />
            }
            {
              loadedFile && scale &&
              <div className='measures'>
                <div className='measures-coord'>X: {getMeasure(loadedFile.dimensions.x, scale)}</div>
                <div className='measures-coord'>Y: {getMeasure(loadedFile.dimensions.y, scale)}</div>
                <div className='measures-coord'>Z: {getMeasure(loadedFile.dimensions.z, scale)}</div>
              </div>
            }
            <div className='upload-form'>
              <div className='upload-form__item'>
                <p className='upload-form__item-title'>2. Selecciona material</p>
                <CustomSelect
                  options={['Gris', 'Marrón', 'Lila', 'Verde']}
                  setInputValue={setMaterial}
                  name='material'
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
              </div>
              <div className='upload-form__item'>
                <p className='upload-form__item-title'>3. Relleno interior</p>
                <CustomInputRadio
                  elements={[50, 80, 100]}
                  name='innerFill'
                  unit='%'
                  setInputValue={setInnerFill}
                  inputValue={innerFill}
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
              </div>
              <div className='upload-form__item'>
                <p className='upload-form__item-title'>4. Precisión</p>
                <CustomInputRadio
                  elements={[0.02, 0.04]}
                  name='accuracy'
                  unit='mm'
                  setInputValue={setAccuracy}
                  inputValue={accuracy}
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                />
              </div>
              <div className='upload-form__item'>
                <p className='upload-form__item-title'>5. Escala</p>
                <CustomInputRange
                  setScale={setScale}
                  setValidateStatus={setValidateStatus}
                  validateStatus={validateStatus}
                  name='scale'
                />
              </div>
            </div>
            <CustomButton disabled={!loadedFile || !formIsValid()}>Guardar impresión</CustomButton>
          </form>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
