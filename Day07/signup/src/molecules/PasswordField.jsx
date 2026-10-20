import Text from "../atoms/Text";
import Input from "../atoms/Input";

const PasswordField = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <Text
        text={"비밀번호"}
        size={"small"}
        weight={"normal"}
        color={"normal"}
      />
      <Input type={"password"} func={props.func} />
      {props.cond && (
        <Text
          text={"비밀번호가 8글자 이상이어야함"}
          size={"small"}
          weight={"normal"}
          color={"warn"}
        />
      )}
    </div>
  );
};

export default PasswordField;
