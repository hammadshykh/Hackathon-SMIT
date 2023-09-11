"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const UserList = () => {
  const [userLists, setUserList] = useState([]);

  useEffect(() => {
    const userList = async () => {
      // const axios = require('axios');
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/api/users/SignUp",
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios
        .request(config)
        .then((response) => {
          console.log(response.data);
          setUserList(response.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    userList();
  }, []);

  return (
    <>
      <Box>
        {userLists.length == 0 ? (
          <Heading>Loading...</Heading>
        ) : (
          <>
            <Heading my="2rem" textAlign="center">
              Users List
            </Heading>
            <TableContainer>
              <Table
                variant="striped"
                colorScheme="teal"
                size="md"
                maxWidth="60%"
                mx="auto"
              >
                <TableCaption>Users Store in mongoDb DataBase</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Number</Th>
                    <Th>Edit</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {userLists.map((v, i) => (
                    <Tr key={i}>
                      <Td>{v.name}</Td>
                      <Td>{v.email}</Td>
                      <Td>{v.number}</Td>
                      <Td>
                        <Button
                          size="sm"
                          bg="transparent"
                          fontSize="25px"
                          color="black"
                        >
                          <FaEdit />
                        </Button>
                      </Td>
                      <Td>
                        <Button
                          size="sm"
                          bg="transparent"
                          fontSize="25px"
                          color="black"
                        >
                          <MdDelete />
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </>
        )}
      </Box>
    </>
  );
};

export default UserList;
