import { Box, Button, Center, Container, Flex, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import React from "react";
import { IoIosSettings, IoIosSpeedometer } from "react-icons/io";
import { FaCommentDollar } from "react-icons/fa";
import { MdSupportAgent} from "react-icons/md";



export default function Highlights() {
  return (
    <Box py={50} as="section">
      {/* feature box */}
      <Box textAlign={"center"}>
        <Text fontWeight={"bold"} color={"blue.500"} fontSize="48px">
          Highlights
        </Text>
        <Heading fontWeight={"semibold"}>Why Us?</Heading>
        <Text fontSize={20} py="3">
          Because these beautiful and responsive React components will help you
          realize your next idea in no time.
        </Text>
      </Box>
      <Container maxWidth={1200}>
      <SimpleGrid columns={{base:1,md:2,lg:4}} gap={5}>

      {/* card 1 */}
        <Card align="center">
          <CardHeader>
          <Center color={"blue.500"}>

          <IoIosSpeedometer size={"80"} />
          </Center>
          
            <Heading size="md"> Speed up workflow</Heading>
          </CardHeader>
          <CardBody>
            <Text align={"center"}>
            Quickly put together different components to create an nearly infinite combination of user experiences.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>

        {/* card 2 */}
        <Card align="center">
          
          <CardHeader>
          <Center color="blue.500">
          <FaCommentDollar size={80}/>
          </Center>
            <Heading size="md">Save good money</Heading>
          </CardHeader>
          <CardBody>
            <Text align={"center"}>
            Quickly put together different components to create an nearly infinite combination of user experiences
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
      
      {/* card 3 */}
      <Card align="center">
          <CardHeader>
          <Center color={"blue.500"}>
            <IoIosSettings  size={80}/>
            </Center>
            <Heading size="md"> Easily customizable</Heading>
            
            
          </CardHeader>
          <CardBody>
            <Text align={"center"}>
            Quickly put together different components to create an nearly infinite combination of user experiences.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>

        {/* card 4 */}
        <Card align="center">
          <CardHeader>
         <Center color="blue.500">
          <MdSupportAgent  size={80}/>
          </Center>
            <Heading size="md"> Support Us</Heading>
          </CardHeader>
          <CardBody>
            <Text align={"center"}>
            Quickly put together different components to create an nearly infinite combination of user experiences.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
      
      </SimpleGrid>
      </Container>
    </Box>
  );
}
