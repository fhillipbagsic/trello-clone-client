import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { BoardTitle as iBoardTitle } from "../../util/boardInterface";

interface iProps {
  board: iBoardTitle;
}

const BoardTitle = ({ board }: iProps) => {
  console.log(board.color);
  return (
    <div
      className={`flex items-center justify-between px-3 py-2 bg-${"gray"}-100 rounded-lg`}
    >
      <h3 className="text-base font-medium">{board.title}</h3>
      <button>
        <DotsHorizontalIcon className="w-7 text-gray-400" />
      </button>
    </div>
  );
};

export default BoardTitle;
