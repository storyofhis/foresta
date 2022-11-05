import { Button, Flex, FormControl, FormLabel, Heading, Input, Stack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import AxiosLogin from "../../Infrastructure/Login/AxiosLogin";
import store from "../../Redux/Store";
import { store_petugas } from "../../Redux/Petugas/Petugas.actions";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();
  const handleLogin = () => {
    AxiosLogin.request(email, password, (response) => {
      console.log("response nya : ", response);
      if (!response) {
        console.log("gagal login");
        return;
      }
      store.dispatch(
        store_petugas({
          email: email,
          password: password,
        })
      );
      history.push("/dashboard");
    });
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={4} w={"full"} maxW={"md"} bg={useColorModeValue("white", "gray.700")} rounded={"xl"} boxShadow={"lg"} p={6} my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Enter new password
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input placeholder="your-email@example.com" _placeholder={{ color: "gray.500" }} type="email" onChange={(e) => handleEmailChange(e.target.value)} />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" onChange={(e) => handlePasswordChange(e.target.value)} />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
