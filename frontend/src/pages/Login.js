import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import Navbar from '../components/Navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('userId', 1);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <div className="flex items-center justify-center px-6 py-20">
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl w-full max-w-md">
          <p className="text-yellow-400 font-bold uppercase tracking-widest mb-2 text-sm">Welcome Back</p>
          <h2 className="text-2xl font-bold mb-6">Login to Your Account</h2>
          {error && (
            <div className="bg-red-900 border border-red-700 text-red-400 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleLogin}>
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
              Login →
            </button>
          </form>
          <p className="text-center mt-6 text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="text-yellow-400 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;