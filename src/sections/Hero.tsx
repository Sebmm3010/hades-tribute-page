import '../styles/hero.css';
import { Navbar } from '../components/Navbar';

export const Hero = () => {
  return (
    <section className="hero">
      
      <div className="hero_left">
        <Navbar />
      </div>

      {/* Hero text */}
      <div className="hero_text">

      </div>
      <div className="hero_right">Derecha</div>
    </section>
  )
}
