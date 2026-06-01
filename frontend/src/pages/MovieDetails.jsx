import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { catalogMovies } from './MovieCatalog';
import { FaPlay, FaStar, FaCalendar, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = catalogMovies.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#0f0b15] font-sans flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-24 pb-16 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Movie Not Found</h1>
            <Link to="/catalog" className="text-[#f83d5a] hover:underline">Back to Catalog</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0b15] font-sans flex flex-col overflow-x-hidden">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative w-full h-[500px] bg-black">
        <div className="absolute inset-0">
          <img src={movie.image} alt={movie.title} className="w-full h-full object-cover opacity-40 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b15] to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-10 md:px-20 pt-32 flex flex-col md:flex-row gap-10 items-center md:items-end h-full pb-10">
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={movie.image} 
            alt={movie.title} 
            className="w-64 h-96 object-cover rounded-xl shadow-2xl border border-white/10 hidden md:block" 
          />
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-gray-300 mb-6">
              <span className="flex items-center gap-2"><FaStar className="text-[#f83d5a]" /> {movie.rating} Rating</span>
              <span className="flex items-center gap-2"><FaCalendar /> {movie.details.split(' - ')[0]}</span>
              <span className="flex items-center gap-2"><FaClock /> {movie.details.split(' - ')[1]}</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="bg-[#f83d5a] hover:bg-[#d6344d] text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
                <FaPlay size={12} /> Watch Trailer
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-colors border border-white/20">
                Book Ticket
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default MovieDetails;
