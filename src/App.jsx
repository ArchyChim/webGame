import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import video1 from './assets/video/video.mp4'


function App() {

  return (
    <>
      <div className='header-container'>
        <Navbar />
        <div className='header-text'>
          <h1>Echos From Beyond</h1> <br />
          <p>Yamete Kudasai</p>
        </div>
      </div>

      <div className="banner">
        <div className="banner-text">
          <h2>The best horror experience</h2> <br />
          <p>¡Figure Out!</p>
        </div>
      </div>

      <div className='video-container'>
        <video src={video1} autoPlay loop muted className='video-background'></video>
        <div className='text-video'>
          <h1>Experiencia de Horror Única</h1> <br />
          <p>¡Adéntrate al horror psicológico!</p>
        </div>
      </div>
      
    </>
  );
}

export default App
