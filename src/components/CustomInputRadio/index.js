import { useState } from 'react'

import './styles.css'

export const CustomInputRadio = ({ elements, radioGroup, unit }) => {
  const [inputValue, setInputValue] = useState(null)
  const handleChange = (e) => {
    setInputValue(Number(e.target.value))
  }
  return (
    <div className='custom-radio-group'>
      {elements.map(element => {
        return (
          <div key={element}>
            <label htmlFor={element} className={inputValue === element ? 'custom-radio-label checked' : 'custom-radio-label'}>
              <input
                type="radio"
                id={element}
                name={radioGroup}
                value={element}
                onChange={handleChange}
              />
              {element + unit}
            </label>
          </div>
        )
      })}
    </div>
  )
}
