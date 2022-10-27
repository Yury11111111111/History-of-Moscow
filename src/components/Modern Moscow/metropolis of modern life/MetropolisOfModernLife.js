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

const MetropolisOfModernLife = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="rightCard__img d-none d-xl-block"
        style={{ marginTop: 360 }}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_45.jpg"
        custom={1}
      />
      <div className="rightCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-title"
          id="MetropolisOfModernLife"
          style={{ marginTop: 370 }}
          custom={1}
        >
          Москва — мегаполис современной жизни
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="rightCard__text-paragraph"
        >
          Сейчас Москва выросла до размеров крупнейшего мегаполиса Европы и
          мира, выросла не только по размерам, но и по качеству жизни. Москве с
          трудом, подвергаясь натиску со стороны коммерческой урбанизации,
          удалось где частично, а где полностью сохранить старую часть города.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="rightCard__text-paragraph"
        >
          Огромная работа в решении транспортных сфер, социальных услуг
          населению, позволила вывести город к стандартам современного города
          для удобства работы, передвижения и жизни. Многое уделяется также
          созданию и поддержке зеленых и пешеходных зон города, парков,
          набережных и прогулочных улиц.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="rightCard__text-paragraph"
        >
          За прошедшие века и десятилетия Москва перестраивалась не раз, и
          сейчас, спустя много-много лет город является главным центром России,
          столицей крупнейшей страны мира, началом всех начал в истории нашего
          государства, с непростой судьбой и колоритным характером, в
          расходящихся исторических лучах кольцестроения, город-солнце — Москва.
        </motion.p>
      </div>
    </>
  );
};

export default MetropolisOfModernLife;
