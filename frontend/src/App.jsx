import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
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
import CustomCursor from './components/CustomCursor';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

const Home = () => (
  <PageWrapper>
    <div className="bg-[#0f0b15] min-h-screen font-sans">
      <Navbar />
      <Hero />
      <MovieGrid />
      <Trailers />
      <Footer />
    </div>
  </PageWrapper>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
        <Route path="/movies" element={<PageWrapper><Movies /></PageWrapper>} />
        <Route path="/theatres" element={<PageWrapper><Theatres /></PageWrapper>} />
        <Route path="/releases" element={<PageWrapper><Releases /></PageWrapper>} />
        <Route path="/catalog" element={<PageWrapper><MovieCatalog /></PageWrapper>} />
        <Route path="/movie/:id" element={<PageWrapper><MovieDetails /></PageWrapper>} />
        <Route path="/search" element={<PageWrapper><MovieCatalog /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <AuthProvider>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#18151f',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '100px',
          },
          success: {
            iconTheme: {
              primary: '#f83d5a',
              secondary: '#fff',
            },
          },
        }}
      />
      <Router>
        <CustomCursor />
        <AnimatedRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
