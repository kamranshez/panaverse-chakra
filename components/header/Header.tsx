"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <>
      {/* Left area of navigation */}
      <Box pt={"5px"}>
        <Flex justifyContent={"space-around"} alignItems={"Center"}>
          <Box>
            <HStack>
              <Image src="/images/Logo.webp" alt="logo"></Image>

              <List>
                <HStack align={"center"} spacing={10} ml="40px" fontWeight={"bold"}>
                  <ListItem>Home</ListItem>
                  <ListItem>About</ListItem>
                  <ListItem>Contact</ListItem>
                </HStack>
              </List>
            </HStack>
          </Box>

          {/* Right Areas of Navigation*/}
          <Box>
            <Button variant={"outline"}>Go to PIAIC</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
