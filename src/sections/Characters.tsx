import { motion as m } from 'framer-motion';
import { characterImg, characterInfo, charactersData as data } from '../data';
import { useSlide } from '../hooks';
import '../styles/characters.css';

export const Characters = () => {
  const { indexImg, handlerLeft, handlerRight } = useSlide(data.length);
  return (
    <section className="characters" id="characters">
      <div className="left_characters">
        <span>Quienes conoceras</span>
        <span className='outline'>en el camino?</span>
        <div className='character_info'>
          <span>{data[indexImg].name} </span>
          <span>- {data[indexImg].occupation}</span>
        </div>
        <m.span key={data[indexImg].name} variants={characterInfo} initial="initial" animate="animate" exit="exit" >{data[indexImg].details}</m.span>
        {
          data[indexImg].url
            ? (<a href={data[indexImg].url} target="_blank" rel="noopener noreferrer">
              Saber mas...
            </a>)
            : null
        }
      </div>
      <div className="right_characters">
        <div className='marco'></div>
        <div className='fondo'></div>
        <m.img variants={characterImg} initial="initial" animate="animate" exit="exit" key={data[indexImg].name} className='noselect' src={data[indexImg].img} alt={data[indexImg].name} />

        {/* Arrows */}
        <div className="c_arrows">

          <svg onClick={handlerLeft} viewBox="0 0 32 32" width="32" height="32" stroke="currentColor" fill="currentColor"><path d="M1.2 16l8.4-8.8v5.6h20.8v6.4h-20.8v5.6l-8.4-8.8z" /></svg>

          <svg onClick={handlerRight} viewBox="0 0 32 32" width="32" height="32" stroke="currentColor" fill="currentColor"><path d="M22.4 24.8v-5.6h-20.8v-6.4h20.8v-5.6l8.4 8.8-8.4 8.8z" /></svg>

        </div>
      </div>
    </section>
  )
}
