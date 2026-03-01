import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyBookings } from '../services/api';
import Navbar from '../components/Navbar';

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/login');
      return;
    }
    getMyBookings(userId)
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [navigate]);

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-yellow-400 font-bold uppercase tracking-widest mb-2">Welcome Back</p>
        <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
        {loading ? (
          <p className="text-center text-gray-500">Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl mb-4">No bookings yet!</p>
            <button
              onClick={() => navigate('/drivers')}
              className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Find a Driver
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-gray-900 border border-gray-800 hover:border-yellow-400 transition rounded-xl p-6 flex justify-between items-center">
                <div>
                  <p className="font-bold text-lg text-yellow-400 mb-2">Booking #{booking.id}</p>
                  <p className="text-gray-400">📅 {booking.date}</p>
                  <p className="text-gray-400">📍 {booking.location}</p>
                  <p className="text-gray-400">🕒 {booking.hours} hours</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-2xl text-white mb-2">KSh {booking.total_price}</p>
                  <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    booking.status === 'confirmed' ? 'bg-green-900 text-green-400' :
                    booking.status === 'cancelled' ? 'bg-red-900 text-red-400' :
                    'bg-yellow-900 text-yellow-400'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;