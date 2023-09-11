"use client";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { FiHome, FiUsers } from "react-icons/fi";
import {
  MdOutlineAddShoppingCart,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";

const hoverNav = {
  color: "orange",
};

const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button color="black" ref={btnRef} onClick={onOpen}>
        <AiOutlineMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w='200px'>
          <DrawerCloseButton color='white' />
            <Flex
              bg="#2C3E50"
              boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
              flexDir="column"
              color="white"
              justifyContent="space-between"
              borderRight="1px solid gray"
            >
              <Flex p="5%" flexDir="column" w="100%" as="nav">
                <Heading my="2rem" fontSize="25px">
                  Blogs
                </Heading>
                <Flex alignItems="center" mb="1rem" _hover={hoverNav}>
                  <Box me="1rem">
                    <FiHome size="25px" />
                  </Box>
                  <Box>
                    <Link href="/Home">Home Page</Link>
                  </Box>
                </Flex>
                <Flex alignItems="center" mb="1rem" _hover={hoverNav}>
                  <Box me="1rem">
                    <FiUsers size="25px" />
                  </Box>
                  <Box>
                    <Link href="/Home/userList">Users List</Link>
                  </Box>
                </Flex>
                <Flex mb="1rem" alignItems="center" _hover={hoverNav}>
                  <Box me="1rem">
                    <MdOutlineProductionQuantityLimits size="25px" />
                  </Box>
                  <Box>
                    <Link href="/Home/Products/productList">Product List</Link>
                  </Box>
                </Flex>
                <Flex mb="1rem" alignItems="center" _hover={hoverNav}>
                  <Box me="1rem">
                    <MdOutlineAddShoppingCart size="25px" />
                  </Box>
                  <Box>
                    <Link href="/Home/Products">Add Product</Link>
                  </Box>
                </Flex>
                <Flex mb="1rem" alignItems="center" _hover={hoverNav}>
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
                  <Flex flexDir="column" ml={4}>
                    <Heading as="h3" size="sm">
                      Hammad Shaikh
                    </Heading>
                    <Text color="gray">Admin</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerExample;
