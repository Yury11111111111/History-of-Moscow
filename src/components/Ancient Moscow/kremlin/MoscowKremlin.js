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

const MoscowKremlin = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="rightCard__img d-none d-xl-block"
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_5.jpg"
        custom={1}
      />
      <div className="rightCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-title"
          id="MoscowKremlin"
          custom={1}
        >
          Московский Кремль
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="rightCard__text-paragraph"
        >
          В 1485 году Иван III пригласил в Москву итальянский зодчих и приступил
          к невиданному в те времена строительству — нового Кремля. Архитекторы
          Марк Фрязин, Антон Фрязин, Алоизо ди Каркано принялись за работу: за
          пять лет с постройки первой башни Тайницкой (вначале с Южной самой
          угрожаемой стороны) выросли новые высокие стены Кремля и ещё семь
          башен. Затем появились стены со стороны площади, будущей Красной.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="rightCard__text-paragraph"
        >
          В течение следующих 30 лет были возведены все стены Кремля и выстроены
          все башни.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="rightCard__text-paragraph"
        >
          Московский Кремль имеет 20 башен, стены общей длиной 2235 метров,
          толщиной от 3,5 до 6,5 метров, высотой от 5 до 19 метров. Наверху
          стены имеется боевой ход, соединяющий башни, с обороняемой стороны
          острые двухугловые зубцы, всего таких 1045 зубцов.
        </motion.p>
      </div>
    </>
  );
};

export default MoscowKremlin;
