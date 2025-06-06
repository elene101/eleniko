import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
    <h1 className="text-2xl font-bold text-indigo-600">MyPortfolio</h1>
    <ul className="flex space-x-6 font-medium text-gray-700">
      <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
      <li><Link to="/about" className="hover:text-indigo-600">About</Link></li>
      <li><Link to="/projects" className="hover:text-indigo-600">Projects</Link></li>
      <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
