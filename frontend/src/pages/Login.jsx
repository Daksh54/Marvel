import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const { loginWithGoogle, loading, error } = useAuth();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/profile');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-[#0f0b15] font-sans flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center pt-24 pb-16 px-4">
        <div className="bg-[#18151f] p-10 rounded-2xl border border-white/10 max-w-md w-full text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400 mb-8">Sign in to continue to QuickShow</p>
          
          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

          <button 
            onClick={loginWithGoogle}
            disabled={loading}
            className="w-full bg-white hover:bg-gray-100 text-black font-medium py-3 px-4 rounded-full flex items-center justify-center gap-3 transition-colors disabled:opacity-50"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
            {loading ? 'Signing in...' : 'Continue with Google'}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
