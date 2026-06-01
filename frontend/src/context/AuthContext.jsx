import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // If user logs in
      if (!user && currentUser) {
        toast.success(`Welcome back, ${currentUser.displayName ? currentUser.displayName.split(' ')[0] : 'User'}!`);
      }
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success('Successfully logged out.');
    } catch (error) {
      console.error('Failed to log out', error);
      toast.error('Failed to log out.');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
