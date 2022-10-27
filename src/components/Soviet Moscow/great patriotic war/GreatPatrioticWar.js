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

const GreatPatrioticWar = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="rightCard__img d-none d-xl-block"
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_26.jpg"
        custom={1}
      />
      <div className="rightCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-title"
          id="GreatPatrioticWar"
          custom={1}
        >
          Москва во время Великой Отечественной Войны
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="rightCard__text-paragraph"
        >
          В первые месяцы (середина октября 1941 года), после объявленной
          Гитлером и фашистскими захватчиками войны против СССР, Москва
          оказалась под серьезной угрозой захвата, но немецкие войска были
          остановлены героическим сопротивлением советских защитников
          практически на самых подступах города. А уже в начале декабря
          советские войска перешли в наступление и угроза городу была снята.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="rightCard__text-paragraph"
        >
          «Ни шагу назад!» — приказ № 227 Наркома обороны СССР И. В. Сталина от
          28 июля 1942 года. По этому приказу о мерах укрепления дисциплины и
          порядка в Красной Армии запрещено было отступать во что бы то ни
          стало.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="rightCard__text-paragraph"
        >
          После окончания войны (вторичное по требованию Сталина после первого
          подписания представителями Верховного командования вермахта, акта в
          ночь с 8 на 9 мая о капитуляции нацисткой Германии) 24 июня 1945 года
          в Москве состоялся торжественный Парад Победы.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={5}
          className="rightCard__text-paragraph"
        >
          Парад Победы — историческое событие, состоявшееся 24 июня 1945 года на
          Красной площади, в ознаменование победы СССР над Германией в Великой
          Отечественной войне.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={6}
          className="rightCard__text-paragraph"
        >
          На парад вышли сводные полки фронтов, сводный полк наркомата обороны,
          сводный полк Военно-морского Флота, военные академии, военные училища
          и войска Московского гарнизона. Принимал Парад Победы Маршал
          Советского Союза Г. К. Жуков, командовал парадом Маршал Советского
          Союза К. К. Рокоссовский. Жуков и Рокоссовский проехали по Красной
          площади на белом и караковом (коричневого окраса) конях. И. В. Сталин
          наблюдал за парадом с трибуны Мавзолея Ленина.{" "}
        </motion.p>
      </div>
    </>
  );
};

export default GreatPatrioticWar;
