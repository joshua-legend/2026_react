import VideoList from "./VideoList";

function App() {
  const data = [
    {
      bg: "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
      title: "윤정은 어게인",
      desc: "화이팅!",
    },
    {
      bg: "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(135, 134, 219, 1) 50%, rgba(229, 83, 237, 1) 100%)",
      title: "조나단 열공",
      desc: "간바레",
    },
    {
      bg: "linear-gradient(90deg,rgba(255, 125, 74, 1) 0%, rgba(135, 134, 219, 1) 50%, rgba(197, 23, 207, 1) 100%)",
      title: "김지원 점메추",
      desc: "해줘",
    },
    {
      bg: "linear-gradient(90deg,rgba(255, 125, 74, 1) 0%, rgba(135, 134, 219, 1) 50%, rgba(197, 23, 207, 1) 100%)",
      title: "김지원 점메추",
      desc: "해줘",
    },
    {
      bg: "linear-gradient(90deg,rgba(255, 125, 74, 1) 0%, rgba(135, 134, 219, 1) 50%, rgba(197, 23, 207, 1) 100%)",
      title: "김지원 점메추",
      desc: "해줘",
    },
    {
      bg: "linear-gradient(90deg,rgba(255, 125, 74, 1) 0%, rgba(135, 134, 219, 1) 50%, rgba(197, 23, 207, 1) 100%)",
      title: "김지원 점메추",
      desc: "해줘",
    },
    {
      bg: "linear-gradient(90deg,rgba(255, 125, 74, 1) 0%, rgba(135, 134, 219, 1) 50%, rgba(197, 23, 207, 1) 100%)",
      title: "김지원 점메추",
      desc: "해줘",
    },
    {
      bg: "linear-gradient(90deg,rgba(255, 125, 74, 1) 0%, rgba(135, 134, 219, 1) 50%, rgba(197, 23, 207, 1) 100%)",
      title: "김지원 점메추",
      desc: "해줘",
    },
    {
      bg: "linear-gradient(90deg,rgba(255, 125, 74, 1) 0%, rgba(135, 134, 219, 1) 50%, rgba(197, 23, 207, 1) 100%)",
      title: "김지원 점메추",
      desc: "해줘",
    },
    {
      bg: "linear-gradient(90deg,rgba(255, 125, 74, 1) 0%, rgba(135, 134, 219, 1) 50%, rgba(197, 23, 207, 1) 100%)",
      title: "김지원 점메추",
      desc: "해줘",
    },
  ];

  return (
    <>
      <VideoList data={data} />
    </>
  );
}

export default App;
