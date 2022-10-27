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

const FoundationOfMoscow = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="leftCard__img d-none d-xl-block"
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_2.jpg"
        custom={1}
      />
      <div className="leftCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-title"
          id="FoundationOfMoscow"
          custom={1}
        >
          Основание Москвы
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-paragraph"
          custom={2}
        >
          Первое упоминание Москвы в летописи датируется 1147 годом. Тогда{" "}
          ростово-суздальский князь Юрий Владимирович Долгорукий пригласил
          своего союзника новгород-северского князя Святослава Олеговича
          (кстати, отец князя Игоря из "Слово о полку Игореве") со словами:
          "...приди ко мне, брате, в Москов".
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-paragraph"
          custom={3}
        >
          Принять гостя, щедро угостить его в Москве было вполне возможно, если
          предположить, что это был уже сформированный, довольно укрепленный
          город, а значит <br /> и защищенный, что говорит о его существовании еще <br /> за
          лет пятьдесят до этого события. По летописному <br /> сказанию, Москву на тот
          момент ужеокружали несколько <br /> "сел красных", принадлежавших "боярину
          некого богата <br /> суща Кучко Стефана Ивановича".
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-paragraph"
          custom={4}
        >
          Уже в 1156 году Тверская летопись сообщила об укреплении города
          крепостной стеной. Так появилась территория на вершине Боровицкого
          холма, ставшая крепостью и именуемая и по ныне Кремлем. А вокруг
          раскинулись посадные домики и стали разрастаться селения, соединяемые
          между собой тропами, будущими улочками и кольцами.
        </motion.p>
      </div>
    </>
  );
};

export default FoundationOfMoscow;
