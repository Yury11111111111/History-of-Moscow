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

const FormationOfMoscow = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="leftCard__img d-none d-xl-block"
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_4.jpg"
        custom={1}
      />
      <div className="leftCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-title"
          id="FormationOfMoscow"
          custom={1}
        >
          Становление Москвы
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="leftCard__text-paragraph"
        >
          В XIV веке Москва стала стремительно меняться. Стены крепости
          московской при Иване Калите перестроили на новые — дубовые, а к 1367
          году по указу князя Дмитрия Донского были возведены белокаменные
          стены.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="leftCard__text-paragraph"
        >
          В Кремле достроили Успенский собор, ставший главным в московском
          княжестве — именно в нем стали свершаться торжественные мероприятия:
          коронации князей, царей, <br /> а потом и императоров. Были возведены в
          Кремле церкви Иоанна Лествичника, Спаса на Бору, Михаила Архангела,
          заложены Чудов и Вознесенский монастыри.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="leftCard__text-paragraph"
        >
          Вместе с Кремлем росли поселения и на земле вокруг <br /> стен, поднялся
          посад, в конце XIV века обнесенный валом <br /> со рвом. На посаде выросли
          Рождественский, Высокопетровский и Сретенский монастыри, которые
          проложили улицы между посадами и тропинки к селам и разбитым по округе
          поселениям. Выстраивались монастыри и за пределами посадов —
          Андроньевский со Спасским собором, Симонов монастырь.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={5}
          className="leftCard__text-paragraph"
        >
          Великий князь Иван III укрепил власть, централизовал её на Московском
          государстве, присоединив в 1478 году Новгородскую землю. При нем и
          окончилось долгое ордынское владычество.
        </motion.p>
      </div>
    </>
  );
};

export default FormationOfMoscow;
