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

const RedSquare = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="leftCard__img d-none d-xl-block"
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_7.jpg"
        custom={1}
      />
      <div className="leftCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-title"
          id="RedSquare"
          custom={1}
        >
          Красная площадь
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="leftCard__text-paragraph"
        >
          В конце XV века на территории, прилегающей к еще старым белокаменным
          стенам Кремля образовалась большая территория, застроенная
          постройками.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="leftCard__text-paragraph"
        >
          Со строительством новых стен Кремля Иван III приказал снести все
          строения, включая посад, освободилась широкая территория. Довольно
          быстро территория была заселена мелкими лавочками и вскоре
          образовалась площадь, именуемая Торгом (равно, как и Торговая
          площадь).
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="leftCard__text-paragraph"
        >
          Некоторое время площадь называли и Троицкой, <br /> по церкви Троицкой  на
          углу, но строительство в 1555-1561 <br /> годах Храм Василия Блаженного,
          вскоре и здание  Земского <br /> приказа в 1564 году, призвали называть эту
          площадь <br /> Красной (т.е. Красивой площадью). Так название <br /> закрепилось и
          по наше время.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={5}
          className="leftCard__text-paragraph"
        >
          Красная площадь — главная в Москве, место торжественных событий в
          стране. Длина площади — 330 метров, её ширина — 75 метров, а общая
          площадь — 24 750 м². Вымощена брусчаткой из привезенного материала
          габбродолерита с крымского полуострова.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={6}
          className="leftCard__text-paragraph"
        >
          В годы царствования сына Ивана Грозного царя Фёдора, а в ещё большей
          особенности известного царя Бориса Годунова, как и градостроителя
          Москвы. При нём строился Белый город, часть посада, окруженный
          (третьей после после стен Кремля и Китай-города) каменной стеной, а
          дальнюю часть посада окружили земляным рвом с деревянными стенами —
          Деревянный город, или Скородом, именуемый по быстроте строительства.{" "}
        </motion.p>
      </div>
    </>
  );
};

export default RedSquare;
