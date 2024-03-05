import "./index.css";
import BurgerMenu from "./components/BurgerMenu";
import { Button, ChakraProvider, Flex, Show, Text } from "@chakra-ui/react";
import Player from "./assets/Player.png";
import fireball from "./assets/fireball2.png";
import left from "./assets/Left Side.png";
import right from "./assets/Right Side.png";
import bg from "./assets/background.png";
import phonebg from "./assets/phone_bg2.jpeg";
import insta from "./assets/insta.png";
import { motion, AnimatePresence } from "framer-motion";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Register from "./pages/Register.jsx";
import { useState } from "react";

function HomePage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleRegister = () => {};
  return (
    <ChakraProvider>
      <Flex
        height={"100vh"}
        backgroundPosition={{
          base: "right bottom",
          sm: "20% bottom",
          md: "20% bottom",
          lg: "left bottom",
        }}
        bgSize={"cover"}
        bgImage={{ base: phonebg, sm: bg }}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={"column"}
        overflowX={"hidden"}
        position={"relative"}
      >
        <Flex width={"100%"} height={"15%"} justifyContent={"space-between"}>
          <motion.img
            src={fireball}
            style={{ margin: "1%", height: "50%" }}
            initial={{ opacity: 0, rotate: -90, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            style={{
              display: "flex",
              width: "10.7%",
              justifyContent: "space-between",
            }}
            transition={{ delay: 4, duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Show above="sm">
              <Button
                as={Link}
                to="/register"
                fontSize="98.5%"
                color="white"
                border="3px solid white"
                padding="0% 50%"
                background="rgba(0, 0, 0, 1)"
                cursor="pointer"
                width="8rem"
                marginTop="20%"
                marginLeft="-12rem"
                borderRadius="9999px"
                letterSpacing="0.3rem"
                onClick={handleRegister}
              >
                REGISTER
              </Button>
            </Show>
          </motion.div>
          <BurgerMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        </Flex>
        <Flex
          flexDirection={"column"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <AnimatePresence>
            {!isMenuOpen && (
              <motion.img
                src={left}
                className="w-[30%] h-[40%] sm:h-auto sm:w-[33%] lg:w-[28%]"
                style={{ position: "absolute", left: "2%" }} //width:28%
                initial={{ opacity: 0, x: -50 }}
                exit={{ opacity: 0, x: -50, transition: { duration: 1 } }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 3, duration: 1 },
                }}
              />
            )}
          </AnimatePresence>
          <motion.img
            src={Player}
            className="w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 ml-[-55%] sm:ml-[-45%] md:ml-[-35%] lg:ml-[-25%]"
            style={{
              // width: "35%",
              // marginLeft: "-25%",
              position: "absolute",
              zIndex: 2,
            }}
            initial={{ opacity: 0, x: 0, left: "auto" }}
            // exit={{ x: -100 }}
            animate={
              !isMenuOpen
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 2 },
                    left: "auto",
                  }
                : {
                    left: "20%",
                    opacity: 1,
                    transition: { delay: 2, duration: 0.5 },
                  }
            }
            // transition={{ duration: 2 }}
          />
          <AnimatePresence>
            {!isMenuOpen && (
              <motion.img
                src={right}
                className="w-[30%] h-[40%] sm:h-auto sm:w-[23%] md:w-[19%] lg:w-[17%]"
                style={{
                  position: "absolute",
                  right: 0,
                  // width: "17%",
                  marginTop: "2%",
                }}
                initial={{ opacity: 0, x: 50 }}
                exit={{ opacity: 0, x: 50, transition: { duration: 1 } }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 3, duration: 1 },
                }}
              />
            )}
          </AnimatePresence>

          <Flex flexDirection={"column"} width={"100%"} alignItems={"center"}>
            <AnimatePresence>
              {!isMenuOpen && (
                <>
                  <motion.div
                    style={{
                      width: "80%",
                      justifyContent: "space-between",
                      color: "white",
                      // marginBottom: "-2%",
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                      hidden: { opacity: 1 },
                      visible: {
                        opacity: 1,
                        transition: {
                          delayChildren: 1.5,
                          staggerChildren: 0.3,
                        },
                      },
                      exit: {
                        transition: {
                          delayChildren: 1,
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    {Array.from("SPREE")
                      .reverse()
                      .map((item, index) => {
                        return (
                          <motion.p
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                            key={index}
                            style={{
                              fontWeight: 700,
                              // fontSize: "9rem",
                              fontFamily: "Inter",
                            }}
                            variants={{
                              hidden: { opacity: 0, x: -30 },
                              visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                  duration: 0.5,
                                  type: "spring",
                                  stiffness: 100,
                                },
                              },
                              exit: { opacity: 0, x: -30 },
                            }}
                          >
                            {item}
                          </motion.p>
                        );
                      })}
                  </motion.div>
                  <motion.div
                    style={{
                      display: "flex",
                      width: "80%",
                      textAlign: "right",
                      zIndex: 1,
                      justifyContent: "end",
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                      hidden: { opacity: 1 },
                      visible: {
                        opacity: 1,
                        transition: {
                          delayChildren: 1.5,
                          staggerChildren: 0.1,
                        },
                      },
                      exit: {
                        transition: {
                          delayChildren: 1,
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    {Array.from("SHOWDOWN OF THE ACES").map((item, index) => {
                      return (
                        <motion.span
                          key={index}
                          className="text-xs sm:text-sm md:text-2xl lg:text-3xl"
                          style={{ color: "white" }} //fontSize: "1.7rem"
                          variants={{
                            hidden: { opacity: 0, x: 10 },
                            exit: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 },
                          }}
                        >
                          {item === " " ? "\u00A0" : item}
                        </motion.span>
                      );
                    })}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </Flex>
        </Flex>
        <Flex
          width={"100%"}
          alignItems={"center"}
          justifyContent={"end"}
          height={"15%"}
          flexDir={{ base: "column", md: "row-reverse" }}
        >
          {!isMenuOpen ? (
            <Show above="md">
              <motion.div
                style={{
                  width: "12%",
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 0.5 }}
              >
                <Button
                  backgroundImage={insta}
                  _hover={{}}
                  _active={{}}
                  width={"100%"}
                  backgroundSize={"cover"}
                  height={"50%"}
                />
              </motion.div>
              <motion.p
                style={{
                  color: "#FEDF3E",
                  width: "17%",
                  fontSize: "small",
                  marginRight: "2%",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 4.5, duration: 0.5 }}
              >
                Embrace the challenge, rally for your convictions, and let the
                intensity of competition ignite the passion within.
              </motion.p>
            </Show>
          ) : (
            <Show above="md">
              <motion.div
                style={{ width: "40%", color: "white" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
              >
                <Text fontSize={"xs"}>
                  &quot;You, me or nobody is gonna hit as hard as life. But it
                  ain&apos;t about how hard you hit. It&apos;s about how hard
                  you can get hit... and keep moving forward.&quot;
                </Text>
                <Text fontSize={"xs"}>-Rocky (2006 Movie)</Text>
              </motion.div>
            </Show>
          )}
          <Show below="sm">
            <Button
              as={Link}
              to="/register"
              fontSize="0.75rem"
              color="white"
              border="3px solid white"
              // padding="0% 50%"
              background="rgba(0, 0, 0, 1)"
              cursor="pointer"
              width="8rem"
              // marginTop="20%"
              // marginLeft="-12rem"
              marginBottom="2%"
              borderRadius="9999px"
              letterSpacing="0.3rem"
              onClick={handleRegister}
            >
              REGISTER
            </Button>
          </Show>
          <Countdown />
        </Flex>
      </Flex>
      <Footer />
    </ChakraProvider>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
