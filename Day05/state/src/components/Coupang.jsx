import { useState } from "react";

const Coupang = () => {
  const [items, setItems] = useState({
    catCount: 0,
    catPrice: 5000,
    waterCount: 0,
    waterPrice: 4400,
    tissueCount: 0,
    tissuePrice: 2200,
  });

  const up = (x) => {
    setItems((prev) => {
      const key = Object.keys(prev).find((v) => v == x);
      prev[key] = prev[key] + 1;
      return { ...prev };
    });
  };

  const down = (x) => {
    setItems((prev) => {
      const key = Object.keys(prev).find((v) => v == x);
      prev[key] = prev[key] == 0 ? 0 : prev[key] - 1;
      return prev;
    });
  };

  return (
    <div>
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
      <div>
        <span>물 500ml {items.waterPrice}원</span>
        <button
          onClick={() => {
            down("waterCount");
          }}
        >
          -
        </button>
        <span>{items.waterCount}</span>
        <button
          onClick={() => {
            up("waterCount");
          }}
        >
          +
        </button>
      </div>
      <div>
        <span>물티슈 {items.tissuePrice}원</span>
        <button
          onClick={() => {
            down("tissueCount");
          }}
        >
          -
        </button>
        <span>{items.tissueCount}</span>
        <button
          onClick={() => {
            up("tissueCount");
          }}
        >
          +
        </button>
      </div>

      <div>고양이 사료: {items.catCount}</div>
      <div>물: {items.waterCount}</div>
      <div>물티슈: {items.tissueCount}</div>
      <div>
        총 금액:
        {items.catCount * items.catPrice +
          items.waterCount * items.waterPrice +
          items.tissueCount * items.tissuePrice}
      </div>
    </div>
  );
};

export default Coupang;
