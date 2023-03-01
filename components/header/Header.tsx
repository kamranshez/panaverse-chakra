"use client";
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon, MoonIcon } from '@chakra-ui/icons'

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <>
      {/* Left area of navigation */}
      <Box  as="header" position={"sticky"} top="0" zIndex={"1"}>
        <Flex justifyContent={"space-around"} alignItems={"Center"} bg="white" py="5">
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
          <Box as="span" pl={"15px"}>
              <SearchIcon w={25} h={25} ></SearchIcon>
          </Box>
          <Box as="span" px={"15px"} > 
          <MoonIcon w={25} h={25}  />
          </Box>
            <Link href="https://www.piaic.org" target={"_blank"}>
            <Button variant={"outline"}>Go to PIAIC</Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
