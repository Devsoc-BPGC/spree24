// BurgerMenu.js

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Burger Icon */}
      <button
        className="fixed top-4 right-4 z-50 p-2 text-white bg-gray-800 rounded-md focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          // Cross Icon when the menu is open
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </motion.svg>
        ) : (
          // Burger Icon when the menu is closed
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </motion.svg>
        )}
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-2/5 p-4 bg-white"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
          >
            {/* Content */}
            <ul className="space-y-4">
              <li>
                <a href="#about-us" className="text-gray-800 hover:text-gray-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-800 hover:text-gray-600">
                  Events
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-800 hover:text-gray-600">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#developers" className="text-gray-800 hover:text-gray-600">
                  Developers
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
