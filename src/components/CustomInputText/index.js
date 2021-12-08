import { useEffect, useState } from 'react'
import { useInputValue } from '../../hooks'

import './styles.css'

export const CustomInputText = ({ setScale }) => {
  const [value, setValue] = useState(100)
  const handleChange = (e) => {
    setValue(e.target.value)
    setScale(e.target.value / 100)
  }

  useEffect(() => {

  })

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
