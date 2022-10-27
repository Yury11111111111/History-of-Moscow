import React from "react";
import { motion } from "framer-motion";
import "../../../style/LeftCard.scss";

const Animation = {
  hiden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const MoscowExpansion = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="leftCard__img d-none d-xl-block"
        style={{ marginTop: 410 }}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_10.jpg"
        custom={1}
      />
      <div className="leftCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-title"
          id="MoscowExpansion"
          style={{ marginTop: 410 }}
          custom={1}
        >
          Расширение Москвы
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="leftCard__text-paragraph"
        >
          При правлении царей династии Романовых Москва стремительно
          расширялась, уже при сыне Михаила Романова Алексее в Москве
          насчитывалось до 200 тысяч жителей, город стал одним из самых
          крупнейших в Европе.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="leftCard__text-paragraph"
        >
          В 1687 году открылось первое Высшее учебное заведение —
          Славяно-греколатинская академия. Строилось много <br /> церквей,
          каменных палат, на кремлевских башнях <br /> появились шатровые завершения, а
          четыре башни Кремля <br /> в 50-е годы XVII века были украшены имперскими <br />
          двухглавыми орлами.
        </motion.p>
      </div>
    </>
  );
};

export default MoscowExpansion;
