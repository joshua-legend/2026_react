const CheckboxValue = (props) => {
  return (
    <input
      onChange={props.func}
      checked={props.isChecked}
      style={{ accentColor: "#1a1a1a" }}
      type="checkbox"
    />
  );
};

export default CheckboxValue;
