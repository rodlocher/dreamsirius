import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Renovation from './components/Renovation/Renovation';
import FloorPlan from './components/FloorPlan/FloorPlan';
import Details from './components/Details/Details';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

function App() {
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  const handleOpenPhoto = (src) => {
    if (src) {
      setLightboxPhoto(src);
    }
  };

  const handleClosePhoto = () => {
    setLightboxPhoto(null);
  };

  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero onOpenPhoto={handleOpenPhoto} />
        <About onOpenPhoto={handleOpenPhoto} />
        <Renovation onOpenPhoto={handleOpenPhoto} />
        <FloorPlan onOpenPhoto={handleOpenPhoto} />
        <Details onOpenPhoto={handleOpenPhoto} />
        <Gallery
          externalPhotoSrc={lightboxPhoto}
          onOpenPhoto={handleOpenPhoto}
          onClosePhoto={handleClosePhoto}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
