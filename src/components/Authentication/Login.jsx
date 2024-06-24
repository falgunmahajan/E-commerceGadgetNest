import React, { useState } from "react";
import loginIcon from "../../assets/signin.gif";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import ButtonComponent from "../Header/ButtonComponent";
import { Link } from "react-router-dom";
const Login = ({onClick}) => {
  const [showPassword,setShowPassword]=useState(false)

  return (
    <div className="w-full p-5 bg-white mx-auto container rounded">
      <div className="w-28 h-28 mx-auto ">
        <img src={loginIcon} alt="Login Image" />
      </div>
      <form className=" mx-auto pt-10">
        <div  >
          <div className="bg-slate-100 p-2 flex">
            <Email/>
            <input
              className=" ml-4 w-full h-full outline-none bg-transparent"
              type="text"
              placeholder="Enter email address"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="bg-slate-100 p-2 flex">
            <Lock/>
            <input
              className="ml-4 w-full h-full outline-none bg-transparent"
              type={showPassword?"text":"password"}
              placeholder="Enter password"
            />
            <span className="cursor-pointer" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<VisibilityOff/>:<Visibility/>}</span>
          </div>
          <Link to="/forgot-password" className="ml-auto block w-fit hover:underline hover:text-red-600">
          Forgot Password?
          </Link>
        </div>
        
        
        <ButtonComponent style="mx-auto block mt-6 rounded-full px-6 py-2 max-w-[200px] w-full hover:scale-110 transition-all hover:bg-red-700">
          Login
        </ButtonComponent>
      </form>
      <p className="my-5">Don't have account ? <span onClick={onClick} className="text-red-600 hover:text-red-700 hover:underline cursor-pointer">Sign up</span></p>
    </div>
  );
};

export default Login;
