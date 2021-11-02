interface iProps {
  image: string;
}

const Image = ({ image }: iProps) => {
  return (
    <img
      src={image}
      alt="board"
      className="w-full h-44 rounded-md object-fill"
    />
  );
};

export default Image;
