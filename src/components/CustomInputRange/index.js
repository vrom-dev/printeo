import { useEffect, useState } from 'react'

import './styles.css'

export const CustomInputRange = () => {
  const [value, setValue] = useState(100)
  const handleChange = (e) => {
    setValue(e.target.value)
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
