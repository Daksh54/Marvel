import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0f0b15] font-sans flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-24 pb-16 px-4">
          <h1 className="text-2xl font-bold text-white">Please log in to view your profile.</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0b15] font-sans flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center pt-24 pb-16 px-4">
        <div className="bg-[#18151f] p-10 rounded-2xl border border-white/10 max-w-md w-full text-center">
          {user.photoURL ? (
            <img src={user.photoURL} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#f83d5a]" />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-600 mx-auto mb-4 flex items-center justify-center text-3xl text-white font-bold border-4 border-[#f83d5a]">
              {user.email?.[0].toUpperCase()}
            </div>
          )}
          <h2 className="text-2xl font-bold text-white mb-2">{user.displayName || 'User'}</h2>
          <p className="text-gray-400 mb-8">{user.email}</p>
          
          <button 
            onClick={handleLogout}
            className="w-full bg-[#f83d5a] hover:bg-[#d6344d] text-white font-medium py-3 px-4 rounded-full transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
