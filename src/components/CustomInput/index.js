import { useState } from 'react'
import './styles.css'

import { validateForm } from '../../utils/validateForm'

export const CustomInput = ({
  type = 'text',
  name = '',
  fieldName = '',
  required = false,
  errorMessage = 'Este campo es obligatorio',
  validateStatus,
  setValidateStatus
}) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setValue(e.target.value)
    const isValid = validateForm[name](e.target.value.trim())
    const newStatus = { ...validateStatus }
    if (isValid) {
      setError(false)
      newStatus[name] = true
      setValidateStatus(newStatus)
    } else {
      setError(true)
      newStatus[name] = false
      setValidateStatus(newStatus)
    }
  }

  return (
    <>
      <div className='custom-input-container'>
        <label
          name={name}
          className='custom-input-label'
        >
          {required ? `${fieldName} (*)` : fieldName}
        </label>
        <input
          type={type}
          onChange={handleChange}
          value={value}
          name={name}
          className={
            error
              ? 'custom-input custom-input-error'
              : value
                ? 'custom-input custom-input-success'
                : 'custom-input'
            }
        />
        <div className='custom-input-error-message text-center'>
          {error && errorMessage}
        </div>
      </div>
    </>
  )
}
