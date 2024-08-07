import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Cards from './Cards';
import Footer from './Footer';

const Home = ({ isLoggedIn, onLogout }) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Hero />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
