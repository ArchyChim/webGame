import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import HistorySection from './components/HistorySection';
import GallerySection from './components/GallerySection';
import DwloadSection from './components/DwloadSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';


function App() {

  return (
    <>
      <Navbar />
    
      <HomeSection />
      
      <HistorySection />

      <GallerySection />

      <DwloadSection />

      <ContactSection />

      <FooterSection />
      
    </>
  );
}

export default App
