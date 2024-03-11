import Aos from 'aos';
import 'aos/dist/aos.css'
import './btn.css'
function Backtop() {
    Aos.init()
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <>
            <section className='container-background-arrow' data-aos='fade-in' data-aos-duration='1500' data-aos-offset='50'>
                <div className='dev-merchan'>
                    Developed by;
                    <span className='dev-name' onClick={() => window.open('https://www.instagram.com/sabino._g/')}>
                        Gabriel Sabino
                    </span>
                </div>
                <div className='background-arrow' onClick={scrollToTop}>

                    <span className='fa-solid fa-angles-up' />
                </div>
            </section >
        </>
    )
}

export default Backtop
