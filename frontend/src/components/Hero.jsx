import React, { useState, useEffect } from 'react';
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const heroMovies = [
  {
    id: 1,
    title: 'Guardians of the Galaxy',
    genres: 'Action | Adventure | Sci-Fi',
    year: '2014',
    duration: '2h 1m',
    description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
    image: '/assets/wp9049747 1.png',
  },
  {
    id: 2,
    title: 'Avengers: Endgame',
    genres: 'Action | Sci-Fi | Drama',
    year: '2019',
    duration: '3h 1m',
    description: 'After the devastating events of Infinity War, the remaining Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
    image: '/assets/wp4280803 1.png',
  },
  {
    id: 6,
    title: 'The Batman',
    genres: 'Action | Crime | Drama',
    year: '2022',
    duration: '2h 56m',
    description: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption.',
    image: '/assets/wp9049779 1.png',
  },
  {
    id: 5,
    title: 'Wonder Woman',
    genres: 'Action | Fantasy | War',
    year: '2017',
    duration: '2h 21m',
    description: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war.',
    image: '/assets/wp9049770 1.png',
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroMovies.length);
    }, 7000); // Rotate every 7 seconds

    return () => clearInterval(timer);
  }, []);

  const currentMovie = heroMovies[currentIndex];

  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-black overflow-hidden flex items-center">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentMovie.id + "-bg"}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={currentMovie.image} 
            alt={currentMovie.title} 
            className="w-full h-full object-cover object-top opacity-50"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-[5]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b15] via-transparent to-transparent z-[5]"></div>

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
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMovie.id + "-content"}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              {currentMovie.title.split(':').map((part, i) => (
                <React.Fragment key={i}>
                  {part} {i === 0 && currentMovie.title.includes(':') && <br />}
                </React.Fragment>
              ))}
            </h1>
            
            <div className="flex items-center gap-4 text-sm md:text-base text-gray-300 mb-6">
              <span>{currentMovie.genres}</span>
              <div className="flex items-center gap-1"><FaCalendar /> {currentMovie.year}</div>
              <div className="flex items-center gap-1"><FaClock /> {currentMovie.duration}</div>
            </div>

            <p className="text-gray-300 mb-8 max-w-md text-sm md:text-base leading-relaxed line-clamp-3">
              {currentMovie.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <Link to="/catalog">
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#f83d5a] hover:bg-[#d6344d] text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2 inline-flex"
          >
            Explore Movies <FaArrowRight />
          </motion.button>
        </Link>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-10 md:left-20 flex gap-2 z-20">
          {heroMovies.map((_, idx) => (
            <div 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-[#f83d5a]' : 'w-4 bg-gray-600 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
