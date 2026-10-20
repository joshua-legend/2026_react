import Checkbox from "../atoms/Checkbox";
import Badge from "../atoms/Badge";
import Text from "../atoms/Text";

const Checker = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <Checkbox checked={props.checked} func={props.func} />
      <Badge isNecessary={props.isNecessary} />
      <Text
        text={props.text}
        size={"small"}
        weight={"normal"}
        color={"normal"}
      />
    </div>
  );
};

export default Checker;
