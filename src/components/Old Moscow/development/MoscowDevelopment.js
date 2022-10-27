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

const MoscowDevelopment = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="rightCard__img d-none d-xl-block"
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_16.jpg"
        custom={1}
      />
      <div className="rightCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-title"
          id="MoscowDevelopment"
          custom={1}
        >
          Развитие Москвы
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="rightCard__text-paragraph"
        >
          1861 год — отмена крепостного права значительно повлияло на общий
          экономический подъем в жизни города. Именно с тех пор в Москву стали
          стекаться все лучшие умы страны, предприимчивые дельцы в поисках
          золотого рубля, да и простое население в поисках любой работы, которую
          могла дать Москва: от простого рабочего до извозчика и лакея.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="rightCard__text-paragraph"
        >
          С 1830 по 1864 годы население увеличилось на 60 тысяч человек, с 1862
          по 1897 годы — уже более чем на 600 тысяч, достигнув 1 млн 038 тысяч
          жителей.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="rightCard__text-paragraph"
        >
          Москва входила в первую десятку крупнейших городов мира после
          Нью-Йорка, Лондона, Парижа, нескольких других городов и Петербурга.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={5}
          className="rightCard__text-paragraph"
        >
          Москва стала железнодорожным центром России, (чем не мог стать
          Петербург), город стал сосредоточением банковского капитала.{" "}
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={6}
          className="rightCard__text-paragraph"
        >
          В 1872 году начала работать конная железная дорога (прототип будущего
          метро), в 1867 году установили газовое освещение, а в 1883 году первые
          электрические фонари, и вечера в Москве стали светлыми и уютными для
          прогулок.{" "}
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={7}
          className="rightCard__text-paragraph"
        >
          В 1899 году на рельсы вышел первый электрический трамвай.{" "}
        </motion.p>{" "}
      </div>
    </>
  );
};

export default MoscowDevelopment;
