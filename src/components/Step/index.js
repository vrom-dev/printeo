import './styles.css'

export const Step = ({ stepNumber, sectionTitle }) => {
  return (
    <>
      <div className='section-stepnumber'>
        {stepNumber}
      </div>
      <p className='section-title'>{sectionTitle}</p>
    </>
  )
}
