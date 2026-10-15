export const calc = (rating) => {
  const integer = Math.floor(rating);
  const point = rating - integer;
  return { integer, point };
};
