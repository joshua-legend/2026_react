import Video from "./Video";

const VideoList = (props) => {
  return (
    <section
      style={{
        padding: "10px",
        border: "1px solid red",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "600px",
      }}
    >
      <h3>{props.data.length} Videos</h3>
      {props.data.map((v) => (
        <Video {...v} />
      ))}
    </section>
  );
};

export default VideoList;
