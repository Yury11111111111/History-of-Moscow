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

const BrezhnevStagnation = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="leftCard__img d-none d-xl-block"
        style={{ marginTop: 300 }}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_32.jpg"
        custom={1}
      />
      <div className="leftCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-title"
          id="BrezhnevStagnation"
          custom={1}
        >
          Брежневский застой
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="leftCard__text-paragraph"
        >
          По этому Генплану началась комплексная застройка новых территорий
          Москвы, с современными районами, новой инфраструктурой: школами,
          библиотеками, поликлиниками, и прокладка транспортных маршрутов в
          отдаленные районы города до кольцевой автодороги.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="leftCard__text-paragraph"
        >
          Появились крупные жилые районы: Медведково, Свиблово,
          Перово-Новогиреево, Тушино, Кузьминки, Выхино, Люблино, Беляево,
          Давыдково, Кунцево и др. А также начали строится крупные спальные
          жилые массивы Чертаново, Коньково, Печатники, Тропарево, Матвеевское,
          Теплый Стан.
        </motion.p>{" "}
      </div>
    </>
  );
};

export default BrezhnevStagnation;
