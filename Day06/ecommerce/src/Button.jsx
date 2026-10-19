const Button = (props) => {
  return (
    <button style={{ color: "pink", padding: "3px" }} onClick={props.func}>
      {props.symbol}
    </button>
  );
};

export default Button;
