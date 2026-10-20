const Checkbox = (props) => {
  return (
    <input
      checked={props.checked}
      onChange={props.func}
      style={{ accentColor: "#1a1a1a" }}
      type="checkbox"
    />
  );
};

export default Checkbox;
