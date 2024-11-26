import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import HistorySection from './components/HistorySection';
import GallerySection from './components/GallerySection';
import DwloadSection from './components/DwloadSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const images = document.querySelectorAll('img');
    const videos = document.querySelectorAll('video');

    const totalResources = images.length + videos.length;
    let loadedResources = 0;

    const MIN_LOADING_TIME = 3000; 
    const startTime = Date.now();

    if (totalResources === 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, MIN_LOADING_TIME);
      return;
    }

    const checkIfLoaded = () => {
      loadedResources++;
      if (loadedResources === totalResources) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);

        console.log(`Remaining loading time: ${remainingTime}ms`);

        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkIfLoaded();
      } else {
        img.onload = checkIfLoaded;
        img.onerror = checkIfLoaded;
      }
    });

    videos.forEach((video) => {
      if (video.readyState >= 3) {
        checkIfLoaded();
      } else {
        video.onloadeddata = checkIfLoaded;
        video.onerror = checkIfLoaded;
      }
    });

    return () => {
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
      videos.forEach((video) => {
        video.onloadeddata = null;
        video.onerror = null;
      });
    };
  }, []);

  return (
    <>
      {console.log(isLoading)}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <HomeSection />
          <HistorySection />
          <GallerySection />
          <DwloadSection />
          <ContactSection />
          <FooterSection />
        </>
      )}
    </>
  );
}

export default App;
