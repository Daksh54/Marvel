import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieGrid from './components/MovieGrid';
import Trailers from './components/Trailers';
import Footer from './components/Footer';
import Login from './pages/Login';
import Profile from './pages/Profile';
import MovieCatalog from './pages/MovieCatalog';
import MovieDetails from './pages/MovieDetails';
import { Movies, Theatres, Releases } from './pages/GenericPages';
import { AuthProvider } from './context/AuthContext';

const Home = () => (
  <div className="bg-[#0f0b15] min-h-screen font-sans">
    <Navbar />
    <Hero />
    <MovieGrid />
    <Trailers />
    <Footer />
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/theatres" element={<Theatres />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/catalog" element={<MovieCatalog />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search" element={<MovieCatalog />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
