import { useEffect, useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import ProductCard from "../comman/ProductCard";
import axios from "axios";


function Products(){

    const [product , setProduct] = useState([]); 

    useEffect(()=>{

        axios.get("https://a2zithub.org/dairy/abi/product_det").then((res)=>{
            console.log("server response", res.data);
            setProduct(res.data)
        })

    },[]);

    return(
        <>
        <Navbar/>
        <br />
        <br />
        <h1 className="text-center text-5xl font-bold">Products</h1>

        <br /><br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5">

        {product.map((val,index)=>(

           <ProductCard  data={val}/>

        ))}
        </div>

        <Footer/>
        </>
    )
}

export default Products;