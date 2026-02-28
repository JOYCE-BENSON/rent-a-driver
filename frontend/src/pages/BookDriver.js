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
      await createBooking({ driver_id: parseInt(driverId), date, hours: parseInt(hours), location }, userId);
      setSuccess(true);
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (err) {
      setError('Booking failed. Please try again.');
    }
  };

  if (!driver) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Book {driver.name}</h1>
        <p className="text-gray-600 mb-8">KSh {driver.price_per_hour}/hr · {driver.experience} years experience</p>

        {success && (
          <div className="bg-green-100 text-green-700 p-4 rounded mb-6">
            Booking successful! Redirecting to dashboard...
          </div>
        )}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleBooking} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Hours</label>
            <input
              type="number"
              min="1"
              max="12"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Pickup Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-yellow-400"
              placeholder="e.g. Nairobi CBD"
              required
            />
          </div>
          <div className="bg-gray-50 p-4 rounded mb-6">
            <p className="font-semibold">Total: KSh {driver.price_per_hour * hours}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-300 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookDriver;