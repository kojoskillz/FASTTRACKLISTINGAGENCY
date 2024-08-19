import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Homepage from './components/Homepage/homepage';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/footer';




const App = () => {
  return (
    <>
         <Navbar />
         <Homepage />
         <FAQ />
         <Footer />
    </>
  )
}

export default App
