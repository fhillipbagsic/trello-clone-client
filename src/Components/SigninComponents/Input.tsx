import { ArrowCircleRightIcon } from "@heroicons/react/outline";

const Input = () => {
  return (
    <div className="flex justify-between space-x-2 p-3 w-full max-w-md  mb-7 text-blue-600 border-2 border-blue-600 rounded-xl">
      <input className="flex-1" type="text" placeholder="Your name" />
      <button>
        <ArrowCircleRightIcon className="w-7" />
      </button>
    </div>
  );
};

export default Input;
