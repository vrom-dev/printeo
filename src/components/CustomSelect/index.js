import './styles.css'

import { validateForm } from '../../utils/validateForm'

export const CustomSelect = ({
  options,
  name,
  setInputValue,
  setValidateStatus,
  validateStatus,
  initialValue = ''
}) => {
  const handleChange = (e) => {
    setInputValue(e.target.value)
    const isValid = validateForm[name](e.target.value.trim())
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
    <select
      required
      className='custom-select'
      onChange={handleChange}
      defaultValue={initialValue}
    >
      {
        options.map(value => <option value={value} key={value} >{value}</option>)
      }
    </select>
  )
}
