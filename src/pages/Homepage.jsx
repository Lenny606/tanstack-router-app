import React from 'react';
import { Link } from '@tanstack/react-router';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Main Image */}
      <section className="relative h-[60vh] bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div 
          className="relative h-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')"
          }}
        >
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
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                    alt="Service One"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
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
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
                    alt="Service Two"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
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
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1460472178825-e5240623afd5"
                    alt="Service Three"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
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
            <p className="text-gray-700 leading-relaxed mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
              officia deserunt mollit anim id est laborum.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg
                hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              Learn More About Us
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage; 