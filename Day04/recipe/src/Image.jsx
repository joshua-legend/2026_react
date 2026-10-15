const Image = (props) => {
  return (
    <figure style={{ width: "100%", overflow: "hidden", margin: 0 }}>
      <img
        style={{ objectFit: "cover", width: "100%" }}
        src={props.image}
        alt=""
      />
    </figure>
  );
};

export default Image;
