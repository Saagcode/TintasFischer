import './footer.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Fischer_logo from '../../../public/icons/TINTAS_FISCHER_logo.png'
import { Link } from 'react-router-dom'
import Backtop from '../back-to-top_btn'

function Footer() {
    Aos.init()
    return (
        <>
            <section className="section-container_footer">
                <div className="section-footer_content">
                    <div className='section-grid' data-aos='fade-up' data-aos-duration='1200' data-aos-offset='50'>
                        <div className='tittle_content'>
                            <h2 className='title-fischer'>
                                <img src={Fischer_logo} alt="" />
                            </h2>
                            <span className='fa-brands fa-instagram' style={{ fontSize: '20pt' }} />
                            <span className='fa-brands fa-square-facebook' style={{ fontSize: '20pt' }} />

                        </div>
                        <div className='subtittle_content'>
                            <h1>
                                Empresa
                            </h1>
                            <p>
                                <Link className='Link' to='/home'>Home</Link>
                            </p>
                            <p>
                                <Link className='Link' to='/sobre'>Sobre</Link>
                            </p>
                        </div>
                        <div className='subtittle_content'>
                            <h1>
                                Produtos
                            </h1>
                            <p>
                                <Link className='Link' to='/produtos'>Tintas</Link>
                            </p>
                            <p>
                                <Link className='Link' to='/cores-inspiracoes'>Projetos</Link>
                            </p>
                        </div>
                        <div className='subtittle_content'>
                            <h1>
                                Conectar
                            </h1>
                            <p>
                                <Link className='Link' to='/contato'>Fale Conosco</Link>
                            </p>
                            <p>
                                <Link className='Link' to='/assistencia'>Precisa de Pintor?</Link>
                            </p>
                        </div>
                    </div>
                    <footer>
                        <div className='section-container_copy'>
                            <span>
                                Copyright &copy; 2024, Tintas Fischer Todos os direitos reservados
                            </span>
                            <span>
                        <Backtop />
                            </span>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default Footer



