const Square = (props) => {
  return (
    <div style={{ width: "100px", height: "100px", backgroundColor: props.bg }}>
      {props.bg}
    </div>
  );
};

export default Square;
