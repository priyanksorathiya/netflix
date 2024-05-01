import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setisSignInFrom] = useState(true);
  const [errormassage,setErrormassage] = useState(null);
  const Name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const hendelButtonClick = () => {
    
    console.log(email.current.value);
    console.log(password.current.value);
    const massage = checkValidData(email.current.value,password.current.value);
    setErrormassage(massage);
    // console.log(massage);
  };
  const toggleSignInForm = () => {
    setisSignInFrom(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_medium.jpg"
          alt="backgroundIMG"
        ></img>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-lg ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sing Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={Name}
            className="p-2 my-2 text-black font-bold bg-gray-500  w-full"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
        ref={email}
          className="p-2 my-2 text-black font-bold bg-gray-500  w-full"
          type="text"
          placeholder="Email Address"
        />
        <input
        ref={password}
          className="p-2 my-2 text-black font-bold bg-gray-500 w-full"
          type="password"
          placeholder="password"
        />
        <p className="text-red-700 font-bold text-lg py-2">{errormassage}</p>
        <button
          className="p-3 my-2  bg-red-700 rounded-lg w-full"
          onClick={hendelButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sing Up"}
          </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "already registered? sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
