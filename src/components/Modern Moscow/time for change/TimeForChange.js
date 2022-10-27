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

const TimeForChange = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="rightCard__img d-none d-xl-block"
        style={{ marginTop: 360 }}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_36.jpg"
        custom={1}
      />
      <div className="rightCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-title"
          id="TimeForChange"
          style={{ marginTop: 370 }}
          custom={1}
        >
          Время перемен
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="rightCard__text-paragraph"
        >
          В 1990 году был провозглашен суверенитет России, а 12 июня 1991 года
          Борис Ельцин народным голосованием избирается первым Президентом
          РСФСР, набрав 45 552 041 голосов (57% от всех голосов), с огромным
          разрывом опередив тогдашнего председателя Советов Министров СССР
          Николая Рыжкова. 10 июля Борис Ельцин приняв присягу на верность
          народу официально вступил в должность Президента РСФСР.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="rightCard__text-paragraph"
        >
          "Я с оптимизмом смотрю в будущее и готов к энергичным действиям.
          Великая Россия поднимается с колен! ...Перейдя через столько
          испытаний, ясно представляя свои цели, мы можем быть твёрдо уверены:
          Россия возродится!" (из речи Б.Н. Ельцина)
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="rightCard__text-paragraph"
        >
          19-21 августа 1991 года в Москве совершались события, названного в
          истории Августовским Путчем. Была совершена попытка государственного
          переворота, которая окончилась провалом и в декабре 1991 года
          Советский Союз прекратил своё существование.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={5}
          className="rightCard__text-paragraph"
        >
          Москва становится столицей Российской Федерации.{" "}
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={6}
          className="rightCard__text-paragraph"
        >
          События в Москве 3-4 октября 1993 года произошли в следствии
          внутриполитического конфликта, получившего своё название, как
          Конституционный кризис. Сопровождались событие вооруженными
          столкновениями на улицах Москвы, был обстрелян Белый дом, и
          сопротивление в итоге было подавлено. В это время в Москве в ночь с 4
          на 5 октября с 23 часов по 5 часов утра был введен комендантский час.{" "}
        </motion.p>
      </div>
    </>
  );
};

export default TimeForChange;
