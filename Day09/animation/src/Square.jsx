import { motion } from "motion/react";
import { useState } from "react";

const Square = ({ bg }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      <motion.div
        initial={{ scale: 0 }}
        whileTap={{ scale: 2 }}
        animate={{ scale: 1, rotate: 540, transition: { duration: 2 } }}
        onHoverStart={() => {
          setIsHover((prev) => !prev);
        }}
        style={{
          backgroundColor: bg,
          width: "100px",
          height: "100px",
          borderRadius: "12px",
        }}
      ></motion.div>
      {isHover && <div>👻</div>}
    </div>
  );
};

export default Square;
