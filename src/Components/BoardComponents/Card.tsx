import Tags from "./Tags";
import Title from "./Title";
import Image from "./Image";
import Description from "./Description";
import Members from "./Members";
import { Card as iCard } from "../../util/boardInterface";

import { ChatIcon, HeartIcon } from "@heroicons/react/outline";
import React, { useRef } from "react";
import Details from "../CardComponents/Details";
interface RefObject {
  openDetails: () => void;
}

const Card = (card: iCard) => {
  const detailsRef = useRef<RefObject>(null);

  const handleDragStart = (event: React.DragEvent<HTMLElement>) => {
    const element = event.target as HTMLElement;
    const cardElement = element.closest("article") as HTMLElement;
    // const addElement = document.querySelectorAll(".add-card");
    // addElement.forEach((element) => element.classList.add("hidden"));
    cardElement.classList.add("dragging");
  };

  const handleDragEnd = (event: React.DragEvent<HTMLElement>) => {
    const element = event.target as HTMLElement;
    const cardElement = element.closest("article") as HTMLElement;
    // const addElement = document.querySelectorAll(".add-card");
    // addElement.forEach((element) => element.classList.remove("hidden"));
    cardElement.classList.remove("dragging");
  };

  const handleClick = () => {
    detailsRef.current?.openDetails();
  };
  return (
    <>
      <article
        className="flex flex-col space-y-3 px-4 py-4 bg-gray-100 rounded-lg cursor-pointer draggable"
        draggable
        onClick={handleClick}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {card.image && <Image image={card.image} />}
        <Tags tags={card.tags} />
        <div>
          <Title title={card.title} />
          <Description description={card.description} />
        </div>
        <div className="flex space-x-2 items-center">
          <Members members={card.members} />
          <p className="text-sm font-medium text-gray-400">
            {card.comments?.length || 0}
          </p>
          <button>
            <ChatIcon className="w-5 text-gray-400" />
          </button>
          <p className="text-sm font-medium text-gray-400">
            {card.likes?.length || 0}
          </p>
          <button>
            <HeartIcon className="w-5 text-gray-400" />
          </button>
        </div>
      </article>
      <Details
        ref={detailsRef}
        image={card.image}
        tags={card.tags}
        title={card.title}
        description={card.description}
        members={card.members}
        comments={card.comments}
        likes={card.likes}
      />
    </>
  );
};

export default Card;
