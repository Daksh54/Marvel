import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GenericPage = ({ title }) => {
  return (
    <div className="min-h-screen bg-[#0f0b15] font-sans flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center pt-24 pb-16 px-4">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
      </div>
      <Footer />
    </div>
  );
};

export const Movies = () => <GenericPage title="Movies Page" />;
export const Theatres = () => <GenericPage title="Theatres Page" />;
export const Releases = () => <GenericPage title="Releases Page" />;
