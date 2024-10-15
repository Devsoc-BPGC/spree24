import {
  Flex,
  Box,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Box as="button" onClick={onOpen}>
            <VerticalText>Contact Us</VerticalText>
          </Box>
        </VStack>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          bg="rgba(255,255,255,0.2)"
          backdropFilter="blur(10px)"
          borderRadius="md"
          border="1px solid rgba(255, 255, 255, 0.3)"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        >
          <ModalHeader style={{ color: "white" }}>Contact Us</ModalHeader>
          <ModalBody>
            <Box textAlign="center" fontFamily="alata" lineHeight="1.8">
              <p style={{ color: "white" }}>Feel free to reach out to us at</p>
              <Box fontWeight="bold" fontSize="1.2rem" color="white">
                <p>+91 82399 95529</p>
              </Box>
              <Box mt={4} fontSize="1rem">
                <p style={{ fontWeight: "bold", fontSize: "1.2rem" , color:"white"}}>
                  PALASH SANGHHI
                </p>
                <p style={{ color: "white" }}>~ Spree Convener</p>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button className="bg:#005B71" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default VerticalNav;
