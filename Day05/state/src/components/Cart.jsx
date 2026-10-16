import { useState } from "react";

const Cart = () => {
  const [sum, setSum] = useState(0);

  const getIceTea = () => {
    setSum((prev) => prev + 2000);
  };
  const getChoco = () => {
    setSum((prev) => prev + 3500);
  };

  const getAmericano = () => {
    setSum((prev) => prev + 1500);
  };

  const reset = () => {
    setSum((prev) => 0);
  };

  return (
    <div>
      <span>아이스티 2000원</span> <button onClick={getIceTea}>구매</button>
      <span>초코라떼 3500원</span> <button onClick={getChoco}>구매</button>
      <span>아메리카노 1500원</span>
      <button className="border-red-300 p-1" onClick={getAmericano}>
        구매
      </button>
      <button onClick={reset}>초기화</button>
      <span>총 금액: {sum}</span>
    </div>
  );
};

export default Cart;
