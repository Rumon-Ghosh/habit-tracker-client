import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)


  const passwordRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }


  const googleLogIn = () => {
   return signInWithPopup(auth, googleProvider)
  }

  const passwordLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const signOutUser = () => {
    return signOut(auth)
  }

  
  const authInfo = {
    user,
    loading,
    setUser,
    setLoading,
    googleLogIn,
    signOutUser,
    passwordRegister,
    passwordLogIn
  }

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;