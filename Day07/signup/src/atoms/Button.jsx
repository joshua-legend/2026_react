const Button = ({ isAble }) => {
  return (
    <div
      style={{
        padding: "11px",
        borderRadius: "8px",
        backgroundColor: isAble ? "#1a1a1a" : "#d4d4d8",
        cursor: isAble ? "auto" : "not-allowed",
        color: "white",
      }}
    >
      가입하기
    </div>
  );
};

export default Button;
