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

const Olympiad80 = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="rightCard__img d-none d-xl-block"
        style={{marginTop: 360}}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_33.jpg"
        custom={1}
      />
      <div className="rightCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-title"
          id="Olympiad80"
          style={{marginTop: 370}}
          custom={1}
        >
          Олимипиада-80 в Москве
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="rightCard__text-paragraph"
        >
          Осенью 1974 года столицей проведения XXII летних олимпийских игр была
          выбрана Москва. Город задолго начал готовиться к этому грандиозному
          событию тех, довольно "размеренных и скучных" застойных лет. Была
          построена гостиница "Космос", Олимпийская деревня и целый район в
          Тропарево, где будут останавливаться олимпийские спортсмены и гости
          Олимпиады. В 1976—1979 годах был капитально отремонтирован главный
          стадион "Лужники", где был зажжен олимпийский огонь. 19 июля 1980 года
          прямо к началу олимпийских игр был открыт крытый спортивный комплекс
          "Олимпийский".
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="rightCard__text-paragraph"
        >
          XXII Олимпийские игры в Москве прошли с 19 июля по 3 августа 1980
          года.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="rightCard__text-paragraph"
        >
          Знаменитый 8-ми метровый надувной мишка, символ Олимпийских игр в
          Москве был запущен в небо со стадиона "Лужники" на церемонии закрытия
          олимпийских игр под песню "До свиданья, Москва" Льва Лещенко.
          Трогательное зрелище настолько, что зрители и участники не могли
          сдержать слёз.
        </motion.p>
      </div>
    </>
  );
};

export default Olympiad80;
