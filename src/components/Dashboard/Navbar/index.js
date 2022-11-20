import { ReactNode } from "react";
import { Box, Flex, Avatar, HStack, Link, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, Image, Text } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import { VStack, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import React from "react";
import logo from "../../../assets/logo.svg";
import { CiUser } from "react-icons/ci";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Links = ["dashboard", "bibit", "PohonKu"];

const NavLink = ({ children }) => (
  <BrowserRouter>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={`/${children}`}
    >
      {children}
    </Link>
  </BrowserRouter>
);
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box bg={useColorModeValue("#7ACB90", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: "none" }} onClick={isOpen ? onClose : onOpen} />
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Heading ml="8" size="md" fontWeight="semibold" color="green.400">
              <Image src={logo} />
            </Heading>
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <VStack p={9}>
              <Flex w="100%">
                <Spacer />
                <Stack direction="row" spacing={4} align="center">
                  <Link href="/user" target="_blank">
                    <IconButton ml={2} icon={<CiUser />} isRound="true" />
                  </Link>
                </Stack>
                <IconButton ml={8} /* </Flex>colorScheme="#006644" */ icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
              </Flex>
            </VStack>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
