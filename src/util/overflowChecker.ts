const isOverflown = (element: Element) => {
  return element.scrollHeight > element.clientHeight;
};

export default isOverflown;
