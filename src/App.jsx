import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import HistorySection from './components/HistorySection';
import GallerySection from './components/GallerySection';
import DwloadSection from './components/DwloadSection';




function App() {

  return (
    <>
      <Navbar />
    
      <HomeSection />
      
      <HistorySection />

      <GallerySection />

      <DwloadSection />
      
    </>
  );
}

export default App
