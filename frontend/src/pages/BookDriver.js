import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDriver, createBooking } from '../services/api';
import Navbar from '../components/Navbar';

function BookDriver() {
  const { driverId } = useParams();
  const navigate = useNavigate();
  const [driver, setDriver] = useState(null);
  const [date, setDate] = useState('');
  const [hours, setHours] = useState(1);
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getDriver(driverId).then((response) => setDriver(response.data));
  }, [driverId]);

  const handleBooking = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/login');
      return;
    }
    try {
      await createBooking(
        { driver_id: parseInt(driverId), date, hours: parseInt(hours), location },
        userId
      );
      setSuccess(true);
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (err) {
      setError('Booking failed. Please try again.');
    }
  };

  if (!driver) return (
    <div className="bg-gray-950 min-h-screen flex items-center justify-center">
      <p className="text-yellow-400 text-xl">Loading...</p>
    </div>
  );

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-12">
        <p className="text-yellow-400 font-bold uppercase tracking-widest mb-2 text-sm">Book a Driver</p>
        <h1 className="text-3xl font-bold mb-1">{driver.name}</h1>
        <p className="text-gray-400 mb-8">
          ⭐ {driver.rating} rating · 🕒 {driver.experience} years experience · 
          <span className="text-yellow-400 font-bold"> KSh {driver.price_per_hour}/hr</span>
        </p>

        {success && (
          <div className="bg-green-900 border border-green-700 text-green-400 p-4 rounded-lg mb-6">
            🎉 Booking successful! Redirecting to dashboard...
          </div>
        )}
        {error && (
          <div className="bg-red-900 border border-red-700 text-red-400 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleBooking} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <div className="mb-4">
            <label className="block text-gray-400 font-semibold mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 font-semibold mb-2">Number of Hours</label>
            <input
              type="number"
              min="1"
              max="12"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 font-semibold mb-2">Pickup Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition"
              placeholder="e.g. Nairobi CBD, Westlands"
              required
            />
          </div>

          {/* Total price calculator */}
          <div className="bg-gray-800 border border-yellow-400 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center">
              <p className="text-gray-400">KSh {driver.price_per_hour} × {hours} hours</p>
              <p className="text-yellow-400 font-bold text-xl">KSh {driver.price_per_hour * hours}</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Confirm Booking →
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookDriver;