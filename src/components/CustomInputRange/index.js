import { useEffect, useState } from 'react'
import './styles.css'

import { validateForm } from '../../utils/validateForm'


export const CustomInputRange = ({
  setScale,
  name,
  setValidateStatus,
  validateStatus,
  initialValue = 100
}) => {
  const [value, setValue] = useState(initialValue)
  const handleChange = (e) => {
    setValue(e.target.value)
    setScale(e.target.value / 100)
    const isValid = validateForm[name](Number(e.target.value.trim() / 100))
    const newStatus = { ...validateStatus }
    if (isValid) {
      newStatus[name] = true
      setValidateStatus(newStatus)
    } else {
      newStatus[name] = false
      setValidateStatus(newStatus)
    }
  }

  return (
    <div className='custom-input-range-container'>
      <label className="custom-input-range-label">
        <input
          type="range"
          className='custom-input-range'
          min='10'
          max='150'
          onChange={handleChange}
          value={value}
        />
        {value + '%'}
      </label>
    </div>
  )
}
