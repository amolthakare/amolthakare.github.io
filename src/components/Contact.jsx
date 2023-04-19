// import {
//   Box,
//   Button,
//   Flex,
//   Image,
//   Input,
//   Text,
//   Textarea,
// } from "@chakra-ui/react";
// import React from "react";
// import conatct from "../assets/conatct.png";

// const Contact = () => {
//   return (
//     <Flex
//       w="80%"
//       m="auto"
//       mt={{ base: "20", md: "40" }}
//       alignItems="center"
//       gap={{ base: "10", md: "20" }}
//       flexDirection={{ base: "column", md: "row" }}
//     >
//       <Box w="100%">
//         <Image src={conatct} alt="contact" />
//       </Box>
//       <Box w="100%" px={{ base: "0", md: "10" }}>
//         <Text fontSize="30px" fontWeight="600">
//           Get In Touch
//         </Text>
//         <Flex
//           mt="5"
//           w="100%"
//           alignItems="center"
//           justifyContent="space-between"
//           gap="5"
//         >
//           <Flex
//             alignItems="center"
//             gap="2"
//             p="2"
//             border="1px solid"
//             px={{ base: "3", md: "7" }}
//             borderRadius="md"
//             bg="#0077b5"
//             color="#f2f2f2"
//           >
//             <Text fontSize={{ base: "14px", md: "16px" }}>Linkedin</Text>
//             <Box display={{ base: "none", md: "flex" }}>
//               <i className="fa-brands fa-linkedin-in"></i>
//             </Box>
//           </Flex>
//           <Flex
//             alignItems="center"
//             gap="2"
//             p="2"
//             border="1px solid"
//             px={{ base: "3", md: "7" }}
//             borderRadius="md"
//             color="#f2f2f2"
//             bg="#161b22"
//           >
//             <Text fontSize={{ base: "14px", md: "16px" }}>Github</Text>

//             <Box display={{ base: "none", md: "flex" }}>
//               <i className="fa-brands fa-github"></i>
//             </Box>
//           </Flex>
//           <Flex
//             alignItems="center"
//             gap="2"
//             p="2"
//             border="1px solid"
//             px={{ base: "3", md: "7" }}
//             borderRadius="md"
//             bg="#00e361"
//           >
//             <Text fontSize={{ base: "14px", md: "16px" }}>HackerRank</Text>
//             <Box display={{ base: "none", md: "flex" }}>
//               <i className="fa-brands fa-hackerrank"></i>
//             </Box>
//           </Flex>
//         </Flex>
//         <Box mt="8">
//           <Input position="static" placeholder="Name" />
//         </Box>
//         <Box mt="5">
//           <Input position="static" placeholder="Email" />
//         </Box>
//         <Box mt="5">
//           <Textarea position="static" placeholder="Message" />
//         </Box>
//         <Button
//           mt="6"
//           px="8"
//           bg="#407bff"
//           _hover={{ bg: "#1f63f6" }}
//           size="lg"
//           fontSize="16px"
//           gap="2"
//           letterSpacing="0.5px"
//           color="white"
//           position="static"
//           w="100%"
//         >
//           Send <i className="fa-solid fa-arrow-right"></i>
//         </Button>
//       </Box>
//     </Flex>
//   );
// };

// export default Contact;
