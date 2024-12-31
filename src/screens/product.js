import React from "react";
import Navbar from "../nav_bar/navbar";
import { useParams } from "react-router-dom";
import  axios  from "axios";
import { useState } from "react";
async function Product (){
    const use_params = useParams();
    console.log(use_params)
    const [data,setdata] = useState([])

const response = await axios.get(`https://fakestoreapi.com/products/${use_params.restaurant}`)
if(response.status ===200 ){
    setdata(response.data)
}
        return (
        <>
        <div>

            <h2>
                Products
            </h2>
            <h4>
                {data}
            </h4>
        </div>
        </>
    )
}
export default Product;