import { animate, motion } from "motion/react";

const Stagger = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 1 } } }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "red" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "orange" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "yellow" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "red" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "orange" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "yellow" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "red" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "orange" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "yellow" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "red" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "orange" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "yellow" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "red" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "orange" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "yellow" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "red" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "orange" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "yellow" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "red" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "orange" }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: "300px", height: "300px", backgroundColor: "yellow" }}
      ></motion.div>
    </motion.div>
  );
};

export default Stagger;
