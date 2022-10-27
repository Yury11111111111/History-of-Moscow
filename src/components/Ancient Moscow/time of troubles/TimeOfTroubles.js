import React from "react";
import { motion } from "framer-motion";
import "../../../style/RightCard.scss";

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

const TimeOfTroubles = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="rightCard__img d-none d-xl-block"
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_9.jpg"
        custom={1}
      />
      <div className="rightCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-title"
          id="TimeOfTroubles"
          custom={1}
        >
          Смутное время
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="rightCard__text-paragraph"
        >
          А дальше начались времена смуты. Самозванец, провозгласивший себя
          сыном Ивана Грозного Димитрием захватил престол, и спустя недолгое был
          свергнут в мае 1606 года восставшими москвичами.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="rightCard__text-paragraph"
        >
          Затем — выборы нового цара, Василия Шуйского, вступление на московскую
          землю нового самозванца Лжедимитрия II,вступление поляков в Москву в
          августе 1610 года и освобождение Москвы народным ополчением во главе с
          князем Дмитрием Пожарским и Кузьмы Минина в августе 1612 года.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="rightCard__text-paragraph"
        >
          В 1613 году большим событием в истории России стало выбирание
          делегатами Земского собора в Москве царя, которым стал Михаил Романов,
          династия которого правила до 1917 года.
        </motion.p>
      </div>
    </>
  );
};

export default TimeOfTroubles;
