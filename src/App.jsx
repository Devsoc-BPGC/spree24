import "./index.css";
import BurgerMenu from "./components/BurgerMenu";
import { Button, ChakraProvider, Flex, Image, Text } from "@chakra-ui/react";
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
        <Flex width={"100%"} height={"15%"}>
          <motion.img
            src={fireball}
            style={{ margin: "1%", height: "50%" }}
            initial={{ opacity: 0, rotate: -90, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <BurgerMenu />
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
          <Button backgroundImage={insta} _hover={{}} _active={{}} width={"12%"} backgroundSize={"cover"} height={"50%"} />
          <Text color={"#FEDF3E"} width={"17%"} fontSize={"xs"} marginRight={"2%"}>
            Embrace the challenge, rally for your convictions, and let the intensity of competition ignite the passion within.
          </Text>
          <Countdown />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
