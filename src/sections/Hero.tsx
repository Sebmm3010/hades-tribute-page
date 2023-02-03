import '../styles/hero.css';
import { Navbar } from '../components/Navbar';
import { boonsData } from '../data';
import { goty, heroImg, backImg } from '../assets';

export const Hero = () => {
  return (
    <section className="hero">

      <div className="hero_left">
        <Navbar />
        {/* Boons */}

        <div className="boons_container">
          {boonsData.map(item => (
            <img key={item.alt} src={item.img} alt={item.alt} />
          ))}
        </div>
        {/* Hero text */}

        <div className="hero_text">
          <div>
            <span>protagoniza </span>
            <span>una salvaje</span>
          </div>
          <div>
            <span>fuga del </span>
            <span className='outline'>
              inframundo
            </span>
          </div>

          <div>
            <span>
              Desafía al mismísimo Dios de los muertos, derrota enemigos y atraviesa mazmorras que te guiaran a un secreto inesperado.
            </span>
          </div>
        </div>
        {/* Metrics */}
        <div className="metrics">
          <div>
            <span>9.3/10</span>
            <span>En Metacritics</span>
          </div>
          <div>
            <span>1.000.000</span>
            <span>Copias vendidas</span>
          </div>
          <div>
            <span>+50</span>
            <span>Premios ganados</span>
          </div>
        </div>
      </div>

      <div className="hero_right">
        <button className='btn'>
          <a href="https://www.supergiantgames.com/games/hades/" target="_blank" rel="noopener noreferrer">
          Visitar sitio original
          </a>
        </button>

        <div className="goty">
          <img src={goty} alt="goty" />
        </div>

        {/* Hero imgs */}

        <img src={heroImg} alt="zagreus" className='hero_img'/>
        <img src={backImg} alt="backImg" className='back_img'/>
      </div>
    </section>
  )
}
