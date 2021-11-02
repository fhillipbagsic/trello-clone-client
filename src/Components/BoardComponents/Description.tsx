import { Description as iDescription } from "../../util/boardInterface";

interface iProps {
  description: iDescription;
}

const Description = ({ description }: iProps) => {
  return <p className="text-sm text-gray-500">{description}</p>;
};

export default Description;
