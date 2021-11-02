import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Card as iCard } from "../../util/boardInterface";
import Actions from "./Actions";
import Comments from "./Comments";
import Description from "./Description";
import Image from "./Image";
import Members from "./Members";
import Tags from "./Tags";
import Title from "./Title";

const Details = forwardRef((card: iCard, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    openDetails() {
      setToggle(true);
    },
  }));

  const handlePointerEnter = () => {
    document.body.classList.add("overflow-hidden");
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement;

    if (!element.classList.contains("details-div")) return;

    document.body.classList.remove("overflow-hidden");
    setToggle(false);
  };
  return toggle ? (
    <article
      className="fixed flex justify-center items-center w-full h-full -top-3 left-0 bg-black bg-opacity-75 py-10 z-10 details-div"
      onPointerEnter={handlePointerEnter}
      onClick={handleClose}
    >
      <div className="space-y-4 p-5 w-9/12 max-w-3xl max-h-full bg-white shadow-md rounded-sm overflow-y-auto">
        {card.image && <Image image={card.image} />}
        <Tags tags={card.tags} />

        <Title title={card.title} />
        <div className="flex justify-between">
          <Members members={card.members} likes={card?.likes} />
          <Actions />
        </div>
        <Description description={card.description} />
        <Comments comments={card?.comments} />
      </div>
    </article>
  ) : (
    <></>
  );
});

export default Details;
