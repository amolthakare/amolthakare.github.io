import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Text,
  Heading,
  Image,
  SimpleGrid,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import developer from "../assets/developer.png";
import conatct from "../assets/conatct.png";
import resume from "../assets/amol-thakare-resume.pdf";
import amol_img from "../assets/amol_img.JPG";
import tralive from "../assets/tralive.png";
import clothingo from "../assets/clothingo.png";
import megamart from "../assets/megamart.png";
import tralive1 from "../assets/tralive1.png";
import clothingo1 from "../assets/clothingo1.png";
import megamart1 from "../assets/megamart1.png";
import mamaearth from "../assets/mamaearth.png";
import mamaearth1 from "../assets/mamaearth1.png";
import GitHubCalendar from "react-github-calendar";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        id="nav-menu"
        position="sticky"
        top="0"
        bg={useColorModeValue("gray.100", "gray.900")}
        px={{ base: "5", md: "12" }}
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            variant="ghost"
            _hover={{ variant: "ghost" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontSize="25px" fontWeight="600">
              <span className="A">A</span>mol.
            </Box>
          </HStack>
          <Flex alignItems={"center"} gap="5">
            <HStack
              as={"nav"}
              spacing={6}
              display={{ base: "none", md: "flex" }}
              letterSpacing="1px"
            >
              <Text>
                <a className="menu-btn nav-link home" href="#home">
                  Home
                </a>
              </Text>
              <Text>
                <a className="menu-btn nav-link about" href="#about">
                  About
                </a>
              </Text>
              <Text>
                <a className="menu-btn nav-link skills" href="#skills">
                  Skills
                </a>
              </Text>
              <Text>
                <a className="menu-btn nav-link projects" href="#projects">
                  Projects
                </a>
              </Text>
              <Text>
                <a className="menu-btn nav-link contact" href="#contact">
                  Contact
                </a>
              </Text>
              <Text>
                <Button id="resume-button-1">
                  <a
                    className="menu-btn nav-link resume"
                    id="resume-link-1"
                    href={resume}
                    download
                  >
                    Resume
                  </a>
                </Button>
                
              </Text>
            </HStack>
            <Button onClick={toggleColorMode} variant="ghost" _hover={{ variant: "ghost" }}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={6} pt={6} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={5} letterSpacing="1px">
              <Text>
                <a href="#home">Home</a>
              </Text>
              <Text>
                <a href="#about">About</a>
              </Text>
              <Text>
                <a href="#skills">Skills</a>
              </Text>
              <Text>
                <a href="#projects">Projects</a>
              </Text>
              <Text>
                <a href="#contact">Contact</a>
              </Text>
              <Text>
              <Button id="resume-button-1">
                  <a
                    className="menu-btn nav-link resume"
                    id="resume-link-1"
                    href={resume}
                    download
                  >
                    Resume
                  </a>
                </Button>
              </Text>
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* Home section */}


      <Flex
        id="home"
        w="80%"
        m="auto"
        mt={{ base: "10", md: "120px" }}
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

          <Heading
            id="user-detail-name"
            className="head"
            fontSize={{ base: "39px", md: "75px" }}
            fontFamily="Righteous"
            mt="2"
          >
            Amol Thakare
          </Heading>
          <Text
            id="user-detail-intro"
            fontWeight="600"
            fontSize={{ base: "30px", md: "38px" }}
            mt={{ base: "4", md: "1" }}
          >
            I am Full Stack Web Developer
          </Text>

          <Button
            mt="6"
            px="8"
            bg="#407bff"
            _hover={{ bg: "#1f63f6" }}
            size="lg"
            fontSize="16px"
            gap="2"
            position="static"
            letterSpacing="0.5px"
            color="white"
            id="resume-button-2"
          >
            <a id="resume-link-2" href={resume} download>
              Resume <i className="fa-solid fa-arrow-down"></i>
            </a>
          </Button>
        </Box>
        <Box w="100%">
          <Image
            className="home-img"
            w="100%"
            src={developer}
            alt="developer"
          />
        </Box>
      </Flex>

      {/* about section  */}

      <Flex
        id="about"
        className="about section"
        w="80%"
        m="auto"
        mt="20"
        alignItems="center"
        gap={{ base: "10", md: "20" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box w="100%">
          <Image
            borderRadius={"50%"}
            w={{ base: "100%", md: "80%" }}
            src={amol_img}
            alt="amol"
          />
        </Box>
        <Box w="100%">
          <Text fontSize="30px" fontWeight="600">
            About Me
          </Text>
          <Text id="user-detail-intro" mt="5">
            Self-motivated Full Stack Developer having hands on experience on
            Frontend as well as Backend Technologies and Creative person who is
            interested in building user-friendly products. Extremely motivated
            to constantly develop technical skills and grow professionally. and
            looking forward to working in a challenging role that leads to the
            organization's overall growth and development.
          </Text>
        </Box>
      </Flex>

      {/* skills */}
      
      <Box id="skills" w="80%" m="auto" mt={{ base: "20", md: "40" }}>
        <Text fontSize="30" fontWeight="600">
          Skills
        </Text>

        <SimpleGrid
          className="skills-card"
          columns={[2, 3, 4, 5, 6]}
          spacing="80px"
          mt="10"
        >
          <Box className="skillBox" _hover={{ bg :useColorModeValue("gray.200", "gray.1000") }}>
            <Image
              w="20"
              className="skills-card-img"
              textStyle="skillLogo"
              src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
              alt=""
            />
            <Text className="skills-card-name" textStyle="skillText">
              HTML
            </Text>
          </Box>
          <Box className="skillBox" _hover={{ bg :useColorModeValue("gray.200", "gray.1000") }}>
            <Image
              w="20"
              className="skills-card-img"
              textStyle="skillLogo"
              src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
              alt=""
            />
            <Text className="skills-card-name" textStyle="skillText">
              CSS
            </Text>
          </Box>

          <Box className="skillBox" _hover={{ bg :useColorModeValue("gray.200", "gray.1000") }}>
            <Image
              w="20"
              className="skills-card-img"
              textStyle="skillLogo"
              src="https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png"
              alt=""
            />
            <Text className="skills-card-name" textStyle="skillText">
              JavaScript
            </Text>
          </Box>
          <Box className="skillBox" _hover={{ bg :useColorModeValue("gray.200", "gray.1000") }}>
            <Image
              w="20"
              className="skills-card-img"
              textStyle="skillLogo"
              src="https://iconape.com/wp-content/files/ec/371378/svg/371378.svg"
              alt=""
            />
            <Text className="skills-card-name" textStyle="skillText">
              React
            </Text>
          </Box>
          <Box className="skillBox" _hover={{ bg :useColorModeValue("gray.200", "gray.1000") }}>
            <Image
              w="20"
              className="skills-card-img"
              textStyle="skillLogo"
              src="https://cdn.iconscout.com/icon/free/png-256/nodejs-2-226035.png?f=avif&w=128"
              alt=""
            />
            <Text className="skills-card-name" textStyle="skillText">
              NodeJS
            </Text>
          </Box>
          <Box className="skillBox" _hover={{ bg :useColorModeValue("gray.200", "gray.1000") }}>
            <Image
              w="20"
              className="skills-card-img"
              textStyle="skillLogo"
              src="data:image/png;base64,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"
              alt=""
            />
            <Text className="skills-card-name" textStyle="skillText">
              Express
            </Text>
          </Box>
          <Box className="skillBox" _hover={{ bg :useColorModeValue("gray.200", "gray.1000") }}>
            <Image
              w="20"
              className="skills-card-img"
              textStyle="skillLogo"
              src="https://cms-assets.tutsplus.com/uploads/users/34/posts/29527/preview_image/mongoose.jpg"
              alt=""
            />
            <Text className="skills-card-name" textStyle="skillText">
              Mongoose
            </Text>
          </Box>
          <Box className="skillBox" _hover={{ bg :useColorModeValue("gray.200", "gray.1000") }}>
            <Image
              w="20"
              className="skills-card-img"
              textStyle="skillLogo"
              src="https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png?f=avif&w=128"
              alt=""
            />
            <Text className="skills-card-name" textStyle="skillText">
              MongoDB
            </Text>
          </Box>
          <Box className="skillBox" _hover={{ bg :useColorModeValue("gray.200", "gray.1000") }}>
            <Image
              w="20"
              className="skills-card-img"
              textStyle="skillLogo"
              src="data:image/png;base64,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"
              alt=""
            />
            <Text className="skills-card-name" textStyle="skillText">
              AWS
            </Text>
          </Box>
          <Box className="skillBox" _hover={{ bg :useColorModeValue("gray.200", "gray.1000") }}>
            <Image
              w="20"
              className="skills-card-img"
              textStyle="skillLogo"
              src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-15.png"
              alt=""
            />
            <Text className="skills-card-name" textStyle="skillText">
              My SQL
            </Text>
          </Box>
          <Box className="skillBox" _hover={{ bg :useColorModeValue("gray.200", "gray.1000") }}>
            <Image
              w="20"
              className="skills-card-img"
              textStyle="skillLogo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDcM4VsepX9Xp1r4a4SqDBLMQo1xNQ4ZvzCBi7mCHYnFKCswg8lCXDBQkW3JrPkMNlTE&usqp=CAU"
              alt=""
            />
            <Text className="skills-card-name" textStyle="skillText">
              Chakra UI
            </Text>
          </Box>
          <Box className="skillBox" _hover={{ bg :useColorModeValue("gray.200", "gray.1000") }}>
            <Image
              w="20"
              className="skills-card-img"
              textStyle="skillLogo"
              src="https://iconape.com/wp-content/png_logo_vector/bootstrap-3.png"
              alt=""
            />
            <Text className="skills-card-name" textStyle="skillText">
              Bootstrap
            </Text>
          </Box>
          
        </SimpleGrid>
      </Box>
      

      {/* projects */}

      <Box id="projects" w="80%" m="auto" mt={{ base: "20", md: "40" }}>
        <Text fontSize="30px" fontWeight="600">
          My Projects
        </Text>

        <SimpleGrid className="project" columns={[1, 1, null, 2]} spacing="80px" mt="5">
          {/* project 1 */}

          <Box boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"} borderRadius="lg" className="card project-card" bg={useColorModeValue("gray.100", "gray.900")} _hover={{ bg :useColorModeValue("gray.300", "gray.1400") }} >
            <img src=""></img>

            <Box className="change-photos">
              <div className="change-photo">
                <Image className="pro_img"
                  borderTopRadius="lg"
                  src={mamaearth}
                  alt=""
                />
              </div>
              <div className="change-photo">
                <Image className="pro_img"
                  borderTopRadius="lg"
                  src={mamaearth1}
                  alt=""
                />
              </div>
            </Box>


            <Box p="5">
              <Text className="text project-title" mt="5" fontSize="25px" fontWeight="600">
                MamaEarth Clone
              </Text>

              <Text className="project-description" mt="2">
                Mamaearth is one of the most trustworthy brands in India. It offers the best-in-class Natural & Toxin Free Skin Care Products to help you to discover the essence of beauty with the Goodness of Nature.
              </Text>
              <Flex
                className="techStack project-tech-stack"
                mt="4"
                fontSize="15px"
                color="#407bff"
                flexFlow="wrap"
                gap="5"
                alignItems="center"
              >
                <Text className="techStack project-tech-stack" fontFamily="Space Mono, monospace">HTML</Text>{" "}
                <Text className="techStack project-tech-stack" fontFamily="Space Mono, monospace">CSS</Text>{" "}
                <Text className="techStack project-tech-stack" fontFamily="Space Mono, monospace">JavaScript</Text>
              </Flex>

              <Flex className="repo-links" mt="3" alignItems="center" justifyContent="space-between">
                <Box fontSize="25px">
                  <a className="project-github-link" href="https://github.com/Arfeen98/MamaEarthclone"><i className="fa-brands fa-github"></i></a>
                </Box>

                <Box fontSize="25px">
                  <a className="project-deployed-link" href="https://calm-sawine-27b8ed.netlify.app/"><i className="fa-solid fa-eye"></i></a>
                </Box>
              </Flex>
            </Box>
          </Box>

          {/* project 2 */}

          <Box boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"} borderRadius="lg" className="card project-card" bg={useColorModeValue("gray.100", "gray.900")} _hover={{ bg :useColorModeValue("gray.300", "gray.1400") }}>
            <img src=""></img>
            <Box className="change-photos">
              <div className="change-photo">
                <Image className="pro_img"
                  borderTopRadius="lg"
                  src={megamart}
                  alt=""
                />
              </div>
              <div className="change-photo">
                <Image className="pro_img"
                  borderTopRadius="lg"
                  src={megamart1}
                  alt=""
                />
              </div>
            </Box>
            <Box p="5">
              <Text className="text project-title" mt="5" fontSize="25px" fontWeight="600">
                CraftsVilla Clone
              </Text>

              <Text className="project-description" mt="2">
              A web application where daily needs products are
                available for purchase and there are different functionalties
                available, here you can Filter all the products and this is a my
                first individual project.
              </Text>
              <Flex
                className="techStack project-tech-stack"
                mt="4"
                fontSize="15px"
                color="#407bff"
                flexFlow="wrap"
                gap="5"
                alignItems="center"
              >
                <Text className="techStack project-tech-stack" fontFamily="Space Mono, monospace">HTML</Text>{" "}
                <Text className="techStack project-tech-stack" fontFamily="Space Mono, monospace">CSS</Text>{" "}
                <Text className="techStack project-tech-stack" fontFamily="Space Mono, monospace">JavaScript</Text>{" "}
                <Text className="techStack project-tech-stack" fontFamily="Space Mono, monospace">NodeJS</Text>
              </Flex>

              <Flex className="repo-links" mt="3" alignItems="center" justifyContent="space-between">
                <Box fontSize="25px">
                  <a className="project-github-link" href="https://github.com/amolthakare/crooked-milk-1565"><i className="fa-brands fa-github"></i></a>
                  
                </Box>

                <Box fontSize="25px">
                  <a className="project-deployed-link" href="https://splendorous-capybara-aeb198.netlify.app"><i className="fa-solid fa-eye"></i></a>
                </Box>
              </Flex>
            </Box>
          </Box>

          {/* project 3 */}

          <Box boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"} borderRadius="lg" className="card project-card" bg={useColorModeValue("gray.100", "gray.900")} _hover={{ bg :useColorModeValue("gray.300", "gray.1400") }} >
            <img src=""></img>
            <Box className="change-photos">
              <div className="change-photo">
                <Image className="pro_img"
                  borderTopRadius="lg"
                  src={tralive}
                  alt=""
                />
              </div>
              <div className="change-photo">
                <Image className="pro_img"
                  borderTopRadius="lg"
                  src={tralive1}
                  alt=""
                />
              </div>
            </Box>
            <Box p="5">
              <Text className="text project-title" mt="5" fontSize="25px" fontWeight="600">
                Tripadvisor Clone
              </Text>

              <Text className="project-description" mt="2">
                Tripadvisor, is the travel platform,helps travelers to make every trip their best trip.Whether planning or on a trip, travelers turn to Tripadvisor to compare low prices on hotels, flights and cruises, book popular tours and attractions, as well as reserve tables at great restaurants.
              </Text>
              <Flex
                className="techStack project-tech-stack"
                mt="4"
                fontSize="15px"
                color="#407bff"
                flexFlow="wrap"
                gap="5"
                alignItems="center"
              >
                <Text className="techStack project-tech-stack" fontFamily="Space Mono, monospace">HTML</Text>{" "}
                <Text className="techStack project-tech-stack" fontFamily="Space Mono, monospace">CSS</Text>{" "}
                <Text className="techStack project-tech-stack" fontFamily="Space Mono, monospace">JavaScript</Text>
              </Flex>

              <Flex className="repo-links" mt="3" alignItems="center" justifyContent="space-between">
                <Box fontSize="25px">
                  <a className="project-github-link" href="https://github.com/amolthakare/-thankful-distribution-751"><i className="fa-brands fa-github"></i></a>
                  
                </Box>

                <Box fontSize="25px">
                  <a className="project-deployed-link" href="https://nimble-profiterole-aaa205.netlify.app"><i className="fa-solid fa-eye"></i></a>
                </Box>
              </Flex>
            </Box>
          </Box>

          {/* project 4 */}

          <Box boxShadow={"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"} borderRadius="lg" className="card project-card" bg={useColorModeValue("gray.100", "gray.900")} _hover={{ bg :useColorModeValue("gray.300", "gray.1400") }}>
            <img src=""></img>
            <Box className="change-photos">
              <div className="change-photo">
                <Image className="pro_img"
                  borderTopRadius="lg"
                  src={clothingo}
                  alt=""
                />
              </div>
              <div className="change-photo">
                <Image className="pro_img"
                  borderTopRadius="lg"
                  src={clothingo1}
                  alt=""
                />
              </div>
            </Box>
            <Box p="5">
              <Text className="text project-title" mt="5" fontSize="25px" fontWeight="600">
                Clothingo
              </Text>

              <Text className="project-description" mt="2">
              THE FINEST EDIT IN LUXURY FASHION Clothingo is the finest edit in luxury fashion for women, men and kids. We have over 200 of the best international designers
              </Text>
              <Flex
                className="techStack project-tech-stack"
                mt="4"
                fontSize="15px"
                color="#407bff"
                flexFlow="wrap"
                gap="5"
                alignItems="center"
              >
                <Text className="techStack project-tech-stack" fontFamily="Space Mono, monospace">HTML</Text>{" "}
                <Text className="techStack project-tech-stack" fontFamily="Space Mono, monospace">CSS</Text>{" "}
                <Text className="techStack project-tech-stack" fontFamily="Space Mono, monospace">JavaScript</Text>
              </Flex>

              <Flex className="repo-links" mt="3" alignItems="center" justifyContent="space-between">
                <Box fontSize="25px">
                  <a className="project-github-link" href="https://github.com/hrithikvishwakarma001/complex-oranges-7381"><i className="fa-brands fa-github"></i></a>
                  
                </Box>

                <Box fontSize="25px">
                  <a className="project-deployed-link" href="https://luxury-vacherin-56d222.netlify.app/"><i className="fa-solid fa-eye"></i></a>
                </Box>
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* github stats */}

      <Box w="80%" m="auto" mt="100px" textAlign="left">
      <Text fontSize="30px" fontWeight="600">
          Github Stats
        </Text>
      <GitHubCalendar
        className="react-activity-calendar"
        textAlign="left"
        username="amolthakare"
        color="rgb(49,130,206)"
        blockSize={20}
        blockMargin={10}
      />

      <SimpleGrid columns={[1, null, 2, 3]} spacing="40px" mt="10">
        <Box>
          <Image id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=amolthakare&theme=react&hide_border=false&include_all_commits=false&count_private=false" alt="" />
        </Box>

        <Box>
          <Image id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=amolthakare&theme=react&hide_border=false" alt="" />
        </Box>

        <Box>
          <Image id="github-top-langs" height="100%" width="100%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=amolthakare&theme=react&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="" />
        </Box>
      </SimpleGrid>
    </Box>

      {/* contacts */}
      <Flex
        className="contact"
        id="contact"
        w="80%"
        m="auto"
        mt={{ base: "20", md: "40" }}
        alignItems="center"
        gap={{ base: "10", md: "20" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box w="100%">
          <Image src={conatct} alt="contact" />
        </Box>
        <Box w="100%" px={{ base: "0", md: "10" }}>
          <Text fontSize="30px" fontWeight="600">
            Get In Touch
          </Text>
          <Flex
            mt="5"
            w="100%"
            alignItems="center"
            justifyContent="space-between"
            gap="5"
          >
            <Flex
              alignItems="center"
              gap="2"
              p="2"
              border="1px solid"
              px={{ base: "3", md: "7" }}
              borderRadius="md"
              bg="#0077b5"
              color="#f2f2f2"
            >
              <Text id="contact-linkedin" fontSize={{ base: "14px", md: "16px" }}><a href="https://www.linkedin.com/in/amol-thakare-90469b237/">Linkedin</a></Text>
              <Box display={{ base: "none", md: "flex" }}>
                <i className="fa-brands fa-linkedin-in"></i>
              </Box>
            </Flex>
            <Flex
              alignItems="center"
              gap="2"
              p="2"
              border="1px solid"
              px={{ base: "3", md: "7" }}
              borderRadius="md"
              color="#f2f2f2"
              bg="#161b22"
            >
              <Text id="contact-github" fontSize={{ base: "14px", md: "16px" }}><a href="https://github.com/amolthakare">Github</a></Text>

              <Box display={{ base: "none", md: "flex" }}>
                <i className="fa-brands fa-github"></i>
              </Box>
            </Flex>
            <Flex
              alignItems="center"
              gap="2"
              p="2"
              border="1px solid"
              px={{ base: "3", md: "7" }}
              borderRadius="md"
              bg="#00e361"
            >
              <Text fontSize={{ base: "14px", md: "16px" }}><a href="https://www.hackerrank.com/amolthakare631">HackerRank</a></Text>
              <Box display={{ base: "none", md: "flex" }}>
                <i className="fa-brands fa-hackerrank"></i>
              </Box>
              
            </Flex>
          </Flex>
          <Box mt="8">
            <Input position="static" placeholder="Name" />
          </Box>
          <Box mt="5">
            <Input position="static" placeholder="Email" />
          </Box>
          <Box mt="5">
            <Textarea position="static" placeholder="Message" />
          </Box>
          <Button
            mt="6"
            px="8"
            bg="#407bff"
            _hover={{ bg: "#1f63f6" }}
            size="lg"
            fontSize="16px"
            gap="2"
            letterSpacing="0.5px"
            color="white"
            position="static"
            w="100%"
          >
            Send <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </Box>
      </Flex>

      {/* footer */}

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
            <Text id="contact-email">
              <i className="fa-solid fa-envelope"></i> amolthakare631@gmail.com
            </Text>
          </Box>
          <Box mt={{ base: "3", md: "0" }}>
            <Text id="contact-phone">
              <i className="fa-solid fa-mobile-retro"></i> +91 9657654460
            </Text>
          </Box>
        </Flex>
        <Box
          borderTop={useColorModeValue(
            "1px solid #cecece",
            "1px solid #4d4d50"
          )}
          p="3"
        >
          <Text fontSize="14px">2023, Made by Amol Thakare.</Text>
        </Box>
      </Box>
    </>
  );
}
