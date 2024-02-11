import React, { useState, useEffect } from 'react';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Features } from './components/features';
import { About } from './components/about';
import { Services } from './components/services';
// import { Gallery } from './components/gallery';
// import { Testimonials } from './components/testimonials';
import { Faqs } from './components/faqs';
import { Booking } from './components/booking';
import { Contact } from './components/contact';
import { NotFound } from './components/notFound';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';
import './App.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const url = window.location.href;

  const myUrlList = [
    'http://localhost:3000/',
    'http://localhost:3000/#page-top',
    'http://localhost:3000/#features',
    'http://localhost:3000/#about',
    'http://localhost:3000/#services',
    'http://localhost:3000/#faqs',
    'http://localhost:3000/#booking',
    'http://localhost:3000/#contact',
    'https://www.allureguardianagency.com/',
    'https://www.allureguardianagency.com/#page-top',
    'https://www.allureguardianagency.com/#features',
    'https://www.allureguardianagency.com/#about',
    'https://www.allureguardianagency.com/#services',
    'https://www.allureguardianagency.com/#faqs',
    'https://www.allureguardianagency.com/#booking',
    'https://www.allureguardianagency.com/#contact',
  ];

  const exists = myUrlList.includes(url);

  if (exists) {
    return (
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        {/* <Gallery data={landingPageData.Gallery} /> */}
        {/* <Testimonials data={landingPageData.Testimonials} /> */}
        <Faqs data={landingPageData.Faqs} />
        <Booking />
        <Contact data={landingPageData.Contact} />
      </div>
    );
  }
  return <NotFound data={landingPageData.NotFound} />;
};

export default App;
