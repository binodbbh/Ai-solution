import React from 'react';
import { Link } from 'react-router-dom';
import { CircuitBoard } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link to="/" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Home</span>
            <CircuitBoard className="h-8 w-8" />
          </Link>
        </div>
        <div className="mt-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link to="/about" className="text-gray-400 hover:text-gray-300">About</Link>
            <Link to="/contact" className="text-gray-400 hover:text-gray-300">Contact</Link>
            <Link to="/virtual-assistant" className="text-gray-400 hover:text-gray-300">Virtual Assistant</Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} AI-Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;