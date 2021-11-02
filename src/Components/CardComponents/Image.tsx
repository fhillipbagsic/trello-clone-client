interface iProps {
  image: string;
}

const Image = ({ image }: iProps) => {
  return (
    <img
      src={image}
      alt="board"
      className="w-full h-36 rounded-md object-cover sm:h-80"
    />
  );
};

export default Image;
