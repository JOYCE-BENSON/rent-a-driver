import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllDrivers } from '../services/api';
import Navbar from '../components/Navbar';

function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAllDrivers()
      .then((response) => {
        setDrivers(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-yellow-400 font-bold uppercase tracking-widest mb-2">Our Team</p>
        <h1 className="text-3xl font-bold mb-2">Available Drivers</h1>
        <p className="text-gray-400 mb-8">All our drivers are verified, professional and highly rated</p>
        {loading ? (
          <p className="text-center text-gray-500">Loading drivers...</p>
        ) : drivers.length === 0 ? (
          <p className="text-center text-gray-500">No drivers available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drivers.map((driver) => (
              <div key={driver.id} className="bg-gray-900 border border-gray-800 hover:border-yellow-400 transition rounded-xl p-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-black mb-4">
                  {driver.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-1">{driver.name}</h3>
                <p className="text-gray-400 mb-1">⭐ {driver.rating} rating</p>
                <p className="text-gray-400 mb-1">🕒 {driver.experience} years experience</p>
                <p className="text-yellow-400 font-bold mb-4">KSh {driver.price_per_hour}/hr</p>
                <button
                  onClick={() => navigate(`/book/${driver.id}`)}
                  className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-300 transition"
                >
                  Book Driver →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Drivers;