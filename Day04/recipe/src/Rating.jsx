import { calc } from "./util.js";
import { makeStar } from "./Components.jsx";

const Rating = (props) => {
  const { integer, point } = calc(props.rating);
  const { fullStars, halfStar } = makeStar(integer, point);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      평점:{props.rating} {fullStars} {halfStar}
    </div>
  );
};

export default Rating;
