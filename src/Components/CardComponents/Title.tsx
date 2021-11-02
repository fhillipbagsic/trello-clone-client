import { ViewBoardsIcon } from "@heroicons/react/outline";
import { Title as iTitle } from "../../util/boardInterface";

interface iProps {
  title: iTitle;
}
const Title = ({ title }: iProps) => {
  return (
    <div className="flex items-center space-x-3 text-gray-800">
      <ViewBoardsIcon className="w-7" />
      <p className="font-medium sm:text-xl">{title}</p>
    </div>
  );
};

export default Title;
