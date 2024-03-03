import "./index.css";
import BurgerMenu from "./components/BurgerMenu";
import { Button, ChakraProvider, Flex } from "@chakra-ui/react";
import Player from "./assets/Player.png";
import fireball from "./assets/fireball2.png";
import left from "./assets/Left Side.png";
import right from "./assets/Right Side.png";
import bg from "./assets/background.png";
import insta from "./assets/insta.png";
import { motion } from "framer-motion";
import Countdown from "./components/Countdown";

function App() {
  return (
    <ChakraProvider>
      <Flex height={"100vh"} backgroundPosition={"left bottom"} bgImage={bg} alignItems={"center"} justifyContent={"space-between"} flexDirection={"column"} overflowX={"hidden"} position={"relative"}>
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
            <Button
              // style={{
              //   fontSize: "15px",
              //   color: "white",
              //   border: "2.85px solid white",
              //   padding: "8px 13px",
              //   background: "rgba(0, 0, 0, 1)",
              //   borderRadius: "999px",
              //   cursor: "pointer",
              //   width: buttonWidth, // Set the width of the button
              //   marginRight: "-13px",
              //   letterSpacing: "0.25em",
              // }}
              href="https://register.bits-spree.org/register"
              fontSize="98.5%"
              color="white"
              border="3px solid white"
              padding="0% 50%"
              background="rgba(0, 0, 0, 1)"
              cursor="pointer"
              width="90%"
              marginTop="12%"
              marginLeft="-12rem"
              borderRadius="9999px"
              letterSpacing="0.3rem"
            >
              REGISTER
            </Button>
            <BurgerMenu />
          </motion.div>
        </Flex>
        <Flex flexDirection={"column"} width={"100%"} alignItems={"center"} justifyContent={"center"}>
          <motion.img src={left} style={{ position: "absolute", left: "10%", width: "28%" }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0, transition: { delay: 3, duration: 1 } }} />
          <motion.img src={Player} style={{ width: "35%", marginLeft: "-20%", position: "absolute", zIndex: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} />
          <motion.img
            src={right}
            style={{ position: "absolute", right: 0, width: "17%", marginTop: "2%" }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 3, duration: 1 } }}
          />
          <Flex flexDirection={"column"} width={"100%"} alignItems={"center"}>
            <motion.div
              style={{ width: "80%", justifyContent: "space-between", color: "white", marginBottom: "-2%", zIndex: 1, display: "flex", flexDirection: "row-reverse" }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 1.5,
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              {Array.from("SPREE")
                .reverse()
                .map((item, index) => {
                  return (
                    <motion.p
                      className="spree-letters"
                      key={index}
                      style={{ fontWeight: 700, fontSize: "9rem", fontFamily: "Inter" }}
                      variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: "spring", stiffness: 100 } } }}
                    >
                      {item}
                    </motion.p>
                  );
                })}
            </motion.div>
            <motion.div
              style={{ display: "flex", width: "80%", textAlign: "right", zIndex: 1, justifyContent: "end" }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 1.5,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {Array.from("SHOWDOWN OF THE ACES").map((item, index) => {
                return (
                  <motion.span key={index} style={{ color: "white", fontSize: "1.7rem" }} variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }}>
                    {item === " " ? "\u00A0" : item}
                  </motion.span>
                );
              })}
            </motion.div>
          </Flex>
        </Flex>
        <Flex width={"100%"} alignItems={"center"} justifyContent={"end"} height={"15%"} flexDir={"row-reverse"}>
          <motion.div style={{ width: "12%", display: "flex", height: "100%", alignItems: "center" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5, duration: 0.5 }}>
            <Button backgroundImage={insta} _hover={{}} _active={{}} width={"100%"} backgroundSize={"cover"} height={"50%"} />
          </motion.div>
          <motion.p style={{ color: "#FEDF3E", width: "17%", fontSize: "small", marginRight: "2%" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5, duration: 0.5 }}>
            Embrace the challenge, rally for your convictions, and let the intensity of competition ignite the passion within.
          </motion.p>
          {/* <Text color={"#FEDF3E"} width={"17%"} fontSize={"xs"} marginRight={"2%"}>
            Embrace the challenge, rally for your convictions, and let the intensity of competition ignite the passion within.
          </Text> */}
          <Countdown />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
