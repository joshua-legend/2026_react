import { useState } from "react";
import Button from "./Button";
import Item from "./Item";
import Total from "./Total";

const Purchase = () => {
  const [items, setItems] = useState([
    { name: "아메리카노", price: 2000, cnt: 0 },
    { name: "라떼", price: 2500, cnt: 0 },
    { name: "모카", price: 3000, cnt: 0 },
    { name: "아이스티", price: 3500, cnt: 0 },
    { name: "다방커피", price: 4500, cnt: 0 },
  ]);

  const add = (i) => {
    setItems((prev) =>
      prev.map((obj, idx) => (idx == i ? { ...obj, cnt: obj.cnt + 1 } : obj)),
    );
  };

  const sub = (i) => {
    setItems((prev) =>
      prev.map((obj, idx) =>
        idx == i ? { ...obj, cnt: obj.cnt == 0 ? 0 : obj.cnt - 1 } : obj,
      ),
    );
  };

  const reset = () => {
    setItems((prev) => {
      const newPrev = prev.map((v) => ({ ...v, cnt: 0 }));
      return newPrev;
    });
  };

  return (
    <>
      {items.map((v, i) => (
        <Item
          {...v}
          add={() => {
            add(i);
          }}
          sub={() => {
            sub(i);
          }}
          key={i}
        />
      ))}
      <div>
        <Total items={items} />
        <Button func={reset} symbol={"reset"} />
      </div>
    </>
  );
};

export default Purchase;
