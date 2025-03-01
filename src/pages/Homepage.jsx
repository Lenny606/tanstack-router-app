import React from 'react';
import { Link } from '@tanstack/react-router';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Main Image */}
      <section className="relative h-[60vh] bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-xl">Discover amazing possibilities</p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link 
              to="/services/one" 
              className="block transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-2xl transition-all duration-300 group">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  Service One
                </h3>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="mt-4 flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link 
              to="/services/two" 
              className="block transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-2xl transition-all duration-300 group">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  Service Two
                </h3>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                  Sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className="mt-4 flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link 
              to="/services/three" 
              className="block transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-2xl transition-all duration-300 group">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  Service Three
                </h3>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className="mt-4 flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Information Text Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage; 