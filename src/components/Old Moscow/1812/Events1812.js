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

const Events1812 = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="rightCard__img d-none d-xl-block"
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_13.jpg"
        custom={1}
      />
      <div className="rightCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-title"
          id="Events1812"
          custom={1}
        >
          События 1812 года в Москве
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="rightCard__text-paragraph"
        >
          Непростая роль Москвы, ставшая общеизвестной, провозглашаемая
          классиками Серебряного века литературы, пришлась на пору Отечественной
          войны 1812 года.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="rightCard__text-paragraph"
        >
          После сражения в Бородино 2 сентября 1812 года Наполеон с французской
          армией вступил в оставленный населением и войсками город, в котором
          почти сразу начался, такой очередной в истории Москвы, пожар, раздутый
          на многие строения сильным ветром.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="rightCard__text-paragraph"
        >
          Оставление москвичами города, горящим пожаром, привело к тому, что
          наполеоновская армия осталась без продуктов и запасов, да и открытые
          винные погреба изрядно расслабили уставших французских офицеров, что
          вынудило месяц спустя к 6-11 октябрю выйти из города ни с чем, что и
          стало началом конца Отечественной войны 1812 года.
        </motion.p>
      </div>
    </>
  );
};

export default Events1812;
