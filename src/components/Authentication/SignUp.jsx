import React, { useState } from "react";
import loginIcon from "../../assets/signin.gif";
import {
  Email,
  Lock,
  Person,
  Phone,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import ButtonComponent from "../Header/ButtonComponent";

const SignUp = ({ onClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full p-5 bg-white mx-auto container rounded-md shadow-2xl">
      <div className="w-28 h-28 mx-auto relative">
        <div>
          <img src={loginIcon} alt="Login Image" />
        </div>
        <div className="text-xs bg-slate-200 py-4 text-center absolute bottom-0">Upload Photo</div>
      </div>
      <form className=" mx-auto pt-10">
        <div>
          <div className="bg-slate-100 p-2 flex">
            <Person />
            <input
              className=" ml-4 w-full h-full outline-none bg-transparent"
              type="text"
              placeholder="Enter your Name"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="bg-slate-100 p-2 flex">
            <Phone />
            <input
              className=" ml-4 w-full h-full outline-none bg-transparent"
              type="text"
              placeholder="Enter Contact Number"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="bg-slate-100 p-2 flex">
            <Email />
            <input
              className=" ml-4 w-full h-full outline-none bg-transparent"
              type="text"
              placeholder="Enter email address"
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="bg-slate-100 p-2 flex">
            <Lock />
            <input
              className="ml-4 w-full h-full outline-none bg-transparent"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
            />
            <span
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>
        </div>
        <div className="mt-5">
          <div className="bg-slate-100 p-2 flex">
            <Lock />
            <input
              className="ml-4 w-full h-full outline-none bg-transparent"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter confirm password"
            />
            <span
              className="cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>
        </div>

        <ButtonComponent style="mx-auto block mt-6 rounded-full px-6 py-2 max-w-[200px] w-full hover:scale-110 transition-all hover:bg-red-700">
          Sign up
        </ButtonComponent>
      </form>
      <p className="my-5">
        Already have an account ?{" "}
        <span
          onClick={onClick}
          className="text-red-600 hover:text-red-700 hover:underline"
        >
          Sign In
        </span>
      </p>
    </div>
  );
};

export default SignUp;
