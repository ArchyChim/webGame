import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import video1 from './assets/video/video.mp4'
import image1 from './assets/img/image.jpg'


function App() {

  return (
    <>

        <div id='home' className='header-container'>
          <Navbar />
          <div className='header-text'>
            <h1>Echos From Beyond</h1> <br />
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>  
        </div>

        <div className="banner">
          <div className="banner-text">
            <h2>La mejor experiencia de Horror</h2> <br />
            <p>¡Descúbrelo!</p>
          </div>
        </div>

        <div className='video-container'>
          <video src={video1} autoPlay loop muted className='video-background'></video>
          <div className='text-video'>
            <h1>Experiencia de Horror Única</h1> <br />
            <p>¡Adéntrate al horror psicológico!</p>
          </div>
        </div>
      

      <div id='history' className="history-section">
        <img src={image1} alt="" className="image1" />
        <div className="history-text">
          <p>Ethan Blackwood, es un detective que lleva años atormentado por la desaparición de su hermana menor, 
            Alice, quien desapareció sin dejar rastro hace cinco años. La investigación no arrojó ningún resultado, 
            y la familia Blackwood se vio sumida en un profundo dolor. Ethan, incapaz de dejar atrás el misterio, se obsesionó con encontrar la verdad, 
            investigando por su cuenta cada pista, cada rumor, cada sombra que pudiera conducirlo al paradero de Alice.</p>
        </div>

      </div>
      
    </>
  );
}

export default App
