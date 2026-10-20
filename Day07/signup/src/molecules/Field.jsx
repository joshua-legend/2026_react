import Text from "../atoms/Text";
import Input from "../atoms/Input";

const Field = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <Text
        text={props.title}
        size={"small"}
        weight={"normal"}
        color={"normal"}
      />
      <Input type={props.type} func={props.func} />
      {props.cond && (
        <Text
          text={props.warnTitle}
          size={"small"}
          weight={"normal"}
          color={"warn"}
        />
      )}
    </div>
  );
};

export default Field;
