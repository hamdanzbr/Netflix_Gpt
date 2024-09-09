import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const { signUp, signIn, errorMessage } = useAuth();
  
  const navigate = useNavigate();
  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClickSignup = () => {
    setIsSignin(!isSignin);
  };

  const clickSubmit = () => {
    const message = checkValidData(email.current.value, password.current.value);
    if (message) return; // Handle validation error separately.

    if (!isSignin) {
      signUp(name.current.value, email.current.value, password.current.value, navigate);
    } else {
      signIn(email.current.value, password.current.value, navigate);
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg"
          alt="movie img"
        />
      </div>
      <form className="text-white p-12 w-3/12 bg-black bg-opacity-80  absolute my-48 mx-auto right-0 left-0" onSubmit={(e) => e.preventDefault()}>
        <h1 className="font-bold text-3xl p-2 pb-6">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            ref={name}
            className="p-2 m-2 bg-gray-600 text-white w-full"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-2 m-2 bg-gray-600 text-white w-full"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="p-2 m-2 bg-gray-600 text-white w-full"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 p-2 m-2">{errorMessage}</p>
        <button className="p-2 m-2 text-white bg-red-500 w-full" onClick={clickSubmit}>
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2">
          New to Netflix? <Link onClick={handleClickSignup}>Sign up now</Link>.
        </p>
      </form>
    </div>
  );
};

export default Login;
