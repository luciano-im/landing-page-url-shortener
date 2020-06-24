import React from 'react';
import './css/App.css';
import Header from './components/header';
import Hero from './components/hero';
import Shortener from './components/shortener';
import Statistics from './components/statistics';
import CallToAction from './components/call-to-action';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Shortener />
      <Statistics />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
