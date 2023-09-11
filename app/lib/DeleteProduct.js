"use client"

import { Button } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { MdDelete } from "react-icons/md"

const DelelteProduct = (props) => {
    const router = useRouter()
    console.log(props.id)
    const deleteRecord = async () => {
        const axios = require('axios');
        let config = {
          method: 'delete',
          maxBodyLength: Infinity,
          url: `http://localhost:3000/api/products/${props.id}`,
          headers: { }
        };
        
        axios.request(config)
        .then((response) => {
          console.log(response.data);
          if(response.data.success){
            alert("Product Deleted")
            router.push("/Home/Products/productList")
          }
        })
        .catch((error) => {
          console.log(error);
        });
        
    }
    return <Button size="sm" bg="transparent" fontSize='25px'  color="black" onClick={deleteRecord}><MdDelete /></Button>
}
export default DelelteProduct