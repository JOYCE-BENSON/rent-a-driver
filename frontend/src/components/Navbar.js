import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-yellow-400">
        RentADriver
      </Link>
      <div className="flex gap-6">
        <Link to="/drivers" className="hover:text-yellow-400 transition">
          Find a Driver
        </Link>
        <Link to="/dashboard" className="hover:text-yellow-400 transition">
          My Bookings
        </Link>
        <Link to="/login" className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;