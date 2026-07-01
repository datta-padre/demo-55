import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Order_det(){
    

    const {order_id} = useParams();

    useEffect(()=>{

        const obj ={
            "token":localStorage.getItem("token"),
            "order_id":order_id
        }

        axios.post("https://a2zithub.org/dairy/abi/order_det",obj).then((res)=>{
            console.log("response",res.data)
        })

    },[])

    return(
        <>
        <Navbar/>
        <br /><br />
        <h1 className="text-center font-bold text-5xl">Order Detail {order_id}</h1>
        <br /><br />
        <Footer/>
        </>
    )
}

export default Order_det;