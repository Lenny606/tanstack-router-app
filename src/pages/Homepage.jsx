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
            <Link to="/services/one" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Service One</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Link>
            {/* Card 2 */}
            <Link to="/services/two" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Service Two</h3>
                <p className="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </Link>
            {/* Card 3 */}
            <Link to="/services/three" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Service Three</h3>
                <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation.</p>
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