import { useState } from 'react'

import './styles.css'
import uploadIcon from '../../assets/upload.png'

import { Spinner } from '../Spinner'

export const CustomInputFile = ({ setLoadedFile }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const data = new window.FormData()
    data.append('stl', e.target.files[0])
    try {
      const rawUploadResponse = await window.fetch('http://localhost:3003/files', {
        method: 'POST',
        body: data
      })
      const jsonResponse = await rawUploadResponse.json()
      if (jsonResponse.error) {
        throw new Error(jsonResponse.error)
      }
      setIsLoading(false)
      setLoadedFile(jsonResponse)
    } catch (e) {
      setIsLoading(false)
      console.log(e)
    }
  }
  return (
    <label className="custom-file-upload">
      <input
        type="file"
        className="input-file"
        name='stl'
        onChange={handleChange}
      />
      {
        isLoading
          ? <Spinner/>
          : <>
              <img src={uploadIcon} alt='upload-icon' />
              <p className="custom-file-label-text text-center">
                <span className='text-strong'><strong>Selecciona el archivo</strong></span><br/>
                Soporte para archivos <strong>STL</strong><br/>
                Tamaño máximo: 50MB
              </p>
            </>
      }
    </label>
  )
}
