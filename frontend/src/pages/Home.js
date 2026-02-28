import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Your Personal Driver, <span className="text-yellow-400">On Demand</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Book a professional driver to drive your car. Safe, reliable, and affordable.
        </p>
        <Link
          to="/drivers"
          className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-300 transition"
        >
          Find a Driver
        </Link>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">1. Browse Drivers</h3>
            <p className="text-gray-600">Browse our verified professional drivers and choose the right one for you.</p>
          </div>
          <div className="p-6">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-xl font-bold mb-2">2. Book Instantly</h3>
            <p className="text-gray-600">Select your date, time, location and book in seconds.</p>
          </div>
          <div className="p-6">
            <div className="text-5xl mb-4">🚗</div>
            <h3 className="text-xl font-bold mb-2">3. Get Driven</h3>
            <p className="text-gray-600">Your driver comes to you and drives your car wherever you need to go.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;