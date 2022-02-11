import { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './styles.css'

import { AuthContext } from '../../context/AuthContext'

import { Container } from '../../components/Container'
import { Layout } from '../../components/Layout'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'

import { STLViewer } from '../../components/STLViewer'
import { Spinner } from '../../components/Spinner'
import { CustomInputRadio } from '../../components/CustomInputRadio'
import { CustomInputRange } from '../../components/CustomInputRange'
import { CustomSelect } from '../../components/CustomSelect'
import { CustomButton } from '../../components/CustomButton'

import { PrintService } from '../../service/PrintService'

const getMeasure = (size, scale) => Math.round(size * scale * 100) / 100 + 'mm'

export const STLEdit = () => {
  const { id } = useParams()
  const { authToken } = useContext(AuthContext)
  const [print, setPrint] = useState(null)
  const navigate = useNavigate()
  const [scale, setScale] = useState(null)
  const [innerFill, setInnerFill] = useState(null)
  const [accuracy, setAccuracy] = useState(null)
  const [material, setMaterial] = useState(null)
  const [validateStatus, setValidateStatus] = useState({
    scale: true,
    innerFill: true,
    accuracy: true,
    material: true
  })

  useEffect(() => {
    const getPrint = async (printId, authToken) => {
      const printService = new PrintService()
      const printData = await printService.getOnePrint(printId, authToken)
      setPrint(printData)
      setScale(printData.scale)
      setInnerFill(printData.innerFill * 100)
      setAccuracy(printData.accuracy)
      setMaterial(printData.material)
    }
    getPrint(id, authToken)
  }, [])

  const formIsValid = () => {
    return validateStatus.scale &&
      validateStatus.innerFill &&
      validateStatus.accuracy &&
      validateStatus.material
  }

  console.log(material, innerFill, accuracy, scale)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formIsValid()) return
    const updatedPrintData = {
      material,
      innerFill,
      accuracy,
      scale
    }
    const printService = new PrintService()
    await printService.updatePrint(print.id, updatedPrintData, authToken)
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
          </h2>            {
            print && scale && innerFill && material && accuracy &&
            <>
              <form
                className='upload-form-container'
                onSubmit={handleSubmit}
              >
                <STLViewer stlFile={'http://localhost:3003' + print.file.url} />
                <div className='measures'>
                  <div className='measures-coord'>X: {getMeasure(print.file.dimensions.x, scale)}</div>
                  <div className='measures-coord'>Y: {getMeasure(print.file.dimensions.y, scale)}</div>
                  <div className='measures-coord'>Z: {getMeasure(print.file.dimensions.z, scale)}</div>
                </div>

                <div className='upload-form'>
                  <div className='upload-form__item'>
                    <p className='upload-form__item-title'>2. Selecciona material</p>
                    <CustomSelect
                      options={['Gris', 'Marrón', 'Lila', 'Verde']}
                      setInputValue={setMaterial}
                      name='material'
                      setValidateStatus={setValidateStatus}
                      validateStatus={validateStatus}
                      initialValue={material}
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
                      initialValue={scale * 100}
                      name='scale'
                    />
                  </div>
                </div>
                <CustomButton disabled={!print || !formIsValid()}>Guardar cambios</CustomButton>
              </form>
              <form
                className='upload-form-container'
                onSubmit={handleSubmit}
              >
                <CustomButton disabled={!print} warning>Eliminar impresión</CustomButton>
              </form>
            </>
          }
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
