
import { StarIcon } from "@chakra-ui/icons";

import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BiRocket } from 'react-icons/bi';
import { TbMoonStars } from 'react-icons/tb';
import { IoIosBrush } from 'react-icons/io';
import { HiCodeBracket } from 'react-icons/hi2';




import React from "react";


export default function Features() {
  return (
    <>
      <Box py={50} as="section">
        {/* feature box */}
        <Box textAlign={"center"}>
          <Text fontWeight={"bold"} color={"blue.500"} fontSize="48px">
            Features
          </Text>
          <Heading fontWeight={"semibold"}>What you can expect?</Heading>
          <Text fontSize={20} py="3">
            A bundle of 220+ ready-to-use, responsive and accessible components
            with clever structured sourcecode files.
          </Text>
        </Box>

        {/* 6 feature box  */}
        <Container maxWidth={1200} mt={10}>
          <Box>
            {/* feature1 box */}
          <SimpleGrid columns={{base:1,md:2,lg:3}} spacing={10}>
            <Box>
              <HStack>
                <Box color="blue.500">
                <StarIcon w={10} h={10} />
                </Box>
                <Box>
                  <Heading fontSize={18}>220+ Components</Heading>
                  <Text>
                    All our components come with a light and dark color mode by
                    default.
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/* 1 feature box end */}

            {/* feature2 box */}
            <Box>
              <HStack>
                {/* <StarIcon w={10} h={10} /> */}
                <Box color="blue.500">
                <BiRocket  size={50}/>
                </Box>
                <Box>
                  <Heading fontSize={18}>Themable</Heading>
                  <Text>
                  All our components come with a light and dark color mode by default.
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/* 2 feature box end */}

            {/* feature3 box */}
            <Box>
              <HStack>
              <Box color="blue.500">
                <TbMoonStars size={50} />
              </Box>
                <Box>
                  <Heading fontSize={18}>Light & Dark</Heading>
                  <Text>
                  All our components come with a light and dark color mode by default.
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/* 3 feature box end */}

            {/* feature4 box */}
            <Box>
              <HStack>
              <Box color="blue.500">
              <IoIosBrush size={50} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Themable</Heading>
                  <Text>
                  All our components come with a light and dark color mode by default.
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/* 4 feature box end */}

            {/* feature5 box */}
            <Box>
              <HStack>
              <Box color="blue.500">
                
                <HiCodeBracket size={50} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Developer Friendly</Heading>
                  <Text>
                  All our components come with a light and dark color mode by default.
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/* 5 feature box end */}

            {/* feature6 box */}
            <Box>
              <HStack>
                
              <Box color="blue.500">
                <StarIcon w={10} h={10} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Accessible</Heading>
                  <Text>
                  All our components come with a light and dark color mode by default.
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/* 6 feature box end */}
          </SimpleGrid>
          </Box>
          {/* 6 featuer box end */}
        </Container>
      </Box>
    </>
  );
}
