import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Flex
      w="80%"
      m="auto"
      mt="20"
      alignItems="center"
      gap={{ base: "10", md: "20" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box w="100%">
        <Image
          w={{ base: "100%", md: "80%" }}
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="amol"
        />
      </Box>
      <Box w="100%">
        <Text fontSize="30px" fontWeight="600">
          About Me
        </Text>
        <Text mt="5">
          Self-motivated developer and Creative person who is interested in
          building user-friendly products. Extremely motivated to constantly
          develop technical skills and grow professionally. and looking forward
          to working in a challenging role that leads to the organization's
          overall growth and development.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
