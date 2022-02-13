import { Link } from 'react-router-dom'

import { Layout } from '../../components/Layout'
import { Container } from '../../components/Container'
import { NavBar } from '../../components/NavBar'
import { CustomButton } from '../../components/CustomButton'
import { Step } from '../../components/Step'
import { Footer } from '../../components/Footer'

import homeSVG from '../../assets/home.svg'
import placeholderSVG from '../../assets/placeholder.svg'
import PrinteoCTAImg1 from '../../assets/printeocta1.png'
import PrinteoCTAImg2 from '../../assets/printeocta2.png'
import PrinteoCTAImg3 from '../../assets/printeocta3.png'

import './styles.css'

export const Home = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <Container>
          <div className='home-cta'>
            <div className='home-cta__text'>
              <h1 className='text-center'>
                Diseña.<br />
                Imprime.<br />
                <span className='text-strong'>Recibe.</span>
              </h1>
              <div className='home-button-container'>
                <Link to='/signup'>
                  <CustomButton filled>Empezar a imprimir</CustomButton>
                </Link>
                <Link to='/printer/signup'>
                  <CustomButton secondary filled>Quiero ser impresor</CustomButton>
                </Link>
              </div>
            </div>
            <div className='home-cta__logo'>
              <img src={homeSVG} className='home-logo' />
            </div>
          </div>
          <p className='home-subtitle'>
            <span className='text-secondary'>¿Buscas un servicio de impresión 3D online para imprimir tus proyectos? <strong>Printeo</strong> es tu solución. Con Printeo puedes subir tus modelos, gestionar tus impresiones y comparar precios. ¡Únete!</span>
          </p>
          <p className='home-howitworks'>Cómo funciona</p>
          <Step
            stepNumber='1'
            sectionTitle='Diseña'
          />
          <h2 className='text-center home-section-title'>Sube y gestiona tus diseños</h2>
          <div className='home-section-description'>
            <p className='text-secondary home-section-description__item'>Printeo no es sólo una copistería. Te ofrecemos una solución integral para tus pedidos de impresión 3D. El primer paso es el almacenamiento de tus archivos en nuestro sistema.  </p>
            <p className='text-secondary home-section-description__item'>Olvídate de que tus archivos STL sigan ocupando espacio en tu disco duro. Printeo te permite almacenarlos en la nube y gestionarlos de forma sencilla y rápida.</p>
          </div>
          <div className='home-subsection'>
            <div className='home-subsection__img-container'>
              <img src={PrinteoCTAImg1} className='home-subsection-img' />
            </div>
            <div className='home-subsection__items'>
              <h3 className='home-subsection-title'>Previsualiza tus archivos 3D</h3>
              <p className='text-secondary'>Cuando cargas el archivo, Printeo te muestra una previsualización en el propio navegador. De esta manera puedes comprobar cómo se verá tu impresión.</p>
              <h3 className='home-subsection-title'>Gestiona tus diseños</h3>
              <p className='text-secondary'>Edita la configuración de tus archivos, o incluso bórralos si ya no los quieres conservar. Printeo te ofrece un sistema de gestión de tus diseños sencillo e intuitivo.</p>
            </div>
          </div>
          <Step
            stepNumber='2'
            sectionTitle='Imprime'
          />
          <h2 className='text-center home-section-title'>Personaliza tu impresión</h2>
          <div className='home-section-description'>
            <p className='text-secondary home-section-description__item'>En Printeo nos gusta que recibas tus impresiones tal y como tú las quieres. Con nuestro gestor puedes configurar tu impresión 3D para que el impresor tenga toda la información necesaria.</p>
            <p className='text-secondary home-section-description__item'>Con la previsualización del modelo, puedes ajustar el escalado de tu impresión, la precisión en mm, el tipo de resina que quieres utilizar o el relleno interior que debe tener la impresión.</p>
          </div>
          <div className='home-subsection'>
            <div className='home-subsection__img-container'>
              <img src={PrinteoCTAImg2} className='home-subsection-img' />
            </div>
            <div className='home-subsection__items'>
              <h3 className='home-subsection-title'>Ajusta el modelo al tamaño deseado</h3>
              <p className='text-secondary'>Puedes ajustar de forma sencilla la precisión, el relleno interior, el material y el escalado de la impresión. El gestor calcula automáticamente el tamaño que tendrá tu impresión.</p>
              <h3 className='home-subsection-title'>Todas las opciones a tu alcance</h3>
              <p className='text-secondary'>En Printeo queremos que la impresión salga como realmente tú quieres, por eso hacemos énfasis en que puedas personalizar el máximo de opciones y características de tu impresión.</p>
            </div>
          </div>
          <Step
            stepNumber='3'
            sectionTitle='Recibe'
          />
          <h2 className='text-center home-section-title'>Recibe tu pedido en casa</h2>
          <div className='home-section-description'>
            <p className='text-secondary home-section-description__item'>Con Printeo tus impresiones 3D están al alcance de un click. Realiza el pedido, añádelo a la cesta, haz el pedido y recíbelo en casa. Así de simple.</p>
            <p className='text-secondary home-section-description__item'>Ponemos a tu alcance una amplia lista de impresores experto en impresión 3D para que tu pedido y tus modelos lleguen justo como tú lo imaginas.</p>
          </div>
          <div className='home-subsection'>
            <div className='home-subsection__img-container'>
              <img src={PrinteoCTAImg3} className='home-subsection-img' />
            </div>
            <div className='home-subsection__items'>
              <h3 className='home-subsection-title'>Entrega garantizada</h3>
              <p className='text-secondary'>Los impresores de Printeo adquieren un compromiso cuando se dan de alta en el sistema: la entrega de la impresión en el plazo garantizado.</p>
              <h3 className='home-subsection-title'>Agrupa varias impresiones en un sólo pedido</h3>
              <p className='text-secondary'>Puedes incluir una o más impresiones 3D en tu pedido, no hay límite. De esta forma puedes acortar los plazos de entrega.</p>
            </div>
          </div>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}
