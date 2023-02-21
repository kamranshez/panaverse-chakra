import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

export default function TopContainer() {
  return (
    <>
      <Box
        backgroundImage={"/images/background.webp"}
        backgroundSize="contain"
        py="20"
      >
        <HStack>
          {/* Left box */}
          <Box width={"50%"} color="white" pl={44}>
            <Heading fontSize={52}>Build your next idea even faster</Heading>
            <Text lineHeight={"8"}>
              One Year Panaverse DAO Earn as you Learn Program. Consolidating
              Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and
              Ambient Computing/IoT Technologies
            </Text>
            <Box mt="5">
              <Button colorScheme={"blue"}>Buy Now</Button>
              <Button colorScheme={"blue"} variant={"outline"} ml="5">
                View Components
              </Button>
            </Box>
            <Box pt="5">
              <HStack>
                <AvatarGroup size="md" max={3}>
                  <Avatar name="Zia Khan" src="/images/zia.jpg" />
                  <Avatar name="Adil Altaf" src="/images/adil.jpg" />
                  <Avatar name="Ovais Ali" src="/images/ovais.jpg" />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />

                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </AvatarGroup>
                <Text>
                  Created by: {"  "}
                  <Link
                    target={"_blank"}
                    href="https://www.youtube.com"
                    color="blue"
                  >
                    Ovais Ali
                  </Link>
                  {" "} & {" "}   Created by {" "}
                  <Link
                    target={"_blank"}
                    href="https://www.youtube.com"
                    color="blue"
                  >
                    Kamran
                  </Link>
                
                </Text>
              </HStack>
            </Box>
          </Box>
          {/* Right box */}
          <Box w={"50%"}>
            <Image src="/images/banner.png"></Image>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
