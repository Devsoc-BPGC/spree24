import { Flex, Box, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const VerticalText = ({ children }) => {
  return (
    <Box
      style={{
        paddingBottom: "1rem",
        writingMode: "vertical-rl",
        textOrientation: "mixed",
      }}
    >
      {children}
    </Box>
  );
};
function VerticalNav() {
  return (
    <>
      <Flex
        style={{ transform: "rotate(180deg)" }}
        position={"absolute"}
        marginTop={"7rem"}
        top={"0"}
        left={"0"}
        maxH={"65vh"}
        width={"2.5rem"}
        flexDir={"column"}
      >
        <VStack
          height="100%"
          width="100%"
          color="black"
          align="flex-start"
          justify="space-between"
          fontFamily={"alata"}
          marginLeft={"0.3rem"}
          fontSize={"1.2rem"}
          fontWeight={"800"}
        >
          <Link to="/media">
            <VerticalText>Media Partner</VerticalText>
          </Link>
          <Link to="/sponsors">
            <VerticalText>Sponsor</VerticalText>
          </Link>
          <VerticalText>Our Team</VerticalText>
          <VerticalText>Contact Us</VerticalText>
        </VStack>
      </Flex>
    </>
  );
}

export default VerticalNav;
