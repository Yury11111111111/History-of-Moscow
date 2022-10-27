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

const PostWarYears = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="leftCard__img d-none d-xl-block"
        style={{ marginTop: 300 }}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_29.jpg"
        custom={1}
      />
      <div className="leftCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-title"
          id="PostWarYears"
          custom={1}
        >
          Москва в послевоенные годы
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="leftCard__text-paragraph"
        >
          В первые годы после Великой Отечественной Войны наступил кризис, голод
          и нехватка жилищных площадей. Несмотря на это были воплощены
          амбициозные планы по строительству 7-ми каменных высоток, и ряда новых
          зданий, так называемый ответ американским небоскребам и показательное
          становление в Москве Сталинской архитектуры (Сталинский ампир).
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="leftCard__text-paragraph"
        >
          В послевоенные годы генеральный план реконструкции Москвы продолжил
          реализовываться, но со значительными корректировками в планах. С 1948
          года реконструировали ВСХВ, преобразовав к 1958 году в ВДНХ СССР. В
          1955 году в ЦПКиО имени Горького возвели величественную каменную арку,
          ставшую главным входом в парк.
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="leftCard__text-paragraph"
        >
          В это время прекращается снос православных храмов, многие здания
          храмов, лишенные крестов и колоколен, превращаются в административные
          здания, это позволило им сохраниться до нашего времени и будущей
          реконструкции.
        </motion.p>{" "}
      </div>
    </>
  );
};

export default PostWarYears;
