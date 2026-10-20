const Item = (props) => {
  return (
    <div>
      <span>고양이 사료 {items.catPrice}원</span>
      <button
        onClick={() => {
          down("catCount");
        }}
      >
        -
      </button>
      <span>{items.catCount}</span>
      <button
        onClick={() => {
          up("catCount");
        }}
      >
        +
      </button>
    </div>
  );
};

export default Item;
