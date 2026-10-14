import { Play } from "lucide-react";

const Thumbnail = (props) => {
  return (
    <div
      style={{
        width: "150px",
        height: "100px",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: props.bg,
      }}
    >
      <Play />
    </div>
  );
};

export default Thumbnail;
