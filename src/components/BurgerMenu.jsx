import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Icon } from '@chakra-ui/react';
import './menu.css'
const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-4 right-4">
      {/* Burger Icon */}
      <Button
        className="fixed top-4 z-50 p-2 text-white bg-gray-800 rounded-md focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          // Cross Icon when the menu is open
          <motion.div>
            <Icon
              as={motion.svg}
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
            </Icon>
          </motion.div>
        ) : (
          // Burger Icon when the menu is closed
          <motion.div>
            <Icon
              as={motion.svg}
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
            </Icon>
          </motion.div>
        )}
      </Button>

      {/* Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-1/3 h-full p-4 bg-black flex justify-start items-center"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
          >
            {/* Content */}
            <ul className="space-y-10 text-center p-8 text-4xl md:text-7xl font-Inter text-white">
              <li>
                <a
                  href="#about-us"
                  className="text-white-800 hover:text-white-600 relative"
                >
                  About Us
                  <span className="underline"></span>
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-white-800 hover:text-white-600 relative"
                >
                  Events
                  <span className="underline"></span>
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white-800 hover:text-white-600 relative"
                >
                  Gallery
                  <span className="underline"></span>
                </a>
              </li>
              <li>
                <a
                  href="#developers"
                  className="text-white-800 hover:text-white-600 relative"
                >
                  Developers
                  <span className="underline"></span>
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
