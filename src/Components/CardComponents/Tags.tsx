import { Tags as iTags } from "../../util/boardInterface";

interface iProps {
  tags: iTags;
}

const Tags = ({ tags }: iProps) => {
  return (
    <div className="flex space-x-2">
      {tags.map((tag, index) => {
        const colorType = "bg-" + tag + "-500";

        return (
          <span
            key={index}
            className={`h-2 w-24 ${colorType} rounded-md`}
          ></span>
        );
      })}
    </div>
  );
};

export default Tags;
