import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection';
import HistorySection from './components/HistorySection';




function App() {

  return (
    <>
      <Navbar />
    
      <HomeSection/>
      
      <HistorySection />
      
    </>
  );
}

export default App
