import { Box, Button, Container, Flex, Heading, HStack, Input, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function Newsletter() {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Container bg={colorMode == "light" ? "blue.50" : "gray.500"} maxWidth="100%" py={15}>
        <Flex justifyContent={"space-around"} flexDirection={{base:"column",md:"row"}}>
          <Box>
            <Heading fontWeight={"semibold"}>Join our Newletter</Heading>
            <Text>
              Dont miss any more news and subscribe to our newsletter today.
            </Text>
          </Box>
          <Box>
          <HStack>
            <Input placeholder="Enter your Email"></Input>
            <Button py={10}>Subscribe</Button>
          </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
