import React from 'react';
import { Link } from '@tanstack/react-router';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
            >
              Logo
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600 transition-colors">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link 
                  to="/services/one" 
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                >
                  Service One
                </Link>
                <Link 
                  to="/services/two" 
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                >
                  Service Two
                </Link>
                <Link 
                  to="/services/three" 
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                >
                  Service Three
                </Link>
              </div>
            </div>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 