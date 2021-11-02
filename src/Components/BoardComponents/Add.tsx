import { PlusIcon } from "@heroicons/react/outline";

const Add = () => {
  return (
    <div className=" flex flex-shrink-0 justify-center items-center space-x-2 w-full h-28 border-dashed border-2 border-gray-300 rounded-xl cursor-pointer add-card">
      <PlusIcon className="w-4 text-gray-600" />
      <p className="text-md text-gray-600">Add new card</p>
    </div>
  );
};

export default Add;
