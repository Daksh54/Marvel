import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useSearchParams } from 'react-router-dom';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Mock catalog data
export const catalogMovies = [
  { id: 1, title: 'Alita Battle Angel 4k', details: '2019 - Action, Sci-Fi', rating: 4.5, image: '/assets/wp4926059 1.png' },
  { id: 2, title: 'Avengers Endgame', details: '2019 - Action, Sci-Fi', rating: 4.8, image: '/assets/wp4280803 1.png' },
  { id: 3, title: 'Guardians of the Galaxy', details: '2014 - Action, Sci-Fi', rating: 4.6, image: '/assets/wp9049747 1.png' },
  { id: 4, title: 'Justice League', details: '2021 - Action, Sci-Fi', rating: 4.2, image: '/assets/wp7653796 1.png' },
  { id: 5, title: 'Wonder Woman', details: '2017 - Action, Fantasy', rating: 4.4, image: '/assets/wp9049770 1.png' },
  { id: 6, title: 'The Batman', details: '2022 - Action, Crime', rating: 4.7, image: '/assets/wp9049779 1.png' },
  { id: 7, title: 'Superman Man of Steel', details: '2013 - Action, Sci-Fi', rating: 4.3, image: '/assets/wp9049781 1.png' },
  { id: 8, title: 'Aquaman', details: '2018 - Action, Fantasy', rating: 4.1, image: '/assets/wp9049788 1.png' },
  { id: 9, title: 'Iron Man', details: '2008 - Action, Sci-Fi', rating: 4.8, image: '/assets/wp9049807 1.png' },
  { id: 10, title: 'Thor Ragnarok', details: '2017 - Action, Comedy', rating: 4.6, image: '/assets/wp4926059 3.png' }
];

const MovieCatalog = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const filteredMovies = catalogMovies.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery) ||
    movie.details.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-[#0f0b15] font-sans flex flex-col">
      <Navbar />
      <div className="flex-grow px-10 md:px-20 pt-32 pb-16">
        <h1 className="text-3xl font-bold text-white mb-2">Movie Catalog</h1>
        {searchQuery && (
          <p className="text-gray-400 mb-8">Showing results for: <span className="text-white">"{searchQuery}"</span></p>
        )}
        
        {filteredMovies.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-2">No movies found</h2>
            <p className="text-gray-400">Try adjusting your search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
            {filteredMovies.map((movie, index) => (
            <motion.div 
              key={movie.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-[#18151f] rounded-xl overflow-hidden hover:scale-[1.05] transition-all duration-300 shadow-lg hover:shadow-[#f83d5a]/20 flex flex-col group relative"
            >
              <Link to={`/movie/${movie.id}`} className="flex-grow flex flex-col relative">
                <div className="h-56 w-full overflow-hidden relative">
                  <img src={movie.image} alt={movie.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="bg-[#f83d5a] text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow relative z-10 bg-[#18151f]">
                  <div>
                    <h3 className="text-white font-semibold text-base leading-tight mb-1 truncate group-hover:text-[#f83d5a] transition-colors">{movie.title}</h3>
                    <p className="text-gray-400 text-xs mb-3">{movie.details}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-white border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full text-xs font-medium transition-colors">Details</span>
                    <div className="flex items-center gap-1 text-gray-300 text-sm">
                      <FaStar className="text-[#f83d5a]" size={12} /> {movie.rating}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MovieCatalog;
