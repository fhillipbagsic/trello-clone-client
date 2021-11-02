import { Tags as iTags } from "../../util/boardInterface";
import getColor from "../../util/getColor";

interface iProps {
  tags: iTags;
}

const Tags = ({ tags }: iProps) => {
  return (
    <div className="flex space-x-2">
      {tags.map((tag, index) => {
        return (
          <span
            key={index}
            className={`h-2 w-24 ${getColor(tag)} rounded-md`}
          ></span>
        );
      })}
    </div>
  );
};

export default Tags;
