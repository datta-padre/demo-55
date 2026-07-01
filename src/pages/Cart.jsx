import { useEffect, useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";
import "../Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const [cartinfo, setCartinfo] = useState([]);
  const [subtotal, setSubTotal] = useState(0);


  function getData(){
     const obj = {token: localStorage.getItem("token")};

    axios.post("https://a2zithub.org/dairy/abi/cart_list", obj).then((res) => {
      setCartinfo(res.data);

      var sum = 0;

      res.data.map((val,index)=>{

        sum = sum + val.price * val.qty;

      })

      setSubTotal(sum)

    });
  }

  useEffect(()=>{
     getData()
  },[]);


  function removeCart(product_econ_cart_id) {
    var obj = {product_econ_cart_id: product_econ_cart_id , token: localStorage.getItem("token")};

    axios.post("https://a2zithub.org/dairy/abi/remove_cart_qty", obj).then((res) => {
         getData()
      });
  }

  function incQty(product_econ_cart_id) {
    var obj = {product_econ_cart_id: product_econ_cart_id,token: localStorage.getItem("token")};

    axios.post("https://a2zithub.org/dairy/abi/inc_cart_qty", obj).then((res) => {
        getData();
      });
  }

  function decQty(product_econ_cart_id) {
    var obj = {product_econ_cart_id: product_econ_cart_id,token: localStorage.getItem("token")};

    axios.post("https://a2zithub.org/dairy/abi/dec_cart_qty", obj).then((res) => {
        getData();
      });
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <h1 className="text-center text-5xl font-bold">Cart Page</h1>
      <br />
      <br />

      <div className=" flex justify-center">
        <table className="text-center w-[90%]">
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>QTY</th>
            <th>Total</th>
            <th>Action</th>
          </tr>

          {cartinfo.map((val, index) => (
            <tr>
              <td className="flex justify-center">
                <img className="w-[100px]" src={val.product_img} alt="" />
              </td>
              <td>{val.product_name}</td>
              <td>{val.price}</td>
              <td>
                <button
                  onClick={() => decQty(val.product_econ_cart_id)}
                  className="border p-1 px-2 m-2"
                >
                  -
                </button>
                {val.qty}
                <button
                  onClick={() => incQty(val.product_econ_cart_id)}
                  className="border p-1 px-2 m-2"
                >
                  +
                </button>
              </td>
              <th>{val.price * val.qty}</th>
              <td>
                <button
                  onClick={() => removeCart(val.product_econ_cart_id)}
                  className="p-2 border px-2"
                >
                  {" "}
                  &#10005;
                </button>
              </td>
            </tr>
          ))}
        </table>

      </div>

      {(cartinfo.length == 0)?(
       <div className="text-center"><Link to="/products"><button className="border mt-5 px-3 bg-blue-600 py-2">Shop Now</button></Link></div>
       ):(
       <div><h1 className="text-center"><b className="text-4xl">Total : {subtotal} &#8377;</b> <Link to="/checkout"><button className="border px-4 rounded py-3 bg-green-500 font-bold ml-9 text-white ">Checkout</button></Link></h1> </div>
       )}

      

      <br />
      <br />
      <Footer />
    </>
  );
}

export default Cart;
