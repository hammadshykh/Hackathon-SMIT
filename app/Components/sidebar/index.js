"use client";
import React, { useState } from "react";
import {
  Flex,
  Text,
  Divider,
  Avatar,
  Heading,
  Button,
  Box,
} from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
// import { IoPawOutline } from 'react-icons/io5'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BiLogOutCircle } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Link from "next/link";

const hoverNav = {
  color: "orange",
};

const Sidebar = () => {
  return (
    <Flex
      h="98vh"
      bg="#2C3E50"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      flexDir="column"
      px="30px"
      mt="30px"
      color="white"
      justifyContent="space-between"
      borderRight="1px solid gray"
    >
      <Flex p="5%" flexDir="column" w="100%" as="nav">
        <Heading my="2rem" fontSize="25px">
          Blogs
        </Heading>
        <Flex alignItems="center" mb="1.5rem" _hover={hoverNav}>
          <Box me="1rem">
            <FiHome size="25px" />
          </Box>
          <Box>
            <Link href="/Home">Home Page</Link>
          </Box>
        </Flex>

        <Flex mb="1.5rem" alignItems="center" _hover={hoverNav}>
          <Box me="1rem">
            <MdOutlineProductionQuantityLimits size="25px" />
          </Box>
          <Box>
            <Link href="/Home/Products/productList">Product List</Link>
          </Box>
        </Flex>
        <Flex mb="1.5rem" alignItems="center" _hover={hoverNav}>
          <Box me="1rem">
            <MdOutlineAddShoppingCart size="25px" />
          </Box>
          <Box>
            <Link href="/Home/Products">Add Product</Link>
          </Box>
        </Flex>
        <Flex alignItems="center" mb="1.5rem" _hover={hoverNav}>
          <Box me="1rem">
            <FiUsers size="25px" />
          </Box>
          <Box>
            <Link href="/Home/userList">Users List</Link>
          </Box>
        </Flex>
        <Flex mb="1.5rem" alignItems="center" _hover={hoverNav}>
          <Box me="1rem">
            <BiLogOutCircle size="25px" />
          </Box>
          <Box>
            <Link href="/">Log Out</Link>
          </Box>
        </Flex>
      </Flex>
      <Flex p="5%" flexDir="column" w="100%" mb={4}>
        <Divider />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex flexDir="column" ml={4}>
            <Heading as="h3" size="sm">
              Hammad Shaikh
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
