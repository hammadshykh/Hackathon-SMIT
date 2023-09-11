"use client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
// import { User } from "@/app/lib/models/users";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  const router = useRouter();
  const toast = useToast(); 
  const [loading,setLoading] = useState(false)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const toastify = (title, status) => {
    toast({
      status: status,
      title: title,
      position: "top-right",
      isClosable: true,
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginUser = async () => {
    console.log(user.email);
    console.log(user.password);

    let data = JSON.stringify({
      email: user.email,
      password: user.password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/users/Login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    // router.push("/Home")
    
    await axios
    .request(config)
    .then((response) => {
        if (response.data.success) {
            toastify(response.data.msg, "success");
            setLoading(true)
          router.push("/Home");
        } else {
          toastify(response.data.msg, "error");
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Flex alignItems="center">
        <Box
          bgImage="url('/mongodb.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          h="100vh"
          w="50%"
        ></Box>
        <Box w="50%">
          <Box p="3rem">
            <Heading>Login</Heading>
            <Box my="1rem">
              <FormControl mb="1rem" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  value={user.email}
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  value={user.password}
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                />
              </FormControl>
            </Box>
            <Flex>
              <Button
                colorScheme="facebook"
                me="2rem"
                onClick={loginUser}
                size="sm"
                bg="blue"
                color="white"
              >
                Login
              </Button>
              <Box color="blue" _hover={{ color: "red" }}>
                <Link color="blue" href="/">
                  SignUp
                </Link>
              </Box>
            </Flex>
          </Box>
        {loading ? <Heading>Loading..</Heading>:
        ""}
        </Box>
      </Flex>
    </>
  );
};

export default Login;
