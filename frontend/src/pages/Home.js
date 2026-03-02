import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
  const [serviceType, setServiceType] = useState('Hourly');
  const [pickup, setPickup] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    navigate('/drivers');
  };

  return (
    <div className="bg-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <div
        className="min-h-screen relative overflow-hidden flex items-center"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a0a 50%, #0a0a0a 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-10 py-20 w-full flex flex-col md:flex-row items-center gap-10">

          {/* Left Content */}
          <div className="md:w-1/2 z-10">
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

          {/* Right - Car Image + Booking Form */}
          <div className="md:w-1/2 z-10 flex flex-col gap-6">
            {/* Car Image */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: 'radial-gradient(ellipse, rgba(234,179,8,0.2) 0%, transparent 70%)', filter: 'blur(20px)' }}
              ></div>
              <img
                src={require('../assets/range-rover.jpg')}
                alt="Luxury SUV"
                className="relative z-10 w-full rounded-2xl"
                style={{ filter: 'drop-shadow(0 20px 60px rgba(234,179,8,0.3))' }}
              />
              <div className="absolute top-3 right-3 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-sm z-20">
                Available Now! 🚗
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-gray-900 border border-yellow-400 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 text-yellow-400">Quick Booking</h3>

              {/* Service Type Tabs */}
              <div className="flex gap-2 mb-4">
                {['Hourly', 'Full Day', 'Airport Transfer'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setServiceType(type)}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition ${
                      serviceType === type
                        ? 'bg-yellow-400 text-black'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <form onSubmit={handleBookingSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="📍 Pickup location e.g. Westlands"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition text-sm"
                  />
                </div>
                <div className="flex gap-3 mb-4">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition text-sm"
                  />
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition"
                >
                  Find Available Drivers →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-10 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 font-bold text-center uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="text-3xl font-bold text-center mb-12">Our <span className="text-yellow-400">Services</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 hover:border-yellow-400 transition rounded-2xl overflow-hidden">
              <img src={require('../assets/airport.jpg')} alt="Airport Transfer" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Airport Transfers</h3>
                <p className="text-gray-400 mb-4">Arrive or depart in style. Punctual, seamless and stress-free journeys to and from JKIA.</p>
                <Link to="/drivers" className="w-full block text-center bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-300 transition">
                  Book Now →
                </Link>
              </div>
            </div>
            <div className="bg-gray-900 border border-yellow-400 rounded-2xl overflow-hidden">
              <img src={require('../assets/hourly.jpg')} alt="Hourly Hire" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Hourly Hires</h3>
                <p className="text-gray-400 mb-4">Stay flexible with our hourly driver hire. Perfect for business meetings, errands or city tours.</p>
                <Link to="/drivers" className="w-full block text-center bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-300 transition">
                  Hire Now →
                </Link>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 hover:border-yellow-400 transition rounded-2xl overflow-hidden">
              <img src={require('../assets/fullday.jpg')} alt="Full Day Hire" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Full Day Hires</h3>
                <p className="text-gray-400 mb-4">Book a dedicated driver for the entire day. Ideal for corporate events, VIP guests or leisure tours.</p>
                <Link to="/drivers" className="w-full block text-center bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-300 transition">
                  Reserve Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 px-10 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 font-bold text-center uppercase tracking-widest mb-2">Simple Process</p>
          <h2 className="text-3xl font-bold text-center mb-4">How Does It <span className="text-yellow-400">Work?</span></h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">Booking your driver in Nairobi is simple. Just follow three easy steps to reserve your ride.</p>

          <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-px bg-yellow-400 opacity-30"></div>

            <div className="flex-1 text-center relative">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                📍
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Location</h3>
              <p className="text-gray-400">Select your pickup and drop-off location. Whether it's airport transfers, hotel pickups or city rides.</p>
            </div>

            <div className="flex-1 text-center relative">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                📅
              </div>
              <h3 className="text-xl font-bold mb-2">Pick-up Date</h3>
              <p className="text-gray-400">Set your date and time. Our drivers are punctual and track schedules in real-time.</p>
            </div>

            <div className="flex-1 text-center relative">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                🚗
              </div>
              <h3 className="text-xl font-bold mb-2">Order Your Ride</h3>
              <p className="text-gray-400">Confirm your booking and your driver will be ready at the scheduled time, professional and discreet.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 px-10 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <p className="text-yellow-400 font-bold text-center uppercase tracking-widest mb-2">Reviews</p>
          <h2 className="text-3xl font-bold text-center mb-12">What Our <span className="text-yellow-400">Clients Say</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 hover:border-yellow-400 transition p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg">J</div>
                <div>
                  <p className="font-bold">James Mwangi</p>
                  <p className="text-gray-500 text-sm">CEO, Nairobi Tech</p>
                </div>
              </div>
              <p className="text-gray-400">"Exceptional service! The driver was punctual, professional and made my airport transfer completely stress-free. Highly recommended!"</p>
              <p className="text-yellow-400 mt-3">⭐⭐⭐⭐⭐</p>
            </div>
            <div className="bg-gray-900 border border-yellow-400 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg">A</div>
                <div>
                  <p className="font-bold">Amina Hassan</p>
                  <p className="text-gray-500 text-sm">Events Manager</p>
                </div>
              </div>
              <p className="text-gray-400">"Used RentADriver for our corporate event. All drivers were smartly dressed, on time and extremely professional. Will use again!"</p>
              <p className="text-yellow-400 mt-3">⭐⭐⭐⭐⭐</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 hover:border-yellow-400 transition p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg">D</div>
                <div>
                  <p className="font-bold">David Omondi</p>
                  <p className="text-gray-500 text-sm">Business Traveller</p>
                </div>
              </div>
              <p className="text-gray-400">"Best driver hire service in Nairobi. The booking process is seamless and the drivers are top notch. My go-to for all travel needs."</p>
              <p className="text-yellow-400 mt-3">⭐⭐⭐⭐⭐</p>
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
      <div className="bg-gray-950 border-t border-gray-800 py-12 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-yellow-400 font-bold text-2xl mb-4">🚗 RentADriver</div>
            <p className="text-gray-500 text-sm">Nairobi's premier driver hire service. Professional, reliable and always on time.</p>
            <div className="flex gap-4 mt-4">
              <span className="text-gray-500 hover:text-yellow-400 cursor-pointer text-xl">📘</span>
              <span className="text-gray-500 hover:text-yellow-400 cursor-pointer text-xl">📷</span>
              <span className="text-gray-500 hover:text-yellow-400 cursor-pointer text-xl">🐦</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-yellow-400 cursor-pointer">Airport Transfers</li>
              <li className="hover:text-yellow-400 cursor-pointer">Hourly Hire</li>
              <li className="hover:text-yellow-400 cursor-pointer">Full Day Hire</li>
              <li className="hover:text-yellow-400 cursor-pointer">Corporate Travel</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
              <li className="hover:text-yellow-400 cursor-pointer">Our Drivers</li>
              <li className="hover:text-yellow-400 cursor-pointer">Blog</li>
              <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>📍 Nairobi, Kenya</li>
              <li>📞 +254 700 000 000</li>
              <li>✉️ info@rentadriver.co.ke</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © 2026 RentADriver. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Home;