const Text = ({ text, size, weight, color }) => {
  const css = {
    size: { small: "13px", medium: "14px", large: "20px" },
    weight: { normal: 500, bold: "bold" },
    color: { normal: "#52525b", warn: "#ef4444" },
  };

  return (
    <span
      style={{
        fontSize: css.size[size],
        fontWeight: css.weight[weight],
        color: css.color[color],
      }}
    >
      {text}
    </span>
  );
};

export default Text;
