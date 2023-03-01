import { Box, Button, Container, Flex, Heading, HStack, Input, Text } from "@chakra-ui/react";
import React from "react";

export default function Newsletter() {
  return (
    <Box>
      <Container bg={"gray.50"} maxWidth="100%" py={15}>
        <Flex justifyContent={"space-around"}>
          <Box>
            <Heading fontWeight={"semibold"}>Join our Newletter</Heading>
            <Text>
              Dont miss any more news and subscribe to our newsletter today.
            </Text>
          </Box>
          <Box>
          <HStack>
            <Input placeholder="Enter your Email"></Input>
            <Button px={10}>Subscribe</Button>
          </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
