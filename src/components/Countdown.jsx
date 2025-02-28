import { Flex, Text } from "@chakra-ui/react";
import { differenceInDays, differenceInHours, differenceInMinutes } from "date-fns";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  const eventDate = new Date("2025 March 26 00:00:00");
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }
  return (
    // <Flex textAlign={"center"} flex={2}>
    <motion.div
      className="justify-center sm:justify-start text-orange-200"
      style={{ display: "flex", flex: 2, textAlign: "center" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 4, duration: 1 } }}
    >
      <Flex flexDirection={"column"} paddingLeft={"3%"} paddingRight={"3%"}>
        <Text fontSize={"sm"} fontWeight={"semibold"} marginBottom={"-20%"}>
          Days
        </Text>
        <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight={"semibold"}>
          {differenceInDays(eventDate, date) <= 9 ? "0" + differenceInDays(eventDate, date) : differenceInDays(eventDate, date)}
        </Text>
      </Flex>
      <Text fontSize={{ base: "2.5rem", md: "3.5rem" }}>:</Text>
      <Flex flexDirection={"column"} paddingLeft={"3%"} paddingRight={"3%"}>
        <Text fontSize={"sm"} marginBottom={"-20%"} fontWeight={"semibold"}>
          Hours
        </Text>
        <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight={"semibold"}>
          {differenceInHours(eventDate, date) % 24 <= 9 ? "0" + (differenceInHours(eventDate, date) % 24) : differenceInHours(eventDate, date) % 24}
        </Text>
      </Flex>
      <Text fontSize={{ base: "2.5rem", md: "3.5rem" }}>:</Text>
      <Flex flexDirection={"column"} paddingLeft={"3%"} paddingRight={"3%"}>
        <Text fontSize={"sm"} marginBottom={"-20%"} fontWeight={"semibold"}>
          Minutes
        </Text>
        <Text fontSize={{ base: "4xl", md: "5xl" }} fontWeight={"semibold"}>
          {differenceInMinutes(eventDate, date) % 60 <= 9 ? "0" + (differenceInMinutes(eventDate, date) % 60) : differenceInMinutes(eventDate, date) % 60}
        </Text>
      </Flex>
    </motion.div>
  );
  // {
  //   /* </Flex> */
  // }
};

export default Countdown;
