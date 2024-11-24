import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import HistorySection from './components/HistorySection';
import GallerySection from './components/GallerySection';




function App() {

  return (
    <>
      <Navbar />
    
      <HomeSection />
      
      <HistorySection />

      <GallerySection />
      
    </>
  );
}

export default App
