import React from "react";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 2, xl: 2 }} spacing="10px">
        <Box>
          <Text>
            <span>
              <i className="fa-solid fa-envelope" />
            </span>{" "}
            amolthakare631@gmail.com
          </Text>
        </Box>
        <Box>
          <Text>
            <a id="contact-phone" href="tel:+91-9657654460">
              <span>
                <i className="fa-solid fa-phone" />
              </span>{" "}
              +91-9657654460
            </a>
          </Text>
        </Box>
      </SimpleGrid>
      <Text textStyle="footerText">
        Created By Amol | 2022 All rights reserved.
      </Text>
    </Container>
  );
};

export default Footer;
