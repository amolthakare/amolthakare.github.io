import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import developer from "../assets/developer.png"

const Home = () => {
  return (
    <Flex
      id="home"
      w="80%"
      m="auto"
      mt={{base:"10", md:"120px"}}
      alignItems="center"
      flexDirection={{ base: "column-reverse", md: "row" }}
    >
      <Box w="100%">
        <Flex alignItems="center" gap="3">
          <Image
            w="9"
            src="https://cdn-icons-png.flaticon.com/512/2278/2278923.png"
            alt=""
          />
          <Text fontSize="18px">Hello, My Name is</Text>
        </Flex>

        <Heading className="head" fontSize={{ base: "39px", md: "75px" }} fontFamily="Righteous" mt="2">
          Amol Thakare
        </Heading>
        <Text fontWeight="600" fontSize={{ base: "30px", md: "38px" }} mt={{base:"4", md:"1"}}>
          I am a Backend Developer
        </Text>

        <Button
          mt="6"
          px="8"
          bg="#407bff"
          _hover={{bg:"#1f63f6"}}
          size="lg"
          fontSize="16px"
          gap="2"
          position="static"
          letterSpacing="0.5px"
          color="white"
        >
          Resume <i className="fa-solid fa-arrow-down"></i>
        </Button>
      </Box>
      <Box w="100%">
        <Image
          w="100%"
          src={developer}
          alt="developer"
        />
      </Box>
    </Flex>
  );
};

export default Home;
