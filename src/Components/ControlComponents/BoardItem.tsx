import { MenuIcon } from "@heroicons/react/outline";
import { BoardTitle as iBoardTitle } from "../../util/boardInterface";

interface iProps {
  boardTitle: iBoardTitle;
}
const BoardItem = ({ boardTitle }: iProps) => {
  return (
    <div
      className={`flex justify-between items-start p-3 w-full max-h-full bg-${boardTitle.color}-500 rounded-lg text-white cursor-move`}
    >
      <p className="font-medium">{boardTitle.title}</p>
      <MenuIcon className="w-5" />
    </div>
  );
};

export default BoardItem;
