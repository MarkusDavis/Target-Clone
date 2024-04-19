import React from 'react';

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-8 mb-8">
            <a href="#" className="text-white hover:text-gray-300">
              Terms
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              CA Supply Chain
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Privacy
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              CA Privacy Rights
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Your Privacy Choices
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Interest Based Ads
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Health Privacy Policy
            </a>
          </div>
          <p className="text-center">&copy; 2024 Target Brands, Inc.</p>
        </div>
      </footer>
    );
  }