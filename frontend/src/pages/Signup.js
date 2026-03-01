import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../services/api';
import Navbar from '../components/Navbar';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup({ name, email, password });
      navigate('/login');
    } catch (err) {
      setError('Email already registered or invalid data');
    }
  };

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <div className="flex items-center justify-center px-6 py-20">
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl w-full max-w-md">
          <p className="text-yellow-400 font-bold uppercase tracking-widest mb-2 text-sm">Join Us</p>
          <h2 className="text-2xl font-bold mb-6">Create Your Account</h2>
          {error && (
            <div className="bg-red-900 border border-red-700 text-red-400 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-gray-400 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition"
                placeholder="Joyce Benson"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Create Account →
            </button>
          </form>
          <p className="text-center mt-6 text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-yellow-400 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;