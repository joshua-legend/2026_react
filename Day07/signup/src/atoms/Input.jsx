const Input = ({ type, func }) => {
  return (
    <input
      onChange={func}
      style={{
        padding: "9px 11px",
        border: "1px solid #d4d4d8",
        borderRadius: "8px",
      }}
      type={type}
    />
  );
};

export default Input;
