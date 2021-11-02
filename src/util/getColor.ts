const getColor = (color: string): string => {
  if (color.includes("red")) {
    return "bg-red-500";
  } else if (color.includes("blue")) {
    return "bg-blue-500";
  } else if (color.includes("yellow")) {
    return "bg-yellow-500";
  } else if (color.includes("green")) {
    return "bg-green-500";
  } else if (color.includes("purple")) {
    return "bg-purple-500";
  }

  return "bg-green-500";
};

export default getColor;
