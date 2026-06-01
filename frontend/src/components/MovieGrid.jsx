import React from 'react';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Alita Battle Angel 4k 2019 Movies', details: '2018 - Action, Adventure - 2h 8m', rating: 4.5, image: '/assets/wp4926059 1.png' },
  { id: 2, title: 'Avengers Endgame', details: '2019 - Action, Sci-Fi - 3h 1m', rating: 4.8, image: '/assets/wp4280803 1.png' },
  { id: 10, title: 'Thor Ragnarok', details: '2017 - Action, Comedy - 2h 10m', rating: 4.6, image: '/assets/wp4926059 3.png' },
  { id: 4, title: 'Justice League', details: '2021 - Action, Sci-Fi - 4h 2m', rating: 4.2, image: '/assets/wp7653796 1.png' },
  { id: 5, title: 'Wonder Woman', details: '2017 - Action, Fantasy - 2h 21m', rating: 4.4, image: '/assets/wp9049770 1.png' },
  { id: 6, title: 'The Batman', details: '2022 - Action, Crime - 2h 56m', rating: 4.7, image: '/assets/wp9049779 1.png' },
  { id: 7, title: 'Superman Man of Steel', details: '2013 - Action, Sci-Fi - 2h 23m', rating: 4.3, image: '/assets/wp9049781 1.png' },
  { id: 8, title: 'Aquaman', details: '2018 - Action, Fantasy - 2h 23m', rating: 4.1, image: '/assets/wp9049788 1.png' },
];

const MovieCard = ({ movie, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#18151f] rounded-xl overflow-hidden hover:scale-[1.05] transition-all duration-300 flex flex-col group shadow-lg hover:shadow-[#f83d5a]/20"
    >
      <Link to={`/movie/${movie.id}`} className="flex-grow flex flex-col relative">
        <div className="h-48 w-full overflow-hidden relative">
          <img src={movie.image} alt={movie.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
            <span className="bg-[#f83d5a] text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow relative z-10 bg-[#18151f]">
          <h3 className="text-white font-semibold text-lg leading-tight mb-2 truncate group-hover:text-[#f83d5a] transition-colors">{movie.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{movie.details}</p>
          <div className="flex items-center justify-between mt-auto">
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm px-5 py-2 rounded-full font-medium transition-colors" onClick={(e) => { e.preventDefault(); }}>
              Buy Ticket
            </button>
            <div className="flex items-center gap-1 text-gray-300">
              <FaStar className="text-[#f83d5a]" size={14} /> {movie.rating}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const MovieGrid = () => {
  return (
    <section className="px-10 md:px-20 py-16 bg-[#0f0b15]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-white text-2xl font-bold">Now Showing</h2>
        <Link to="/catalog" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm transition-colors">
          View All <FaArrowRight size={12} />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/catalog" className="bg-[#f83d5a] hover:bg-[#d6344d] text-white px-8 py-3 rounded-full font-medium transition-colors">
          Show more
        </Link>
      </div>
    </section>
  );
};

export default MovieGrid;
