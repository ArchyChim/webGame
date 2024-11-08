import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import background from './assets/img/background.jpg'
import video1 from './assets/video/video.mp4'


function App() {

  return (
    <>
      <div className='header-container'>
        <Navbar />
        <img src={background} alt="" className='header-image'/>
        <div className='header-text'>
          <h1>Echos From Beyond</h1> <br />
          <p>Yamete Kudasai</p>
        </div>
      </div>

      <div className='video-container'>
        <video src={video1} autoPlay loop muted className='video-background'></video>
        <div className='text-video'>
          <h1>Experiencia de Horror Única</h1>
          <p>Sumerjete en esta experiencia única</p>
        </div>
      </div>
      
    </>
  );
}

export default App
