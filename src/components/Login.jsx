import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);

  const handleClickSignup = () => {
    setIsSignin(!isSignin);
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
      <form className="text-white p-12 w-3/12 bg-black bg-opacity-80  absolute my-48 mx-auto right-0 left-0">
        <h1 className="font-bold text-3xl p-2 pb-6">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            className="p-2 m-2 bg-gray-600 text-white w-full"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-2 m-2 bg-gray-600 text-white w-full"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-2 m-2 bg-gray-600 text-white w-full"
          type="password"
          placeholder="Password"
        />
        <button className="p-2 m-2 text-white bg-red-500 w-full">
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
