import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Text,
  Button,
  useColorMode,
  Container,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import aboutMe from "../Assets/AboutMe.png";
import clothingo from "../Assets/clothingo.png";
import megamart from "../Assets/megamart.png";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        id="nav-menu"
        textStyle="navbar"
        bg={useColorModeValue("gray.100", "gray.900")}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Text textStyle="logo">AMOL</Text>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
              <Text textStyle="navText">
                <a className="nav-link.home" href="#home">HOME</a>
              </Text>

              <Text textStyle="navText">
                <a className="nav-link.about" href="#about">ABOUT</a>
              </Text>

              <Text  textStyle="navText">
                <a className="nav-link.projects" href="#projects">PROJECT</a>
              </Text>

              <Text textStyle="navText">
                <a className="nav-link.skills" href="#skills">SKILLS</a>
              </Text>

              <Text textStyle="navText">
                <a className="nav-link.contact" href="#contact">CONTACT</a>
              </Text>

              <Text textStyle="navText">
                <a className="nav-link.resume" href="">RESUME</a>
              </Text>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Text>
              <a href="#home">HOME</a>
            </Text>
            <Text>
              <a href="#about">ABOUT</a>
            </Text>
            <Text>
              <a href="#projects">PROJECTS</a>
            </Text>
            <Text>
              <a href="#skills">SKILLS</a>
            </Text>
            <Text>
              <a href="#contact">CONTACT</a>
            </Text>
            <Text>
              <a href="">RESUME</a>
            </Text>
          </Box>
        ) : null}
      </Box>

      <Container maxW="6xl" mt="100">
        {/* home */}

        <Container id="home" maxW="6xl">
          <SimpleGrid
            alignItems={"center"}
            columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
            spacing="20px"
            p={[2, 4, 6, 8]}
          >
            <Box textAlign="left">
              <Box lineHeight="55px">
                <Text textStyle="h3">Hello, My Name is</Text>
                <Text textStyle="h1" id="user-detail-name">Amol Thakare</Text>
                <Flex gap="3">
                  <Text textStyle="h3">I am a </Text>
                  <Text textStyle="h4" className="p" id="user-detail-intro">
                    Full Stack Web Developer
                  </Text>
                </Flex>
              </Box>
              <Button mt="3" mb="10" variant="solid" colorScheme="blue">
                <a href="" download>
                  Resume
                  <span>
                    <i className="fa-solid fa-file-arrow-down" />
                  </span>
                </a>
              </Button>
            </Box>
            <Box>
              <Image className="home-img" 
                borderRadius="20"
                src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                alt="amol"
              />
            </Box>
          </SimpleGrid>
        </Container>

        {/* about */}

        <Container id="about" className="about section" maxW="6xl">
          <SimpleGrid
            alignItems={"center"}
            columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
            p={[2, 4, 6, 8]}
          >
            <Box>
              <Image src={aboutMe} alt="amol" />
            </Box>
            <Box>
              <Text textStyle="about">About Me</Text>
              <Text textStyle="p1" id="user-detail-intro">
                Self-motivated developer and Creative person who is interested
                in building user-friendly products. Extremely motivated to
                constantly develop technical skills and grow professionally. and
                looking forward to working in a challenging role that leads to
                the organization's overall growth and development.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>

        {/* project */}

        <Container id="projects" mt="50" maxW="6xl">
          <Text textStyle="heading">MY PROJECTS</Text>
          <SimpleGrid
            columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
            spacing="25px"
            p={[6, 4, 6, 8]}
          >
            <Box textStyle="projectBox">
              <Box>
                <Image
                  src="https://raw.githubusercontent.com/Arfeen98/MamaEarthclone/main/Images/MamaEarth.png"
                  alt=""
                  borderRadius="10"
                  border="1px solid rgb(206,206,206)"
                />
              </Box>
              <Text textStyle="h2">Mamaearth Clone</Text>
              <Text textStyle="p">
                  Mamaearth is one of the most trustworthy brands in India. It offers the best-in-class skincare products to help you discover the essence of beauty with the Goodness of Nature.
              </Text>
              <Flex gap="2" mt="3">
              <Text textStyle="techStack">Tech Stacks :</Text> 
              <Text textStyle="p2">HTML, CSS, JavaScript</Text>
              </Flex>
              <Flex justifyContent="space-evenly" mt="5">
                <Button variant="outline" colorScheme="blue">
                  <a href="calm-sawine-27b8ed.netlify.app/">
                    See Live
                    <span>
                      <i className="fa-solid fa-eye" />
                    </span>
                  </a>
                </Button>
                <Button variant="outline" colorScheme="blue">
                  <a href="https://github.com/Arfeen98/MamaEarthclone">
                    View Code
                    <span>
                      <i className="fa-brands fa-github" />
                    </span>
                  </a>
                </Button>
              </Flex>
            </Box>

            <Box textStyle="projectBox">
              <Box>
                <Image
                  src={megamart}
                  alt=""
                  borderRadius="10"
                  border="1px solid rgb(206,206,206)"
                />
              </Box>
              <Text textStyle="h2">CraftsVilla Clone</Text>
              <Text textStyle="p">
                A web application where daily needs products are
                available for purchase and there are different functionalties
                available, here you can Filter all the products and this is a my
                first individual project.
              </Text>
              <Flex gap="2" mt="3">
              <Text textStyle="techStack">Tech Stacks :</Text> 
              <Text textStyle="p2">HTML, CSS, JavaScript, NodeJs</Text>
              </Flex>
              <Flex justifyContent="space-evenly" mt="5">
                <Button variant="outline" colorScheme="blue">
                  <a href="https://splendorous-capybara-aeb198.netlify.app">
                    See Live
                    <span>
                      <i className="fa-solid fa-eye" />
                    </span>
                  </a>
                </Button>
                <Button variant="outline" colorScheme="blue">
                  <a href="https://github.com/amolthakare/crooked-milk-1565">
                    View Code
                    <span>
                      <i className="fa-brands fa-github" />
                    </span>
                  </a>
                </Button>
              </Flex>
            </Box>

            <Box textStyle="projectBox">
              <Box>
                <Image
                  src={clothingo}
                  alt=""
                  borderRadius="10"
                  border="1px solid rgb(206,206,206)"
                />
              </Box>
              <Text textStyle="h2">Clothingo Clone</Text>
              <Text textStyle="p">
              THE FINEST EDIT IN LUXURY FASHION Clothingo is the finest edit in luxury fashion for women, men and kids. We have over 200 of the best international designers
              </Text>
              <Flex gap="2" mt="3">
              <Text textStyle="techStack">Tech Stacks :</Text> 
              <Text textStyle="p2">HTML, CSS, JavaScript</Text>
              </Flex>
              <Flex justifyContent="space-evenly" mt="5">
                <Button variant="outline" colorScheme="blue">
                  <a href="https://luxury-vacherin-56d222.netlify.app/">
                    See Live
                    <span>
                      <i className="fa-solid fa-eye" />
                    </span>
                  </a>
                </Button>
                <Button variant="outline" colorScheme="blue">
                  <a href="https://github.com/hrithikvishwakarma001/complex-oranges-7381">
                    View Code
                    <span>
                      <i className="fa-brands fa-github" />
                    </span>
                  </a>
                </Button>
              </Flex>
            </Box>
          </SimpleGrid>
        </Container>

        {/* skills */}

        <Container id="skills" maxW="6xl" mt="80px"></Container>

        {/* contact */}

        <Container id="contact" maxW="6xl" mt="100px"></Container>
      </Container>
    </>
  );
}
