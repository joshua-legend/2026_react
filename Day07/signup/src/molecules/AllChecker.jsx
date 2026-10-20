import CheckboxValue from "../atoms/CheckboxValue";
import Text from "../atoms/Text";

const AllChecker = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <CheckboxValue func={props.func} isChecked={props.isChecked} />
      <Text
        text={"전체 동의"}
        size={"medium"}
        weight={"bold"}
        color={"normal"}
      />
    </div>
  );
};

export default AllChecker;
