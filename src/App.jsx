import React from 'react';
import Navbar from './components/Navbar';


import Footer from './components/Footer';
import Stats from './components/Stats';
import Hero from './components/hero/Hero';
import Services from './components/Services/Services';
import Journey from './components/Journey/Journey';
import UseCases from './components/UseCases/UseCases';
import Blogs from './components/Blogs';
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
      <Navbar />
      <Hero />
      <Stats></Stats>
      <Services></Services>
       <Journey></Journey>
       <UseCases></UseCases>
       <Blogs></Blogs>
      <Footer />
    </div>
  );
}