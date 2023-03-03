import { Box, Button, Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
export default function Faq() {
  return (
    <Box>
    <Container maxWidth={1200} my="16">
    <Flex flexDirection={{base:"column",md:"row"}}> 
      {/* Left section */}
      <Box flex={2}>
        <Box>
          <Text fontWeight={"bold"} color={"blue.500"} fontSize="48px">
            Support
          </Text>
          <Heading fontWeight={"semibold"}>FAQs?</Heading>
          <Text fontSize={20} py="3">
            Everything you need to know about the product and billing. For
            questions about licensing, please see our licensing page.
          </Text>
        </Box>
      </Box>
      {/* Left Section section end */}
      {/* Right section */}
      <Box flex={3}>
        {/* Accoarding Start */}
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 3 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* According End */}
        <Button display="block" mx={"auto"} mt="5">Show More</Button>
      </Box>
      {/* Right Section end */}
      </Flex>
    </Container>
    </Box>
  );
}
