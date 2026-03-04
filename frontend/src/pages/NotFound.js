import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function NotFound() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
        <p className="text-yellow-400 font-bold uppercase tracking-widest mb-4">Error 404</p>
        <h1 className="text-8xl font-extrabold text-yellow-400 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md">
          Looks like this page took a wrong turn! Let's get you back on the road.
        </p>
        <Link
          to="/"
          className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition"
        >
          Back to Home →
        </Link>
      </div>
    </div>
  );
}

export default NotFound;