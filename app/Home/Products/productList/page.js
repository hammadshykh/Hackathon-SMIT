"use client";
import Container from "@/app/Components/Container";
import DelelteProduct from "@/app/lib/DeleteProduct";
import {
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  Spinner,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

const SkLoading = () => {
  return (
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

const ProductLists = () => {
  const [productLists, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    productList();
  }, []);

  const productList = async () => {
    const axios = require("axios");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/products",
      caches: "no-caches",
      headers: {
        "Content-Type": "application/json",
      },
    };

    setLoading(true);

    await axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setProductList(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });

    setLoading(false);
  };
  return (
    <>
      <Box ms="2rem" w={{ md: "800px" }} m="0 auto">
        {productLists.length == 0 ? (
          <Box display="flex" alignItems="center">
            <Heading me="1rem">Loading...</Heading>
            <Spinner fontSize="50px" speed="1s" color="red.500" />
          </Box>
        ) : (
          <>
            <Box>
              <Heading textAlign="center" py="2rem">
                Product List
              </Heading>
              <TableContainer>
                <Table
                  variant="striped"
                  colorScheme="teal"
                  size="lg"
                  maxWidth="60%"
                  mx="auto"
                >
                  <TableCaption>
                    Products Store in mongoDb DataBase
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Price</Th>
                      <Th>Company</Th>
                      <Th>Category</Th>
                      <Th>Edit</Th>
                      <Th>Delete</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {productLists.map((v, i) => (
                      <Tr key={i}>
                        <Td>{v.name}</Td>
                        <Td>{v.price}</Td>
                        <Td>{v.company}</Td>
                        <Td>{v.category}</Td>
                        <Td>
                          <Button
                            size="sm"
                            bg="transparent"
                            fontSize="25px"
                            color="orange"
                          >
                            <Link href={`/Home/Products/${v._id}`}>
                              <FaEdit />
                            </Link>
                          </Button>
                        </Td>
                        <Td>
                          <DelelteProduct id={v._id} />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default ProductLists;
