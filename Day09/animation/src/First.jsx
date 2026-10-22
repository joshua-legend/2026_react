import { motion } from "motion/react";

const First = () => {
  return (
    <motion.section
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
    >
      <h1 style={{ fontSize: "40px" }}>
        특별한 당신에게 딱 맞는 커피를 바나프레소가 완성합니다
      </h1>
    </motion.section>
  );
};

export default First;
