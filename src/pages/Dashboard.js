import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function Dashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setEmail(user.email) : navigate('/login');
    });
  }, [navigate]);
  const onSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <div className="text-black text-3xl text-center my-32">
      siemano from dashboard {email}{' '}
      <button
        onClick={onSignOut}
        className="text-lg mt-8 py-6 px-12 text-white bg-primary hover:bg-primary/80 transition rounded"
      >
        Sign out
      </button>
    </div>
  );
}
