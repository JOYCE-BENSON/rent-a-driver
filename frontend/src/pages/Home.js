import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <div
        className="min-h-screen relative overflow-hidden flex items-center"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a0a 50%, #0a0a0a 100%)',
        }}
      >
        {/* Gold glow background effect */}
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(234,179,8,0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-10 py-20 w-full flex flex-col md:flex-row items-center">

          {/* Left Content */}
          <div className="md:w-1/2 z-10 mb-10 md:mb-0">
            <div className="inline-block bg-yellow-400 text-black text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              🏆 Nairobi's #1 Driver Service
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Your Car. <br />
              <span className="text-yellow-400">Our Driver.</span> <br />
              Your Freedom.
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
              Professional, verified drivers at your fingertips. Whether it's a business meeting, airport run, or a night out — we've got the wheel.
            </p>
            <div className="flex gap-4 flex-wrap mb-10">
              <Link
                to="/drivers"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition shadow-lg"
              >
                Book a Driver →
              </Link>
              <Link
                to="/signup"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 hover:text-black transition"
              >
                Get Started
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400">500+</p>
                <p className="text-gray-500 text-sm">Verified Drivers</p>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400">10K+</p>
                <p className="text-gray-500 text-sm">Happy Customers</p>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400">4.9★</p>
                <p className="text-gray-500 text-sm">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right - White Range Rover integrated into hero */}
          <div className="md:w-1/2 relative flex justify-center items-center z-10">
            {/* Gold glow behind car */}
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse, rgba(234,179,8,0.2) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            ></div>

            {/* Available badge */}
            <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-sm shadow-lg z-20">
              Available Now! 🚗
            </div>

            {/* Car image */}
            <img
              src={require('../assets/range-rover.jpg')}
              className="relative z-10 w-full max-w-2xl rounded-2xl shadow-2xl"
              style={{
                filter: 'drop-shadow(0 20px 60px rgba(234,179,8,0.3))',
                transform: 'perspective(1000px) rotateY(-5deg)',
              }}
            />

            {/* Live indicator */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-yellow-400 px-6 py-3 rounded-full flex items-center gap-3 z-20 whitespace-nowrap">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-sm font-semibold text-yellow-400">Drivers available near you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="border-t border-gray-800 py-16 px-10 bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl border border-gray-800 hover:border-yellow-400 transition">
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="text-xl font-bold mb-2">Airport Transfers</h3>
            <p className="text-gray-400">Reliable pickup and drop-off at JKIA and Wilson Airport.</p>
          </div>
          <div className="p-6 rounded-2xl border border-yellow-400">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-2">Corporate Travel</h3>
            <p className="text-gray-400">Professional drivers for your business meetings and events.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-800 hover:border-yellow-400 transition">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-xl font-bold mb-2">Events & Occasions</h3>
            <p className="text-gray-400">Weddings, parties, nights out — arrive in style.</p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 px-10 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 font-bold text-center uppercase tracking-widest mb-2">Simple Process</p>
          <h2 className="text-3xl font-bold text-center mb-12">
            How It <span className="text-yellow-400">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Browse Drivers</h3>
              <p className="text-gray-400">Browse verified professional drivers, check their ratings and experience.</p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-yellow-400" style={{ boxShadow: '0 0 30px rgba(234,179,8,0.1)' }}>
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Book Instantly</h3>
              <p className="text-gray-400">Select your date, time and location. Confirm your booking in seconds.</p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Sit Back & Relax</h3>
              <p className="text-gray-400">Your driver comes to you and drives your car wherever you need to go.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 py-16 px-10 text-center">
        <h2 className="text-4xl font-extrabold text-black mb-4">Ready to Ride in Style?</h2>
        <p className="text-gray-800 mb-8 text-lg">Join thousands of satisfied customers across Nairobi</p>
        <Link
          to="/signup"
          className="bg-black text-yellow-400 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-900 transition shadow-lg"
        >
          Get Started Today →
        </Link>
      </div>

      {/* Footer */}
      <div className="bg-gray-950 border-t border-gray-800 py-10 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-yellow-400 font-bold text-2xl mb-4 md:mb-0">🚗 RentADriver</div>
          <p className="text-gray-500 text-sm">© 2026 RentADriver. All rights reserved. Nairobi, Kenya.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;