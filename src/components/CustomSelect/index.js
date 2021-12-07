import './styles.css'

export const CustomSelect = ({ options }) => {
  return (
  <select required className='custom-select'>
    {options.map(value => <option value={value} key={value}>{value}</option>)}
  </select>
  )
}
