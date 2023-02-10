import { useContext } from 'react';
import { Modal } from './components';
import { Caracteristicas, Characters, Gallery, Hero } from './sections';
import { UiContext } from './context';
import './styles/stars.css';
import './App.css';

function App() {

  const { showModal } = useContext(UiContext);

  return (
    <>
      <div id="stars"></div>
      <div id="star1"></div>
      <div id="star2"></div>
      <div id="star3"></div>
      <main className='App'>
        <Hero />
        <Gallery />
        <Caracteristicas/>
        <Characters/>
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
