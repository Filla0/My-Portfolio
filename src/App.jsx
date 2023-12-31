import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/Skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/Qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';

const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Testimonials />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App
