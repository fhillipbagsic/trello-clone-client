import React from "react";
import { Board } from "../../util/boardInterface";
import Card from "./Card";
import BoardTitle from "./BoardTitle";
import Add from "./Add";

const BoardContainer = ({ board, cards }: Board) => {
  const getDragAfterElement = (board: HTMLElement, y: number) => {
    let draggableElements: Element[];

    draggableElements = [
      ...board.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    );
  };

  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    const element = event.target as HTMLElement;
    const boardElement = element.closest("section") as HTMLElement;
    const draggingCardElement = document.querySelector(
      ".dragging"
    ) as HTMLElement;

    const afterElement = getDragAfterElement(boardElement, event.clientY) as {
      offset: number;
      element?: Element;
    };
    if (afterElement.element == null) {
      boardElement.appendChild(draggingCardElement);
    } else {
      boardElement.insertBefore(draggingCardElement, afterElement.element);
    }
  };

  return (
    <section
      className=" inline-flex flex-col flex-shrink-0 space-y-3 w-96 px-3 h-5/6 overflow-y-auto no-scrollbar"
      onDragOver={handleDragOver}
    >
      <BoardTitle board={board} />
      {cards?.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          tags={card.tags}
          title={card.title}
          description={card.description}
          members={card.members}
          comments={card.comments}
          likes={card.likes}
        />
      ))}
      <Add />
    </section>
  );
};

export default BoardContainer;
