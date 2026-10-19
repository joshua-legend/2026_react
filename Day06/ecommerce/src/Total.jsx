const Total = (props) => {
  return (
    <span>
      총 금액:{" "}
      {props.items.reduce((sum, item) => sum + item.cnt * item.price, 0)}원
    </span>
  );
};

export default Total;
