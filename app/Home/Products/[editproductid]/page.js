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
import Link from "next/link";
import { useEffect, useState } from "react";

const UpdateProducts = ({ params }) => {
  useEffect(() => {
    getProductIdDetail();
  }, []);

  console.log(params.editproductid);
  const [userProduct, setUserProduct] = useState({
    name: "",
    price: "",
    company: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserProduct({ ...userProduct, [name]: value });
  };

  const getProductIdDetail = async () => {
    const productId = params.editproductid;
    const axios = require("axios");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:3000/api/products/${productId}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        let productData = response.data.result;
        if (response.data.success) {
          setUserProduct({
            name: productData.name,
            category: productData.category,
            company: productData.company,
            price: productData.price,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateProduct = async () => {
    const productId = params.editproductid;
    const axios = require("axios");
    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `http://localhost:3000/api/products/${productId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: userProduct,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        if (response.data.result) {
          alert("Product has been updated");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Box>
        <Box mt="80px">
          <Heading mb="2rem">Add Products</Heading>
          <Flex justifyContent="center" alignItems="center">
            <Box w="600px">
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
              <Flex alignItems='center'>
                <Button onClick={updateProduct} color="blue" size="sm">
                  Update
                </Button>
                <Box ms='1rem' color="green" size="sm">
                  <Link href="/Home/Products/productList">Go Back</Link>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default UpdateProducts;
