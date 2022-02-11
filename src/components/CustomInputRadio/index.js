import './styles.css'

import { validateForm } from '../../utils/validateForm'


export const CustomInputRadio = ({
  elements,
  name,
  unit,
  setInputValue,
  inputValue,
  setValidateStatus,
  validateStatus
}) => {
  const handleChange = (e) => {
    setInputValue(Number(e.target.value.trim()))
    const isValid = validateForm[name](Number(e.target.value.trim()))
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
    <div className='custom-radio-group'>
      {elements.map(element => {
        return (
          <div key={element}>
            <label htmlFor={element} className={inputValue == element ? 'custom-radio-label checked' : 'custom-radio-label'}>
              <input
                type="radio"
                id={element}
                name={name}
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
