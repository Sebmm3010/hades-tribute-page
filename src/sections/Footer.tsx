import { contactLogos } from '../data';
import '../styles/footer.css';

export const Footer = () => {
    return (
        <section className='footer'>
            <div className="blur footer_blur_red"></div>
            <div className="blur footer_blur_green"></div>
            <div className="logos_container">

                <div className="contact_logos">
                    {
                        contactLogos.map(logo => (

                            <a key={logo.link} href={logo.link} target="_blank" rel="noopener noreferrer">
                                <img src={logo.img} alt="contactLogo" loading='lazy' />
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
