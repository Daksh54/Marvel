import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MovieGrid from '../components/MovieGrid';
import Trailers from '../components/Trailers';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f0b15] font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <MovieGrid />
      <Trailers />
      <Footer />
    </div>
  );
};

export default Home;
