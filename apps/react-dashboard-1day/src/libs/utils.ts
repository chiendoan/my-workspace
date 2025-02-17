export const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min);
};

export const formatNumberWithComma = (value: number) => {
  return value.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
