import { motion } from "motion/react";

const Circle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 3 } }}
      viewport={{ amount: 0.5 }} // 요소가 50% 보이면 실행
      style={{
        width: "300px",
        height: "300px",
        // borderRadius: "9999px",
        // backgroundColor: "red",
      }}
    >
      <h2>시사it아카데미 오신걸 환영합니다.</h2>
      <p>IT 수업에 일본어 하고요, 일본어 수업에 JLPT 안함</p>
    </motion.div>
  );
};

export default Circle;
