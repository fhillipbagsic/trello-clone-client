import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import Copyright from "./Copyright";
import Input from "./Input";

const Signin = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement;

    if (!element.classList.contains("modal")) return;

    setToggle(false);
  };

  return toggle ? (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 modal"
      onClick={handleClose}
    >
      <div
        className="flex flex-col justify-center items-center pt-12 pb-3 w-11/12 bg-white rounded-xl shadow-lg sm:w-4/5 lg:w-1/2
      "
      >
        <img src={logo} alt="trello logo" className="mb-5" />
        <p className="text-lg font-medium text-center mb-10">
          Welcome to Trello!
        </p>
        <p className="text-xl font-medium text-center mb-5">
          Before we continue, may I know your name?
        </p>
        <Input />
        <button
          className="font-medium mb-16 guest-button"
          onClick={() => setToggle(false)}
        >
          Sign in as guest
        </button>
        <Copyright />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Signin;
