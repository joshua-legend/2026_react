const Badge = ({ isNecessary }) => {
  return (
    <span
      style={{
        padding: "2px 6px",
        fontSize: "11px",
        fontWeight: 700,
        borderRadius: "4px",
        backgroundColor: isNecessary ? "#fee2e2" : "#f4f4f5",
        color: isNecessary ? "#dc2626" : "#71717a",
      }}
    >
      {isNecessary ? "필수" : "선택"}
    </span>
  );
};

export default Badge;
