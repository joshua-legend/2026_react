function App() {
  return (
    <>
      <ReviewCount reviewCount={100} />
      <Rating rating={4.3} />
      <Rating rating={4.6} />
      <Difficulty difficulty={"Easy"} />
      <Difficulty difficulty={"Hard"} />
    </>
  );
}

export default App;
