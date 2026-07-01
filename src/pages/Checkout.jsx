import { useState } from "react";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {

    const navigate = useNavigate()

    const [area , setArea] = useState("");
    const [city , setCity] = useState("");
    const [district , setDistrict] = useState("");
    const [state , setState] = useState("");
    const [country , setCountry] = useState("");
    const [pincode , setPincode] = useState("");
    const [payment_type , setPayment_Type] = useState("");

    function place_order(e){
        e.preventDefault();

        var obj ={area, city , district , state , country , pincode , payment_type ,"token":localStorage.getItem("token") }

        axios.post("https://a2zithub.org/dairy/abi/place_order",obj).then((res)=>{
            navigate("/order_list")
        })
    }

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Address Form */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-5">
              Delivery Address
            </h2>

            <form onSubmit={place_order} className="space-y-4">

              <input
              onChange={(e)=>setArea(e.target.value)}
                type="text"
                placeholder="Enter Area"
                className="w-full border p-3 rounded-lg"
              />

              <input
              onChange={(e)=>setCity(e.target.value)}
                type="text"
                placeholder="Enter City"
                className="w-full border p-3 rounded-lg"
              />

              <input
              onChange={(e)=>setDistrict(e.target.value)}
                type="text"
                placeholder="Enter District"
                className="w-full border p-3 rounded-lg"
              />

              <input
              onChange={(e)=>setState(e.target.value)}
                type="text"
                placeholder="Enter State"
                className="w-full border p-3 rounded-lg"
              />

              <input
              onChange={(e)=>setCountry(e.target.value)}
                type="text"
                placeholder="Enter Country"
                className="w-full border p-3 rounded-lg"
              />

              <input
              onChange={(e)=>setPincode(e.target.value)}
                type="number"
                placeholder="Enter Pincode"
                className="w-full border p-3 rounded-lg"
              />

              <select onClick={(e)=>setPayment_Type(e.target.value)} className="w-full border p-3 rounded-lg">
                <option>Select Payment Type</option>
                <option value="Online">Online</option>
                <option value="Offline">Cash On Delivery</option>
              </select>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-5">
              Order Summary
            </h2>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;