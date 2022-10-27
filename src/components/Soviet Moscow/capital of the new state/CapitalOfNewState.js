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

const CapitalOfNewState = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="rightCard__img d-none d-xl-block"
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_20.jpg"
        custom={1}
      />
      <div className="rightCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-title"
          id="CapitalOfNewState"
          custom={1}
        >
          Москва — столица нового государства
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="rightCard__text-paragraph"
        >
          Новая власть в городе была установлена 3 ноября 1917 года, и в марте
          1918 года из Петербурга переехало в Москву правительство во главе с
          Владимиром Ильичом Лениным. Москва была объявлена столицей нового
          государства.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="rightCard__text-paragraph"
        >
          После гражданской войны и с введением НЭП (новой экономической
          политики), это было временное допущение капитализма, Москва начала
          восстанавливаться. С конца 1920-х годов в столице открылись новые
          предприятия самых разных отраслей промышленности — авиационной,
          автомобильной, станкостроительной, часовой, электротехнической и
          других. В Москву была переведена Академия наук.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="rightCard__text-paragraph"
        >
          Очередной приток в новую столицу населения из сельских районов России
          быстро поднял численность жителей города. Так, в 1923 году в Москве
          насчитывалось 1,5 млн. жителей, а к 1936 году количество населения
          состовляло уже 3,6 млн. человек. Постоянная нехватка жилой площади
          остро ощущалась в первые десятилетия правления советской власти и это
          стало перерастать в серьезную проблему.
        </motion.p>
      </div>
    </>
  );
};

export default CapitalOfNewState;
