import { motion } from "motion/react";

const Second = () => {
  return (
    <motion.section
      style={{
        height: "100vh",
        position: "relative",
      }}
    >
      <motion.div
        viewport={{ amount: 0.1, once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 300, opacity: 0 }}
        transition={{ duration: 0.1 }}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "9999px",
          backgroundColor: "brown",
          position: "absolute",
          left: "30%",
          top: "30%",
        }}
      ></motion.div>
      <motion.div
        viewport={{ amount: 0.1, once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 300, opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "9999px",
          backgroundColor: "brown",
          position: "absolute",
          left: "50%",
          top: "70%",
        }}
      ></motion.div>
      <motion.div
        viewport={{ amount: 0.1, once: true }}
        whileInView={{ y: 100, opacity: 1 }}
        initial={{ y: 300, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "9999px",
          backgroundColor: "brown",
          position: "absolute",
          left: "70%",
          top: "20%",
        }}
      ></motion.div>
    </motion.section>
  );
};

export default Second;
