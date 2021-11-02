import { PlusIcon } from "@heroicons/react/outline";

const AddBoard = () => {
  return (
    <div
      className={`flex justify-between items-start p-3 w-full max-h-full border-gray-300 border-2 border-solid  rounded-lg text-gray-400`}
    >
      <p className="font-medium">Add a new board</p>
      <PlusIcon className="w-5" />
    </div>
  );
};

export default AddBoard;
