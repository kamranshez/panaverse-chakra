import { SearchIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaFacebook, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Box>
      <Container maxWidth={"100%"} bg={"blackAlpha.100"} py={4}>
        <Flex justifyContent={"space-around"} alignItems="center">
          {/* left */}
          <Box>© 2023 Panaverse. All rights reserved.</Box>

          {/* right */}
          <Box>
            <HStack>
              <Box color={"gray"} pl="4">
                <Link href={"https://github.com"} target="_blank">
                  <FaGithub size={25} />
                </Link>
              </Box>

              <Box color={"gray"} pl="4">
                <Link href={"https://facebook.com"} target="_blank">
                  <FaFacebook size={25} />
                </Link>
              </Box>
              <Box color={"gray"} pl="4">
                <Link href={"https://discord.com"} target="_blank">
                  <FaDiscord size={25} />
                </Link>
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
