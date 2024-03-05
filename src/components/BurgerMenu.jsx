import { motion, AnimatePresence } from "framer-motion";
import { Button, Icon } from "@chakra-ui/react";
import navLogo from "../assets/navbar.png";
import "./menu.css";
import PropTypes from "prop-types";

const BurgerMenu = ({ isMenuOpen, setMenuOpen }) => {
  BurgerMenu.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired,
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="fixed top-4 right-4 z-50">
      {/* Burger Icon */}
      <Button
        className="fixed right-0 top-4 z-50 p-2 text-white bg-gray-800 rounded-md focus:outline-none"
        style={{ backgroundColor: "transparent", backgroundSize: "cover" }}
        onClick={toggleMenu}
        backgroundImage={navLogo}
        _hover={{}}
        borderRadius={0}
      >
        {isMenuOpen ? (
          // Cross Icon when the menu is open
          <motion.div>
            <Icon as={motion.svg} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </Icon>
          </motion.div>
        ) : (
          // Burger Icon when the menu is closed
          <motion.div style={{ right: 0 }}>
            <Icon as={motion.svg} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </Icon>
          </motion.div>
        )}
      </Button>
    </div>
     {/* Modal */}
     <div className="fixed top-20 right-1 z-50">     <AnimatePresence>
     {isMenuOpen && (
       <motion.div
         className="inset-y-0 right-0 w-1/3 h-4/5 p-1 flex justify-start items-center pt-12"
         initial={{ x: "100%" }}
         animate={{ x: 0, transition: { delay: 2, duration: 0.5 } }}
         exit={{ x: "100%", transition: { duration: 0.5, delay: 1 } }}
       >
         {/* Content */}
         <ul className="space-y-5 sm:space-y-10 md:space-y-10 text-center p-4 text-xl sm:text-4xl md:text-4xl font-Inter text-white pt-12 font-bold">
           <motion.li initial={{ x: 20, opacity: 0 }} exit={{ x: 20, opacity: 0, transition: { duration: 0.3 } }} animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 2.5 } }}>
             <a href="#about-us" className="text-white-800 hover:text-white-600 relative">
               ABOUT US
               <span className="underline"></span>
             </a>
           </motion.li>
           <motion.li initial={{ opacity: 0, x: 20 }} exit={{ x: 20, opacity: 0, transition: { duration: 0.3, delay: 0.1 } }} animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 3 } }}>
             <a href="#events" className="text-white-800 hover:text-white-600 relative">
               EVENTS
               <span className="underline"></span>
             </a>
           </motion.li>
           <motion.li
             initial={{ opacity: 0, x: 20 }}
             exit={{ x: 20, opacity: 0, transition: { duration: 0.3, delay: 0.2 } }}
             animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 3.5 } }}
           >
             <a href="#gallery" className="text-white-800 hover:text-white-600 relative">
               GALLERY
               <span className="underline"></span>
             </a>
           </motion.li>
           <motion.li initial={{ opacity: 0, x: 20 }} exit={{ x: 20, opacity: 0, transition: { duration: 0.3, delay: 0.3 } }} animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 4 } }}>
             <a href="#developers" className="text-white-800 hover:text-white-600 relative">
               DEVELOPERS
               <span className="underline"></span>
             </a>
           </motion.li>
         </ul>
       </motion.div>
     )}
   </AnimatePresence>
   </div>

   </>
  );
};

export default BurgerMenu;
