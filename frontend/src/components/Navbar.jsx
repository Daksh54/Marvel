import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useAuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 text-white font-sans">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="text-[#f83d5a]">Q</span>uick<span className="text-white font-light">Show</span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8 bg-black/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
        <Link to="/" className="text-sm hover:text-[#f83d5a] transition-colors">Home</Link>
        <Link to="/movies" className="text-sm hover:text-[#f83d5a] transition-colors">Movies</Link>
        <Link to="/theatres" className="text-sm hover:text-[#f83d5a] transition-colors">Theatres</Link>
        <Link to="/releases" className="text-sm hover:text-[#f83d5a] transition-colors">Releases</Link>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/search" className="text-white hover:text-[#f83d5a] transition-colors">
          <FaSearch size={18} />
        </Link>
        {user ? (
          <Link to="/profile" className="flex items-center gap-2 bg-black/40 hover:bg-black/60 px-4 py-2 rounded-full border border-white/10 transition-colors">
            {user.photoURL ? (
              <img src={user.photoURL} alt="Avatar" className="w-6 h-6 rounded-full" />
            ) : (
              <div className="w-6 h-6 rounded-full bg-[#f83d5a] flex items-center justify-center text-xs font-bold text-white">
                {user.email?.[0].toUpperCase()}
              </div>
            )}
            <span className="text-sm font-medium">{user.displayName ? user.displayName.split(' ')[0] : 'Profile'}</span>
          </Link>
        ) : (
          <Link to="/login" className="bg-[#f83d5a] hover:bg-[#d6344d] text-white px-6 py-2 rounded-full font-medium transition-colors">
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
