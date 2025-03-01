import React from 'react';

const ServiceOne = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Service One</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 mb-6">
            Detailed information about Service One. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Feature one of Service One</li>
            <li>Feature two of Service One</li>
            <li>Feature three of Service One</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne; 