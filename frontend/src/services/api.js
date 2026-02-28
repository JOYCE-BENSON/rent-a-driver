import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000',
});

// Auth
export const signup = (data) => API.post('/auth/signup', data);
export const login = (data) => API.post('/auth/login', data);

// Drivers
export const getAllDrivers = () => API.get('/drivers/');
export const getDriver = (id) => API.get(`/drivers/${id}`);

// Bookings
export const createBooking = (data, userId) => API.post(`/bookings/?user_id=${userId}`, data);
export const getMyBookings = (userId) => API.get(`/bookings/me?user_id=${userId}`);