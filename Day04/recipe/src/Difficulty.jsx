const Difficulty = (props) => {
  const { difficulty } = props; // easy, medium, hard
  const obj = {
    Easy: { text: "쉬움", color: "green" },
    Medium: { text: "중간", color: "yellow" },
    Hard: { text: "ㅈㅈ", color: "red" },
  };
  return (
    <div>
      난이도:
      <span style={{ color: obj[difficulty].color }}>
        {obj[difficulty].text}
      </span>
    </div>
  );
};

export default Difficulty;
