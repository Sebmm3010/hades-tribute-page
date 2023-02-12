import { useContext } from 'react';
import { Modal, MovileMenu } from './components';
import { Caracteristicas, Characters, Footer, Gallery, Hero } from './sections';
import { useWindowSize } from './hooks';
import { UiContext } from './context';
import './styles/stars.css';
import './App.css';

function App() {

  const { showModal } = useContext(UiContext);
  const { width } = useWindowSize();
  return (
    <>
      <div id="stars"></div>
      <div id="star1"></div>
      <div id="star2"></div>
      <div id="star3"></div>
      <main className='App'>
        <Hero />
        <Gallery />
        <Caracteristicas />
        <Characters />
        <Footer />

        {
          width <= 768
            ? <MovileMenu />
            : null
        }

        {
          showModal
            ? <Modal />
            : null
        }
      </main>
    </>
  )
}

export default App
