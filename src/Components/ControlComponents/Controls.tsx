import {
  CloudUploadIcon,
  GlobeIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { useRef } from "react";
import Filter from "./Filter";
import MembersStack from "./MembersStack";

interface ObjectRef {
  openFilterDrawer(): void;
}

const Controls = () => {
  const filterRef = useRef<ObjectRef>(null);

  const handleFilterClose = () => {
    filterRef.current?.openFilterDrawer();
  };

  return (
    <>
      <div className="flex px-5 py-4 justify-between">
        {/* left */}
        <div className="flex space-x-5">
          <h2 className="text-xl font-medium ">Brackets</h2>
          <div className="flex space-x-2 items-center">
            <HeartIcon className="w-5 text-gray-400" />
            <div className="h-8 w-px bg-gray-200" />
            <GlobeIcon className="w-5 text-gray-400" />
            <p className="text-sm text-gray-400">Public</p>
            <div className="h-8 w-px bg-gray-200" />
            <CloudUploadIcon className="w-5 text-gray-400" />
          </div>
        </div>
        {/* right */}
        <div className="flex space-x-5">
          {/* stacks here */}
          <MembersStack />
          <button onClick={handleFilterClose}>Filters</button>
          <button>Menu</button>
        </div>
      </div>
      <Filter ref={filterRef} />
    </>
  );
};

export default Controls;
