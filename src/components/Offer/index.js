import './styles.css'

import { CustomButton } from '../CustomButton'

export const Offer = () => {
  return (
    <>
      <div className='offer-tags'>
      <div className='offer-item'>
        <span className='offer-text-category'>Precio</span>
      </div>
      <div className='offer-item'>
        <span className='offer-text-category'>Entrega en</span>
      </div>
      <div className='offer-item'>
        <span className='offer-text-category'>Imprimido en</span>
      </div>
      <div className='offer-item'/>
    </div>
      <div className='offer-container'>
        <div className='offer-item'>
          <span className='offer-text-price'>12.94€</span>
          <span className='offer-text-description'>(5.94€ prod.)</span>
          <span className='offer-text-description'>(5.95€ envío)</span>
        </div>
        <div className='offer-item'>
          <span className='offer-text-others'>3/6 días hábiles</span>
        </div>
        <div className='offer-item'>
          <span className='offer-text-others'>España</span>
          <span className='offer-text-description'>Imprimakers3D</span>
        </div>
        <div className='offer-item'>
          <CustomButton addToCart >Añadir al carrito</CustomButton>
        </div>
      </div>
    </>
  )
}
