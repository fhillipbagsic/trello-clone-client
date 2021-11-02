import { forwardRef, useImperativeHandle, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import AddBoard from "./AddBoard";
import BoardItem from "./BoardItem";
import KeywordSearch from "./KeywordSearch";
import Tag from "./Tag";

const Filter = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const boards = useAppSelector((state) => state.boards.value);
  const boardTitles = boards.map((board) => board.board);

  useImperativeHandle(ref, () => ({
    openFilterDrawer() {
      setToggle(!toggle);
    },
  }));

  const handleClose = () => {
    setToggle(false);
  };

  return toggle ? (
    <div className="fixed right-0 top-100 flex flex-col space-y-2 p-3  w-1/4 bg-white border-2 border-solid border-gray-100 rounded-md shadow-md">
      <p className="font-medium text-gray-600 text-center">Filters</p>
      <div className="w-full h-0.5 bg-gray-100" />
      <p className="font-medium text-gray-600">Boards</p>
      {boardTitles.map((boardTitle, index) => (
        <BoardItem key={index} boardTitle={boardTitle} />
      ))}
      <AddBoard />
      <p className="font-medium text-gray-600 pt-3">Keyword</p>
      <div>
        <KeywordSearch />
        <p className=" text-xs font-medium text-gray-400 mt-1">
          Search cards, members, labels, and more.
        </p>
      </div>
      <p className="font-medium text-gray-600 pt-3">Tags</p>
      <div className="flex space-x-2">
        {boardTitles.map((boardTitle) => (
          <Tag color={boardTitle.color} />
        ))}
      </div>
      <div className="w-full h-0.5 bg-gray-100" />
      <button className="w-full text-center py-2 bg-black rounded-md text-white">
        Save Changes
      </button>
      <button
        className="w-full text-center py-2 text-black"
        onClick={handleClose}
      >
        Cancel
      </button>
    </div>
  ) : (
    <></>
  );
});

export default Filter;
