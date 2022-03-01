export const getCurrentTime = () => {
  const time = new Date;

  return time.toLocaleTimeString();
};

export const getRandom = (number) => {
  return Math.ceil(Math.random() * number);
};
