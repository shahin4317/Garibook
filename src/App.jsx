import React from 'react';
import Navbar from './components/Navbar';


import Footer from './components/Footer';
import Stats from './components/Stats';

import Business from './components/Business';
import GaribookClub from './components/GaribookClub';
import Gsap from './components/Gsap';
import Hero from './components/hero/Hero';
import Services from './components/Services/Services';



export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
      <Navbar />
      <Hero />
      <Stats></Stats>
      <Services></Services>
      
      <Business></Business>
      <GaribookClub></GaribookClub>
      <Gsap></Gsap>
    
      <Footer />
    </div>
  );
}