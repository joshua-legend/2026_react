import Info from "./Info";
import LikeButton from "./LikeButton";
import Thumbnail from "./Thumbnail";

const Video = (props) => {
  return (
    <article
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        width: "100%",
      }}
    >
      <Thumbnail bg={props.bg} />
      <Info title={props.title} desc={props.desc} />
      <LikeButton />
    </article>
  );
};

export default Video;
