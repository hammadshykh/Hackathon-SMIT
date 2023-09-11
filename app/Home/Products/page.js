"use client";
import {
  Box,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const Products = () => {
  const toast = useToast()
  const [userProduct, setUserProduct] = useState({
    name: "",
    price: "",
    company: "",
    category: "",
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
    const { name, value } = e.target;
    console.log(name, value);
    setUserProduct({ ...userProduct, [name]: value });
  };
  const addProduct = async () => {
    const axios = require("axios");

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/products",
      headers: {
        "Content-Type": "application/json",
      },
      data: userProduct,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          toastify(response.data.msg,"success")
        } else {
          toastify(response.data.msg,"error")
        }
      })
      .catch((error) => {
        console.log(error);
      });
      setUserProduct({
        category:"",
        company:"",
        name:"",
        price:""
      })
  };
  return (
    <>
      <Box px={['2rem','2rem']}>
        <Box mt='80px'>
          <Heading my='2rem'>Add Products</Heading>
          <Flex justifyContent="center" alignItems="center">
            <Box
              w={{md:'600px'}}
            >
              <FormControl mb="2rem" isRequired>
                <Input
                  onChange={handleChange}
                  value={userProduct.name}
                  name="name"
                  type="text"
                  placeholder="Add Product Name"
                />
              </FormControl>
              <FormControl mb="2rem" isRequired>
                <Input
                  onChange={handleChange}
                  value={userProduct.price}
                  name="price"
                  type="text"
                  placeholder="Add Product Price"
                />
              </FormControl>
              <FormControl mb="2rem" isRequired>
                <Input
                  onChange={handleChange}
                  value={userProduct.company}
                  name="company"
                  type="text"
                  placeholder="Add Product Company"
                />
              </FormControl>
              <FormControl mb="2rem" isRequired>
                <Input
                  onChange={handleChange}
                  value={userProduct.category}
                  name="category"
                  type="text"
                  placeholder="Add Product Category"
                />
              </FormControl>
              <Button color="blue" size="sm" onClick={addProduct}>
                Add Product
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Products;
