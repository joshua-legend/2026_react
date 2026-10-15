import Name from "./Name";
import Image from "./Image";
import Difficulty from "./Difficulty";
import Rating from "./Rating";
import ReviewCount from "./ReviewCount";

const Card = (props) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2px",
        border: "1px solid red",
        borderRadius: "12px",
      }}
    >
      <div style={{ flex: "1", borderBottom: "1px solid black" }}>
        <Image image={props.image} />
      </div>
      <div style={{ flex: "1" }}>
        <Name name={props.name} />
        <Rating rating={props.rating} />
        <ReviewCount reviewCount={props.reviewCount} />
        <Difficulty difficulty={props.difficulty} />
      </div>
    </article>
  );
};

export default Card;
