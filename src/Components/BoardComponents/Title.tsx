import { Title as iTitle } from "../../util/boardInterface";

interface iProps {
  title: iTitle;
}

const Title = ({ title }: iProps) => {
  return <p className="text-base">{title}</p>;
};

export default Title;
