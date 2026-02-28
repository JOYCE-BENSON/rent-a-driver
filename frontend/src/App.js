import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold text-center mt-20">Welcome to Rent-A-Driver</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;