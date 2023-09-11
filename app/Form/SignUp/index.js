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
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const toast = useToast();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    number: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const toastify = (title, status) => {
    toast({
      status: status,
      title: title,
      position: "top-right",
      isClosable: true,
    });
  };

  const addUser = async (e) => {
    e.preventDefault();
    console.log(user.name, user.email, user.number, user.password);
    // const axios = require("axios");

    // if(!user.email || !user.name || !user.password || !user.number){
    //     toastify("Please fill the all fields","error")
    // }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/users/SignUp",
      headers: {
        "Content-Type": "application/json",
      },
      data: user,
    };

    await axios
      .request(config)
      .then((response) => {
        if (response.data.success) {
          toastify(response.data.msg, "success");
          router.push("/Form/Login");
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
      <Box p="3rem">
        <Heading textAlign="center">SignUp</Heading>
        <Box>
          <FormControl mb="1rem" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              value={user.name}
              name="name"
              onChange={handleChange}
              type="email"
              placeholder="First name"
            />
          </FormControl>
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
          <FormControl mb="1rem" isRequired>
            <FormLabel>Number</FormLabel>
            <Input
              value={user.number}
              name="number"
              onChange={handleChange}
              type="number"
              placeholder="Phone Number"
            />
          </FormControl>
          <FormControl mb="1rem" isRequired>
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
        <Flex alignItems='center'>
        <Button me="2rem" onClick={addUser} size="sm" bg="skyblue">
          SignUp
        </Button>
        <Box color="blue" _hover={{color:"red"}}>
          <Link color="blue" href="/Form/Login">
            Login
          </Link>
        </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SignUp;
