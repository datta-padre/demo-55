import { Link } from "react-router-dom";
import Footer from "../comman/Footer";
import Navbar from "../comman/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

   const navigate = useNavigate();    

    const [user_mobile , setUserMobile] = useState("");
    const [user_password , setPassword] = useState("");
    const [error , setError] = useState("")

    function LoginProcess(e){
        e.preventDefault();

        const obj = {
            "user_mobile":user_mobile,
            "user_password":user_password
        }

        console.log(obj)

        axios.post("https://a2zithub.org/dairy/abi/user_login",obj).then((res)=>{

            if(res.data.status == "success"){

                localStorage.setItem("token",res.data.token)
                navigate("/products")

            }else{

                setError("Invalid username and Password")
                
                
            }

        })

    }

  return (
    <>
      <Navbar />
      <br />
      <br />

    <form onSubmit={LoginProcess}>

      <div className="flex justify-center">
        <div class="border border-gray-100 shadow w-[360px] p-8 rounded-md bg-white">
          <div class="flex justify-between text-sm">
            <div class="flex items-center gap-2">
              <div class="h-3 w-3 bg-blue-600"></div>
              <p class="font-bold pb-[2px]">ShopEase</p>
            </div>
            <div>
              <p>
                 Create New Account..!
                <Link to="/create_account" class="font-semibold text-blue-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          <div class="mt-10">

            <p className=" bg-red-200 rounded px-2 text-center text-red-700">{error}</p>

            <h1 class="text-2xl font-semibold">
              Welcome Back ShopEase
            </h1>
          </div>

          <p class="text-sm mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, ea?
          </p>

          <div class="mt-6">
            <input
            onChange={(e)=>setUserMobile(e.target.value)}
              placeholder="Mobile"
              type="number"
              class="p-2 px-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300"
            />
            <input
            onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              class="p-2 px-3 mt-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300"
            />
          </div>

          <div class="mt-4 flex items-center">
            <input
              class="h-3 w-3 border-gray-300 focus:ring-blue-500 text-blue-600"
              type="checkbox"
              id="terms"
            />
            <label class="ml-2 text-sm text-gray-600" for="terms">
              I agree to the
              <a class="text-blue-600 hover:underline" href="#">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            class="bg-blue-600 text-white text-sm h-10 w-[130px] rounded-md font-semibold mt-5 shadow-md hover:bg-blue-700 transition duration-300 hover:scale-105"
          >
            Login
          </button>
        </div>
      </div>
      </form>

      <Footer />
    </>
  );
}

export default Login;
