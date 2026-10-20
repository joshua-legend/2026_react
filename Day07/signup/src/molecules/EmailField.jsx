import Text from "../atoms/Text";
import Input from "../atoms/Input";
const EmailField = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <Text text={"이메일"} size={"small"} weight={"normal"} color={"normal"} />
      <Input type={"email"} func={props.func} />
      {props.cond && (
        <Text
          text={"@가 빠졌어요."}
          size={"small"}
          weight={"normal"}
          color={"warn"}
        />
      )}
    </div>
  );
};

export default EmailField;
