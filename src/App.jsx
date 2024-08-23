import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Homepage from './components/Homepage/homepage';
import Marquee from './components/Marquee/marquee';
import Footer from './components/Footer/footer';


const App = () => {
  return (
    <>
         <Navbar />
         <Homepage />
         <Marquee />
         <Footer />
    </>
  )
}

export default App
