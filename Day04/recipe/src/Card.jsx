import Name from "./Name";
import Image from "./Image";
import Difficulty from "./Difficulty";
import Rating from "./Rating";
import ReviewCount from "./ReviewCount";

const Card = () => {
  return (
    <aritcle style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Image />
      </div>
      <div>
        <Name />
        <Rating rating={4.6} />
        <ReviewCount reviewCount={100} />
        <Difficulty difficulty={"Easy"} />
      </div>
    </aritcle>
  );
};

export default Card;
