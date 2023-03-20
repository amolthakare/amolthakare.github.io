import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      mt="10"
      bg={useColorModeValue("gray.100", "gray.900")}
      textAlign="center"
    >
      <Flex
        alignItems="center"
        justifyContent="space-around"
        flexDirection={{ base: "column", md: "row" }}
        p="5"
      >
        <Box>
          <Text>
            <i className="fa-solid fa-envelope"></i> amolThakare@gmail.com
          </Text>
        </Box>
        <Box mt={{base:"3", md:"0"}}>
          <Text>
            <i className="fa-solid fa-mobile-retro"></i> +91 85658658645
          </Text>
        </Box>
      </Flex>
      <Box borderTop={useColorModeValue("1px solid #cecece","1px solid #4d4d50")} p="3">
        <Text fontSize="14px">2023, Made by Amol Thakare.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
