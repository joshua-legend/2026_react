import Text from "../atoms/Text";
import Input from "../atoms/Input";

const PasswordCheckField = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <Text
        text={"비밀번호 확인"}
        size={"small"}
        weight={"normal"}
        color={"normal"}
      />
      <Input type={"password"} func={props.func} />
      {props.cond && (
        <Text
          text={"비밀번호가 다릅니다."}
          size={"small"}
          weight={"normal"}
          color={"warn"}
        />
      )}
    </div>
  );
};

export default PasswordCheckField;
