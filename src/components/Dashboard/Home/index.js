import React from "react";
import Navbar from "../Navbar";
import { Footer } from "../../../Utils";
import {
  InputGroup,
  Input,
  InputRightElement,
  Image,
  useBreakpointValue,
  Text,
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import HomeSVG from "../../../assets/HomeSVG.svg";
import Daun from "../../../assets/Daun.svg";
import { BsSearch } from "react-icons/bs";
const Home = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Navbar />
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Image src={HomeSVG} />
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Foresta adalah platform pembelian bibit pohon secara online. Bibit pohon akan ditanam oleh organisasi pecinta lingkungan. Mari ikut berkontribusi selamatkan bumi dengan menanam pohon melalui Foresta.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <InputGroup size="md">
                <Input pr="4.5rem" type={"text"} placeholder="Cari Bibit Pohon" />
                <InputRightElement width="4.5rem">
                  <IconButton ml={2} icon={<BsSearch />} isRound="true" />
                </InputRightElement>
              </InputGroup>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={"Login Image"} width={"550px"} src={Daun} />
        </Flex>
      </Stack>
      <Footer />
    </>
  );
};

export default Home;
