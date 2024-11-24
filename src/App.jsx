import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import video1 from './assets/video/video.mp4'
import HistorySection from './components/HistorySection';




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
      
      <HistorySection />
      
    </>
  );
}

export default App
