import { useEffect, useState } from 'react'
import '../src/components/styles/App.css'
import Container from './components/container/index.jsx'
import Header from './components/header/index.jsx'
import Footer from './components/footer/index.jsx'
import './components/media-queries/home_media-queries.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import house from '../public/icons/house.png'
import industrial from '../public/icons/industrial.png'
import suv from '../public/icons/suv.png'
import roller from '../public/icons/roller.png'
import { Link } from 'react-router-dom'
import residencialpaint from '../public/home-images/residencialpaint.jpg'
import industrialpaint from '../public/home-images/industrialpaint.jpg'
import automotivepaint from '../public/home-images/automotivepaint.jpg'
import toolsforpaint from '../public/home-images/toolsforpaint.jpg'

function App() {
  useEffect(() => {
    Aos.init()
  });

  return (
    <>
      <Container>
        <Header />
        <div style={{ background: 'linear-gradient(45deg, #dfb004, #ffc800ab)' }}>
          <section className='background_gradient' data-aos='fade-right' data-aos-duration='800' data-aos-offset='50'>
            <section className='section-container_tittle' style={{ background: 'linear-gradient(45deg, #dfb004, #ffc800ab)' }}>
              <div className='section-copy' data-aos='fade-right' data-aos-duration='2200' data-aos-offset='50'>
                <h1 className='title-presentation'>
                  As melhores soluções em
                </h1>
                <h2 className='subtitle-presentation'>
                  Tintas Imobiliárias, Automotivas, Industriais e Equipamentos para Pintura
                </h2>
                <section className='section-button-group'>
                  <div className='btn-know'>
                    <Link to='/sobre'>
                      <button className='btn_know-more'>
                        Saiba mais
                        <span className='fa-solid fa-arrow-right' />
                      </button>
                    </Link>
                  </div>
                  <div className='btn-busy'>
                    <Link to='/contato'>
                      <button className='btn_business'>
                        Faça negócio conosco <span className='fa-solid fa-arrow-right' />
                      </button>
                    </Link>
                  </div>
                </section>
                <p className='subtitle-aux'>
                  temos uma equipe de profissionais para lhe auxiliar na escolha do melhor negócio. Basta entrar em contato.
                </p>
              </div>
              <div className='section-image' data-aos='fade-right' data-aos-duration='1200' data-aos-offset='50'>
              </div>
            </section>
          </section>
        </div>
        <section className='section-container_body_home'>
          <section className='section-container_home'>
            <div className='greetings_text_home' data-aos='fade-right' data-aos-duration='1500' data-aos-offset='50'>
              <h1>
                Conheça a nossa linha de produtos e serviços.
              </h1>
            </div>
            <div className='greetings_text_ask' data-aos='fade-left' data-aos-duration='1500' data-aos-offset='50'>
              <h1>
                Veja as nossas opções de produtos e serviços para facilitar a sua escolha. <span>Entre em contato e solicite!</span>
              </h1>
            </div>
          </section>
          <section className='section-container_services' >
            <div className='card-service_1' data-aos='fade-right' data-aos-duration='1500' data-aos-offset='50'>
              <p>
                <h1>
                  <span className='fa-solid fa-swatchbook' /> PROJETOS DE CORES PERSONALIZADOS
                </h1>
                Projetos de cores personalizados, de alta resolução e qualidade. Sempre oferecendo a você os mais recentes lançamentos de cores do mercado.
              </p>
            </div>
            <div className='card-service_2' data-aos='fade-right' data-aos-duration='1500' data-aos-offset='50'>
              <p>
                <h1>
                  <span className='fa-solid fa-truck-fast' /> ENTREGA GRATUITA
                </h1>
                Faça seus pedidos sem sair de casa. Na Tintas Fischer a entrega é rápida e gratuita. Você recebe o seu pedido em casa com a comodidade que você merece.
              </p>
            </div>
            <div className='card-service_3' data-aos='fade-left' data-aos-duration='1500' data-aos-offset='50'>
              <p>
                <h1>
                  <span className='fa-solid fa-heart' /> SISTEMA TINTOMÉTRICO
                </h1>
                Nosso sistema tintométrico, com tecnologia italiana, garante fidelidade nas cores escolhidas e qualidade na pigmentação da sua cor.
              </p>
            </div>
            <div className='card-service_4' data-aos='fade-left' data-aos-duration='1500' data-aos-offset='50'>
              <p>
                <h1>
                  <span className='fa-solid fa-comments' /> CONSULTORIA ESPECIALIZADA
                </h1>
                Nossos profissionais são capacitados para oferecer as melhores opções de pintura. Além da linha imobiliária, contamos também com linhas industrial, decorativa e automotiva.
              </p>
            </div>
          </section>
          <section className='section-container_products_home'>
            <div className='card-product_1' data-aos='fade-right' data-aos-duration='1500' data-aos-offset='50'>
              <img src={residencialpaint} alt="" className='container-img-residencial' />
              <div className='container-img_title'>
                <img src={house} alt="mini-house" className='background-house' />
                <h1 className='title'>
                  Tintas Imobiliárias e Prediais
                  <p>
                    Excelente qualidade e alta tecnologia
                  </p>
                </h1>
              </div>
              <h1 className='desc_text'>
                Desde texturas, o fundo e até o acabamento.
              </h1>
            </div>
            <div className='card-product_2' data-aos='fade-right' data-aos-duration='1500' data-aos-offset='50'>
              <img src={industrialpaint} alt="" className='container-img-industrial' />
              <div className='container-img_title'>
                <img src={industrial} alt="mini-industrial" className='background-industrial' />
                <h1 className='title'>
                  Tintas Industriais
                  <p>
                    Excelente durabilidade e resistência.
                  </p>
                </h1>
              </div>
              <h1 className='desc_text'>
                Fornecemos uma ampla gama de produtos para uso industrial
              </h1>
            </div>
            <div className='card-product_3' data-aos='fade-left' data-aos-duration='2500' data-aos-offset='50'>
              <img src={automotivepaint} alt="" className='container-img-automotive' />
              <div className='container-img_title'>
                <img src={suv} alt="mini-suv" className='background-suv' />
                <h1 className='title'>
                  Tintas Automotivas
                  <p>
                    Linha completa de produtos automotivos e as melhores marcas do mercado.
                  </p>
                </h1>
              </div>
              <h1 className='desc_text'>
                Possuímos vários acabamentos, desde as linhas tradicionais, até acabamentos FLAKE E CAMALEÃO.
              </h1>
            </div>
            <div className='card-product_4' data-aos='fade-left' data-aos-duration='2500' data-aos-offset='50'>
              <img src={toolsforpaint} alt="" className='container-img-tools' />
              <div className='container-img_title'>
                <img src={roller} alt="mini-roller" className='background-roller' />
                <h1 className='title'>
                  Equipamentos para Pintura
                  <p>
                    Contamos com linha completa de materiais e equipamentos de pintura.
                  </p>
                </h1>
              </div>
              <h1 className='desc_text'>
                Seja qual for a superfície, nós oferecemos a você as melhores opções de materiais de pintura.
              </h1>
            </div>
          </section>
          <section className='section-container_products_footer' data-aos='fade-up' data-aos-duration='1500' data-aos-offset='50'>
            <div className='greetings_text_products_footer'>
              <h1>
                Conheça o catálogo virtual de uma de nossas empresas parceiras!
              </h1>
              <h2 onClick={() => window.open('https://www.lukscolor.com.br/cores')} className='linktoluks'>
                https://www.lukscolor.com.br/cores
              </h2>
              <p>
                Coleções exclusivas com mais de 2000 opções de cores nos mais diversos acabamentos. Você consulta nossos catálogos e o LUKSYSTEM reproduz na hora a cor que você sempre sonhou.
              </p>
            </div>
          </section>
        </section>

        <Footer />
      </Container >
    </>
  )
}

export default App
