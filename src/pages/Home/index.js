import { Layout } from '../../components/Layout'
import { Container } from '../../components/Container'
import { NavBar } from '../../components/NavBar'
import { CustomButton } from '../../components/CustomButton'
import { Step } from '../../components/Step'
import { Footer } from '../../components/Footer'

import homeSVG from '../../assets/home.svg'
import placeholderSVG from '../../assets/placeholder.svg'

import './styles.css'

export const Home = () => {
  return (
    <>
      <Layout>
        <NavBar/>
         <Container>
          <div className='home-cta'>
            <div className='home-cta__text'>
              <h1 className='text-center'>
                Diseña.<br/>
                Imprime.<br/>
                <span className='text-strong'>Disfruta.</span>
              </h1>
              <div className='home-button-container'>
                <CustomButton label='Empezar a imprimir' filled/>
                <CustomButton label='Quiero ser impresor' secondary filled/>
              </div>
            </div>
            <div className='home-cta__logo'>
              <img src={homeSVG} className='home-logo'/>
            </div>
          </div>
          <p className='home-subtitle'>
            <span className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum neque id tempor tincidunt. Morbi sed massa vulputate lacus blandit bibendum. Vivamus viverra nec lorem vel convallis</span>
          </p>
          <p className='home-howitworks'>Cómo funciona</p>
          <Step
            stepNumber='1'
            sectionTitle='Diseña'
          />
          <h2 className='text-center home-section-title'>Sube y gestiona tus diseños</h2>
          <div className='home-section-description'>
            <p className='text-secondary home-section-description__item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum neque id tempor tincidunt. Morbi sed massa vulp ut at e lacus blandit bibendum. Vivamus viverra nec lorem vel convallis</p>
            <p className='text-secondary home-section-description__item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum neque id tempor tincidunt. Morbi sed massa vulp ut at e lacus blandit bibendum. Vivamus viverra nec lorem vel convallis</p>
          </div>
          <div className='home-subsection'>
            <div className='home-subsection__img-container'>
              <img src={placeholderSVG} className='home-subsection-img'/>
            </div>
            <div className='home-subsection__items'>
              <h3 className='home-subsection-title'>Lorem ipsum dolor sit amet</h3>
              <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum neque id tempor tincidunt. Morbi sed massa vulputate lacus blandit bibendum. Vivamus viverra nec lorem vel convallis</p>
              <h3 className='home-subsection-title'>Lorem ipsum dolor sit amet</h3>
              <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum neque id tempor tincidunt. Morbi sed massa vulputate lacus blandit bibendum. Vivamus viverra nec lorem vel convallis</p>
            </div>
          </div>
          <Step
            stepNumber='2'
            sectionTitle='Imprime'
          />
          <h2 className='text-center home-section-title'>Personaliza tu impresión</h2>
          <div className='home-section-description'>
            <p className='text-secondary home-section-description__item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum neque id tempor tincidunt. Morbi sed massa vulp ut at e lacus blandit bibendum. Vivamus viverra nec lorem vel convallis</p>
            <p className='text-secondary home-section-description__item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum neque id tempor tincidunt. Morbi sed massa vulp ut at e lacus blandit bibendum. Vivamus viverra nec lorem vel convallis</p>
          </div>
          <div className='home-subsection'>
            <div className='home-subsection__img-container'>
              <img src={placeholderSVG} className='home-subsection-img'/>
            </div>
            <div className='home-subsection__items'>
              <h3 className='home-subsection-title'>Lorem ipsum dolor sit amet</h3>
              <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum neque id tempor tincidunt. Morbi sed massa vulputate lacus blandit bibendum. Vivamus viverra nec lorem vel convallis</p>
              <h3 className='home-subsection-title'>Lorem ipsum dolor sit amet</h3>
              <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum neque id tempor tincidunt. Morbi sed massa vulputate lacus blandit bibendum. Vivamus viverra nec lorem vel convallis</p>
            </div>
          </div>
          <Step
            stepNumber='3'
            sectionTitle='Disfruta'
          />
          <h2 className='text-center home-section-title'>Recibe tu pedido en 24h</h2>
          <div className='home-section-description'>
            <p className='text-secondary home-section-description__item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum neque id tempor tincidunt. Morbi sed massa vulp ut at e lacus blandit bibendum. Vivamus viverra nec lorem vel convallis</p>
            <p className='text-secondary home-section-description__item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum neque id tempor tincidunt. Morbi sed massa vulp ut at e lacus blandit bibendum. Vivamus viverra nec lorem vel convallis</p>
          </div>
          <div className='home-subsection'>
            <div className='home-subsection__img-container'>
              <img src={placeholderSVG} className='home-subsection-img'/>
            </div>
            <div className='home-subsection__items'>
              <h3 className='home-subsection-title'>Lorem ipsum dolor sit amet</h3>
              <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum neque id tempor tincidunt. Morbi sed massa vulputate lacus blandit bibendum. Vivamus viverra nec lorem vel convallis</p>
              <h3 className='home-subsection-title'>Lorem ipsum dolor sit amet</h3>
              <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum neque id tempor tincidunt. Morbi sed massa vulputate lacus blandit bibendum. Vivamus viverra nec lorem vel convallis</p>
            </div>
          </div>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
