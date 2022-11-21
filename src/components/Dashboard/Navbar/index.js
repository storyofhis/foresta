import { ReactNode } from "react";
import { Box, Flex, Avatar, HStack, Link, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Stack, Image, Text } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import { VStack, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import React, { useState, useEffect } from "react";
import logo from "../../../assets/logo.svg";
import { CiUser } from "react-icons/ci";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { Badge } from "@chakra-ui/react";
import { commerce } from "../../../lib/commerce";

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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isDark = colorMode === "dark";
  const location = useLocation();

  const [cart, setCart] = useState({});
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setItems(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleAddCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

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
                  {location.pathname === "/bibit" && (
                    <>
                      <Link href="/cart">
                        <Badge> {cart.total_items} </Badge>
                        <IconButton ml={2} icon={<FiShoppingCart />} isRound="true" />
                      </Link>
                    </>
                  )}
                  <Link href="/user" target="_blank">
                    <IconButton ml={2} icon={<CiUser />} isRound="true" />
                  </Link>
                </Stack>
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
              </Flex>
            </VStack>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
