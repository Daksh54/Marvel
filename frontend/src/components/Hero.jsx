import React from 'react';
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-black overflow-hidden flex items-center">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="/assets/wp9049747 1.png" 
          alt="Guardians of the Galaxy" 
          className="w-full h-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b15] via-transparent to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-10 md:px-20 max-w-2xl text-white font-sans pt-20">
        <motion.img 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src="/assets/marvelLogo.svg" 
          alt="Marvel Studios" 
          className="h-8 mb-4" 
        />
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
        >
          Guardians <br /> of the Galaxy
        </motion.h1>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-4 text-sm md:text-base text-gray-300 mb-6"
        >
          <span>Action | Adventure | Sci-Fi</span>
          <div className="flex items-center gap-1"><FaCalendar /> 2018</div>
          <div className="flex items-center gap-1"><FaClock /> 2h 8m</div>
        </motion.div>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-300 mb-8 max-w-md text-sm md:text-base leading-relaxed"
        >
          In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.
        </motion.p>

        <Link to="/catalog">
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#f83d5a] hover:bg-[#d6344d] text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2 inline-flex"
          >
            Explore Movies <FaArrowRight />
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
