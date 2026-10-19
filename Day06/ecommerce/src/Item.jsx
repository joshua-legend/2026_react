import Button from "./Button";
import Menu from "./Menu";

const Item = (props) => {
  return (
    <article>
      <Menu price={props.price} name={props.name} />
      <div>
        <Button func={props.sub} symbol={"-"} />
        <span>{props.cnt}</span>
        <Button func={props.add} symbol={"+"} />
      </div>
    </article>
  );
};

export default Item;
