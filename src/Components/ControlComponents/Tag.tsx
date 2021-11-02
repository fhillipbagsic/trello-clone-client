import { useState } from "react";
import getColor from "../../util/getColor";

interface iProps {
  color: string;
}
const Tag = ({ color }: iProps) => {
  const [selected, setSelected] = useState(true);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <span
      className={`w-9 h-9 ${getColor(color)} rounded-full cursor-pointer ${
        selected && "border-solid border-4 border-gray-300"
      } transition-all`}
      onClick={handleSelect}
    ></span>
  );
};

export default Tag;
