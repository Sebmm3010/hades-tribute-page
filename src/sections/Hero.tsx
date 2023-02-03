import '../styles/hero.css';
import { Navbar } from '../components/Navbar';

export const Hero = () => {
  return (
    <section className="hero">

      <div className="hero_left">
        <Navbar />
        {/* Hero text */}
        <div className="hero_text">
          <div>
            <span className='outline'>protagoniza </span>
            <span>una salvaje</span>
          </div>
          <div>
            <span>
              fuga del </span>
            <span className='outline'>
              inframundo
            </span>
          </div>

          <div>
            <span>

            </span>
          </div>
        </div>
      </div>

      <div className="hero_right">Derecha</div>
    </section>
  )
}
