import { Gallery, Hero } from './sections';
import './App.css';
import './styles/stars.css';
import { Modal } from './components';
import { useContext } from 'react';
import { UiContext } from './context';

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
        {/* <hr /> */}
        <Gallery />
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
