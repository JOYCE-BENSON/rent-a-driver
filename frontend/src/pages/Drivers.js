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
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Available Drivers</h1>
        {loading ? (
          <p className="text-center text-gray-500">Loading drivers...</p>
        ) : drivers.length === 0 ? (
          <p className="text-center text-gray-500">No drivers available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drivers.map((driver) => (
              <div key={driver.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-black mb-4">
                  {driver.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-1">{driver.name}</h3>
                <p className="text-gray-600 mb-1">⭐ {driver.rating} rating</p>
                <p className="text-gray-600 mb-1">🕒 {driver.experience} years experience</p>
                <p className="text-gray-600 mb-4">💰 KSh {driver.price_per_hour}/hr</p>
                <button
                  onClick={() => navigate(`/book/${driver.id}`)}
                  className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-300 transition"
                >
                  Book Driver
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