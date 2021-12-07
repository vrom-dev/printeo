import { useState } from 'react'

import './styles.css'
import uploadIcon from '../../assets/upload.png'

export const CustomInputFile = ({ setLoadedFile }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setLoadedFile()
    setIsLoading(false)
  }
  return (
    <label className="custom-file-upload">
      <input
        type="file"
        className="input-file"
        onChange={handleChange}
      />
      {
        isLoading
          ? <div className='spinner'></div>
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
