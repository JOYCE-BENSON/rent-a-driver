import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/');
  };

  return (
    <nav className="bg-gray-950 border-b border-gray-800 px-10 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-yellow-400 text-2xl">🚗</span>
        <span className="text-yellow-400 font-extrabold text-xl tracking-wide">RentADriver</span>
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/drivers" className="text-gray-300 hover:text-yellow-400 transition font-medium">
          Find a Driver
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="text-gray-300 hover:text-yellow-400 transition font-medium">
              My Bookings
            </Link>
            <button
              onClick={handleLogout}
              className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-300 hover:text-yellow-400 transition font-medium">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;