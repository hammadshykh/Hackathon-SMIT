"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
const HomePage = () => {
  return (
    <>
      <Flex>
        <Box p={6}>
          <Heading as="h1" size="2xl" mb={4}>
            I am Hammad Shaikh
          </Heading>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Hackaton in SMIT Hyderabad
          </Heading>
          <Text fontSize="xl" mb={6}>
            Build amazing web applications with Chakra UI and React.
          </Text>
          <Button colorScheme="blue" size="lg">
            <Link href='/Home/Products'>
            Add to Product
            </Link>
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default HomePage;
