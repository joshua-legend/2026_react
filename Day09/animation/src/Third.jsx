import { motion } from "motion/react";

const Third = () => {
  return (
    <motion.section
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
      viewport={{ amount: 0.5, once: true }}
    >
      <h1 style={{ fontSize: "40px" }}>개꿀맛 커피집</h1>
    </motion.section>
  );
};

export default Third;
