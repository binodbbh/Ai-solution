import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">Home</Link>
              <Link to="/about" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">About</Link>
              <Link to="/virtual-assistant" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">Virtual Assistant</Link>
              <Link to="/gallery" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">Gallery</Link>
              <Link to="/events" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">Events</Link>
              <Link to="/contact" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">Contact</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500">Home</Link>
            <Link to="/about" className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500">About</Link>
            <Link to="/virtual-assistant" className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500">Virtual Assistant</Link>
            <Link to="/gallery" className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500">Gallery</Link>
            <Link to="/events" className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500">Events</Link>
            <Link to="/contact" className="text-white block px-3 py-2 rounded-md hover:bg-indigo-500">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;