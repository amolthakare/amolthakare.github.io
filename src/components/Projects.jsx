import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  return (
    <Box w="80%" m="auto" mt={{ base: "20", md: "40" }}>
      <Text fontSize="30px" fontWeight="600">
        My Projects
      </Text>

      <SimpleGrid columns={[1, 1, null, 2]} spacing="80px" mt="5">
        {/* project 1 */}

        <Box bg={useColorModeValue("gray.100", "gray.900")}>
          <Box>
            <Image
              src="https://assets.materialup.com/uploads/862bdeb9-2bde-4967-b4eb-985cac51fb44/attachment.png"
              alt=""
            />
          </Box>
          <Box p="5">
            <Text mt="5" fontSize="25px" fontWeight="600">
              Title
            </Text>

            <Text mt="2">
              HTML was originally created as a markup language to describe
              documents on the early internet. As the internet grew and was
              adopted by more people, its needs changed.
            </Text>
            <Flex
              mt="4"
              fontSize="15px"
              color="#407bff"
              flexFlow="wrap"
              gap="5"
              alignItems="center"
            >
              <Text fontFamily="Space Mono, monospace">HTML</Text>{" "}
              <Text fontFamily="Space Mono, monospace">CSS</Text>{" "}
              <Text fontFamily="Space Mono, monospace">JavaScript</Text>
            </Flex>

            <Flex mt="3" alignItems="center" justifyContent="space-between">
              <Box fontSize="18px">
                <i className="fa-brands fa-github"></i>
              </Box>

              <Box fontSize="18px">
                <i className="fa-solid fa-eye"></i>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* project 2 */}

        <Box bg={useColorModeValue("gray.100", "gray.900")}>
          <Box>
            <Image
              src="https://assets.materialup.com/uploads/862bdeb9-2bde-4967-b4eb-985cac51fb44/attachment.png"
              alt=""
            />
          </Box>
          <Box p="5">
            <Text mt="5" fontSize="25px" fontWeight="600">
              Title
            </Text>

            <Text mt="2">
              HTML was originally created as a markup language to describe
              documents on the early internet. As the internet grew and was
              adopted by more people, its needs changed.
            </Text>
            <Flex
              mt="4"
              fontSize="15px"
              color="#407bff"
              flexFlow="wrap"
              gap="5"
              alignItems="center"
            >
              <Text fontFamily="Space Mono, monospace">HTML</Text>{" "}
              <Text fontFamily="Space Mono, monospace">CSS</Text>{" "}
              <Text fontFamily="Space Mono, monospace">JavaScript</Text>
            </Flex>

            <Flex mt="3" alignItems="center" justifyContent="space-between">
              <Box fontSize="18px">
                <i className="fa-brands fa-github"></i>
              </Box>

              <Box fontSize="18px">
                <i className="fa-solid fa-eye"></i>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* project 3 */}

        <Box bg={useColorModeValue("gray.100", "gray.900")}>
          <Box>
            <Image
              src="https://assets.materialup.com/uploads/862bdeb9-2bde-4967-b4eb-985cac51fb44/attachment.png"
              alt=""
            />
          </Box>
          <Box p="5">
            <Text mt="5" fontSize="25px" fontWeight="600">
              Title
            </Text>

            <Text mt="2">
              HTML was originally created as a markup language to describe
              documents on the early internet. As the internet grew and was
              adopted by more people, its needs changed.
            </Text>
            <Flex
              mt="4"
              fontSize="15px"
              color="#407bff"
              flexFlow="wrap"
              gap="5"
              alignItems="center"
            >
              <Text fontFamily="Space Mono, monospace">HTML</Text>{" "}
              <Text fontFamily="Space Mono, monospace">CSS</Text>{" "}
              <Text fontFamily="Space Mono, monospace">JavaScript</Text>
            </Flex>

            <Flex mt="3" alignItems="center" justifyContent="space-between">
              <Box fontSize="18px">
                <i className="fa-brands fa-github"></i>
              </Box>

              <Box fontSize="18px">
                <i className="fa-solid fa-eye"></i>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* project 4 */}

        <Box bg={useColorModeValue("gray.100", "gray.900")}>
          <Box>
            <Image
              src="https://assets.materialup.com/uploads/862bdeb9-2bde-4967-b4eb-985cac51fb44/attachment.png"
              alt=""
            />
          </Box>
          <Box p="5">
            <Text mt="5" fontSize="25px" fontWeight="600">
              Title
            </Text>

            <Text mt="2">
              HTML was originally created as a markup language to describe
              documents on the early internet. As the internet grew and was
              adopted by more people, its needs changed.
            </Text>
            <Flex
              mt="4"
              fontSize="15px"
              color="#407bff"
              flexFlow="wrap"
              gap="5"
              alignItems="center"
            >
              <Text fontFamily="Space Mono, monospace">HTML</Text>{" "}
              <Text fontFamily="Space Mono, monospace">CSS</Text>{" "}
              <Text fontFamily="Space Mono, monospace">JavaScript</Text>
            </Flex>

            <Flex mt="3" alignItems="center" justifyContent="space-between">
              <Box fontSize="18px">
                <i className="fa-brands fa-github"></i>
              </Box>

              <Box fontSize="18px">
                <i className="fa-solid fa-eye"></i>
              </Box>
            </Flex>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
