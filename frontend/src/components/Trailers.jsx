import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const trailerThumbnails = [
  '/assets/wp7653796 1.png',
  '/assets/wp4280803 1.png',
  '/assets/wp4926059 1.png',
  '/assets/wp9049781 1.png',
  '/assets/wp9049779 1.png',
];

const Trailers = () => {
  return (
    <section className="px-10 md:px-20 py-16 bg-[#0f0b15]">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-white text-2xl font-bold mb-8"
      >
        Trailers
      </motion.h2>
      
      <div className="flex flex-col gap-6 max-w-5xl mx-auto">
        {/* Main Trailer */}
        <motion.a 
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-2xl overflow-hidden group cursor-pointer border border-white/5 shadow-2xl block"
        >
          <img 
            src="/assets/wp9049747 1.png" 
            alt="Main Trailer" 
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-black/20 backdrop-blur-sm"
            >
              <FaPlay className="text-white ml-1" size={20} />
            </motion.div>
          </div>
        </motion.a>

        {/* Thumbnails */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {trailerThumbnails.map((thumb, index) => (
            <motion.a 
              href={`https://www.youtube.com/results?search_query=trailer+${index}`}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              className="relative w-40 h-24 rounded-lg overflow-hidden group cursor-pointer block"
            >
              <img src={thumb} alt={`Trailer ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <FaPlay className="text-white ml-0.5" size={10} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Trailers;
