import { Gallery, Hero } from './sections';
import './App.css';
import './styles/stars.css';

function App() {

  return (
    <>
      <div id="stars"></div>
      <div id="star1"></div>
      <div id="star2"></div>
      <div id="star3"></div>
      <main className='App'>
        <Hero />
        <hr />
        <Gallery/>
      </main>
    </>
  )
}

export default App
