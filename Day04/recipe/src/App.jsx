import Card from "./Card.jsx";
import { DUMMY_DATA } from "./data.js";

function App() {
  const { recipes } = DUMMY_DATA;

  return (
    <section style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
      {recipes.map((v) => (
        <Card {...v} />
      ))}
    </section>
  );
}

export default App;
