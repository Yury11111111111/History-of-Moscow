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

const CulturalHeyday = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="leftCard__img d-none d-xl-block"
        style={{ marginTop: 300 }}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_12.jpg"
        custom={1}
      />
      <div className="leftCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-title"
          id="CulturalHeyday"
          custom={1}
        >
          Культурный расцвет Москвы
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="leftCard__text-paragraph"
        >
          При императрице Елизавете Петровне наступил период расцвета культуры и
          науки: в 1755 году открылся первый русский университет, со следующего
          года стала выходить первая газета "Московские ведомости", с 1760 года
          — первый московский журнал "Полезное увеселение", открылась
          университетская типография.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="leftCard__text-paragraph"
        >
          При Екатерине II, затем и Павле I в Москве открывалось <br /> много новых
          зданий, культурных учреждений, дворцов и особняков. После отмены
          обязательной службы для <br /> дворян, многие из них поселились именно в
          Москве, <br /> проводя свои дела, внося вклад в развитие города.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="leftCard__text-paragraph"
        >
          К этому времени относится возведение значительных общественных зданий,
          таких как Петровского и Екатерининского дворцов, Воспитательного дома,
          Военного госпиталя, Сената в Кремле, Голицинской и Павловской больниц,
          дома Пашкова, дворцов Демидова, Барышникова, Покровских казарм и
          других зданий.{" "}
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={5}
          className="leftCard__text-paragraph"
        >
          Именно при Екатерине от колодцев началось проведение водопровода и
          город становился чище, опрятней.{" "}
        </motion.p>{" "}
      </div>
    </>
  );
};

export default CulturalHeyday;
