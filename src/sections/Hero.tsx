import { useContext } from 'react';
import { motion as m} from "framer-motion";
import { Navbar } from '../components/Navbar';
import { UiContext } from '../context';
import { goty, heroImg, backImg } from '../assets';
import { bigImg, boons, boonsContainer, boonsData, smallImg } from '../data';
import '../styles/hero.css';

export const Hero = () => {

  const { isScrolling } = useContext(UiContext);

  return (
    <section className='hero' id="hero">
      <div className="hero_left">
        {isScrolling ? <div className='support'></div> : null}
        <Navbar />
        {/* Boons */}

        <m.div
          initial="initial"
          animate="visible"
          variants={boonsContainer}
          className="boons_container"
        >
          {boonsData.map(item => (
            <m.img variants={boons} key={item.alt} src={item.img} alt={item.alt} />
          ))}
        </m.div>
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
              Desafía al mismísimo Dios de los muertos, derrota enemigos y atraviesa mazmorras, toma prestados poderes de los Dioses del panteón griego, que te guiaran a un secreto inesperado.
            </span>
          </div>
        </div>
        {/* Metrics */}
        <div className="metrics">
          <div>
            <span>9.3</span>
            <span>En Metacritics</span>
          </div>
          <div>
            <span>+1.000.000</span>
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

        <m.img variants={bigImg} initial="initial" animate="animate" src={heroImg} alt="zagreus" className='hero_img' />
        <m.img variants={smallImg} initial="initial" animate="animate" src={backImg} alt="backImg" className='back_img' />
      </div>
    </section>
  )
}
