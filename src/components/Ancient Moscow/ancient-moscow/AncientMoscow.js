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

const AncientMoscow = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="rightCard__img d-none d-xl-block"
        style={{ marginTop: 210 }}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_1.jpg"
        custom={1}
      />
      <div className="rightCard__text" style={{ marginTop: 210 }}>
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-title"
          id="AncientMoscow"
          custom={1}
        >
          Древняя Москва
        </motion.h2>

        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-paragraph"
          custom={2}
        >
          Далекий-далекий 1147 год. На крутом холме над рекой начинает свою{" "}
          <br />
          историю древний город Москва, хотя поселения на Боровицком холме и его{" "}
          <br />
          окрестностях появились гораздо раньше, упомянутого в древней летописи{" "}
          <br />
          года.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-paragraph"
          custom={3}
        >
          При раскопках в Московском Кремле были обнаружены артефакты, <br />
          свидетельствующие о существовании Москвы в конце XI века. Это были{" "}
          <br />
          свинцовая печать, датируемая между 1093 и 1096 годами, печатью
          скрепляли <br />
          грамоты. Но еще большим фактом было выявление наличие рва, защищавшего{" "}
          <br />
          поселение в XI-XII веках.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-paragraph"
          custom={4}
        >
          Можно было предположить, что Москва была основана еще в конце XI века,{" "}
          <br />
          как княжеский форпост в земле вятичей, противившихся покорению со{" "}
          <br />
          стороны ростово-суздальских князей.
        </motion.p>
      </div>
    </>
  );
};

export default AncientMoscow;
