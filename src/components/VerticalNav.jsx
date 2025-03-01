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
// import { useState } from "react";

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
        marginTop={"10rem"}
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
            <VerticalText>Media Partner 24'</VerticalText>
          </Link>
          {/* <Link to="/sponsors">
            <VerticalText>Sponsor 24'</VerticalText>
          </Link> */}
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
            <Box textAlign="center" fontFamily="alata" lineHeight="1.8" color={'white'}>
              <p style={{ color: "white", marginBottom: "1rem" }}>Feel free to reach out to us at</p>
                {/* <p>+91 82399 95529</p>
                <p style={{ fontWeight: "bold", fontSize: "1.2rem"}}>
                  PALASH SANGHI
                </p> */}
                <p style={{marginTop: "5%"}}>+91 70118 00150</p>
                <p style={{ fontWeight: "bold"}}>Apurva Singh (Registrations)</p>
                {/* <p style={{marginTop: "5%"}}>+91 73406 23532</p>
                <p style={{ fontWeight: "bold"}}>Archi Jain (Sponsorship)</p>
                <p style={{marginTop: "5%"}}>+91 93084 34822</p>
                <p style={{ fontWeight: "bold"}}>Keshav Agrawal (Finance)</p>
                <p style={{marginTop: "5%"}}>+91 63587 59788</p> */}
                <p style={{ fontWeight: "bold"}}>Sayantan Basu (Events)</p>
                <p style={{marginTop: "5%"}}>+91 77559 29460</p>
                {/* <p style={{ fontWeight: "bold"}}>Suryansh Mathiyan (Events)</p> */}
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
