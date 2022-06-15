import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

interface iProps {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const Input = ({ setToggle }: iProps) => {
  const [name, setName] = useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;

    setName(element.value);
  };

  const handleClick = () => {
    localStorage.setItem("name", name);
    setToggle(false);
  };

  return (
    <div className="flex justify-between space-x-2 p-3 w-full max-w-md  mb-7 text-blue-600 border-2 border-blue-600 rounded-xl">
      <input
        className="flex-1"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={handleOnChange}
      />
      <button onClick={handleClick}>
        <ArrowCircleRightIcon className="w-7" />
      </button>
    </div>
  );
};

export default Input;
