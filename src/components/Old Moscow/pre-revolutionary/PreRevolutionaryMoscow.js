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

const PreRevolutionaryMoscow = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="leftCard__img d-none d-xl-block"
        style={{ marginTop: 300 }}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_18.jpg"
        custom={1}
      />
      <div className="leftCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-title"
          id="PreRevolutionaryMoscow"
          custom={1}
        >
          Дореволюционная Москва
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="leftCard__text-paragraph"
        >
          В начале XX века Москва испытала просто невероятный по размаху бум
          строительства. Только одним летом 1910 года было построено более 3000
          зданий, как жилых, так и административных.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="leftCard__text-paragraph"
        >
          Появлялись общественные заведения, чуть ли ни на каждой улице
          открывались учебные и культурные заведения — Коммерческий институт,
          Универститет Шанявского, театры, училища, вокзалы, больницы, родильные
          дома, богодельни и приюты. Открыли свои двери знаменитые музеи —
          Исторический, Политехнический, Зоологический, музей Изящных искусств
          (будущий Государственный музей истории искусств имени А. С. Пушкина) и
          другие заведения.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="leftCard__text-paragraph"
        >
          Тем временем, в стране происходило и стремительное политическое
          развитие, сосредотачиваемое и в Москве, подогреваемое быстрым темпом
          роста города, а значит и ростом, как благополучия, так и определенных
          трудностей и стеснений, в то время как и волнений со стороны бедной и
          рабочей части населения.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={5}
          className="leftCard__text-paragraph"
        >
          Создавались наспех политические партии, росло забастовочное движение,
          приобретавшее со временем характер массовости. Нарастал накал между
          разными слоями дворянских кровей и простого народа, слоем
          предпринимателей и простых рабочих.
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={6}
          className="leftCard__text-paragraph"
        >
          Все эти предпосылки привели к революционным событиям 1917 года и в
          октябре-ноябре партия большевиков совершила государственный переворот.
          Главные его события разворачивались в Петербурге, а в самой Москве
          волнения проходили с применением вооруженной силы, был подвергнут
          артиллерийскому обстрелу Кремль, что осталось менее замеченным в
          истории.
        </motion.p>{" "}
      </div>
    </>
  );
};

export default PreRevolutionaryMoscow;
