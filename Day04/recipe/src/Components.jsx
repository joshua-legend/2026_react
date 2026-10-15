import { Star, StarHalf } from "lucide-react";

export const makeStar = (integer, point) => {
  const fullStars = Array(integer)
    .fill(0)
    .map((_) => <Star color="#000000" />);
  const halfStar = point < 0.5 ? <></> : <StarHalf color="#000000" />;
  return { fullStars, halfStar };
};
