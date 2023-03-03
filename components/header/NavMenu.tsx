import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function NavMenu({ horizontal = true }) {
  const { colorMode } = useColorMode();
  return (
    <>
      <List 
        fontWeight={"bold"}
        color={colorMode == "light" ? "#4A5568" : "white"}
        
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ base: "left", md: "center" }}
        >
          <ListItem>
            <Link href="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="/about">About</Link>
          </ListItem>

          <ListItem>
            <Link href="/contact">Contact</Link>
          </ListItem>
        </Stack>
      </List>
    </>
  );
}
