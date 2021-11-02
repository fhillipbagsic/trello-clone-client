import { ViewListIcon } from "@heroicons/react/outline";
import { Description as iDescription } from "../../util/boardInterface";

interface iProps {
  description: iDescription;
}

const Description = ({ description }: iProps) => {
  return (
    <div className="flex flex-col space-y-1 text-gray-800">
      <div className="flex space-x-3 items-center">
        <ViewListIcon className="w-6" />
        <p className="text-lg font-medium">Description</p>
      </div>
      <p className="text-sm ml-9">{description}</p>
    </div>
  );
};

export default Description;
