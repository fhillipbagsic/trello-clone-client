import Board from "./BoardComponents/Board";
import { useAppSelector } from "../store/hooks";

const Container = () => {
  const boards = useAppSelector((state) => state.boards.value);

  return (
    <main className="flex px-3 overflow-x-auto overflow-y-auto pb-5 h-screen">
      {boards.map((board, index) => {
        return <Board key={index} board={board.board} cards={board.cards} />;
      })}
    </main>
  );
};

export default Container;
