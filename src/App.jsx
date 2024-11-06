import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import background from './assets/img/background.jpg'

function App() {

  return (
  
      <div className='header-container'>
        <Navbar />
        <img src={background} alt="" className='header-image'/>
        <div className='header-text'>
          <h1>Echos From Beyond</h1> <br />
          <p>OnlyFans.com/ArchyChim</p> <br />
          <p>Yamete Nyaaaa</p>
        </div>
      </div>
      
    
  );
}

export default App
