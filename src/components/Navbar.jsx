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
              <Text textStyle="p1">
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

        <Container id="projects" mt="50" maxW="6xl"></Container>

        {/* skills */}

        <Container id="skills" maxW="6xl" mt="80px"></Container>

        {/* contact */}

        <Container id="contact" maxW="6xl" mt="100px"></Container>
      </Container>
    </>
  );
}
