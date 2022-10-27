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

const KhrushchevThaw = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="rightCard__img d-none d-xl-block"
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_30.jpg"
        custom={1}
      />
      <div className="rightCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-title"
          id="KhrushchevThaw"
          custom={1}
        >
          Хрущевская оттепель
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="rightCard__text-paragraph"
        >
          Смена диктатора (после смерти Сталина) на более мягкого и
          хозяйственного Хрущева, переключило строительственные мощности с
          показательного монументализма на конкретные вопросы
          жилищно-хозяйственной политики. Так началась реализация переселения из
          одноэтажного жилья в многоквартирники. В огромном количестве
          возводилось массовое жилье, так называемые "хрущевки" (пятиэтажные
          дома с упрощенной планировкой).
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="rightCard__text-paragraph"
        >
          "Хрущевки" — представляли собой типовые проекты многоквартирных домов
          с упрощенной структурой. Максимальная высота — 5 этажей. По тем нормам
          жилищного строительства - это максимальное число этажей, где не
          требовался лифт. Высота потолков 2,5-2,6 метров, площадь кухни 5-7
          метров, санузел смежный, в 2-х и 3-х комнатных квартирах гостиная
          является проходной комнатой.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="rightCard__text-paragraph"
        >
          В 1960 году границей Москвы стала кольцевая автомобильная дорога и
          площадь города достигла 878 км2. Строительство в центре города
          приобрело безвкусный стиль, простой и пренебрежительный к историческим
          и национальным наследиям.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={5}
          className="rightCard__text-paragraph"
        >
          Так был построен проспект Калинина (Новый Арбат в наст.время) в
          прямолинейных чертах и домах в виде распахнутых книг, лишенный
          эстетического вкуса. В 1961 году в Кремле возвели Кремлевский Дворец
          Съездов, нарушивший исторический облик внутри стен Кремля. В 1964—1967
          годах построена гостиница "Россия" (в наст.время на этом месте Парк
          Зарядье) сместив на себя фокус со всей панорамы Красной площади.
        </motion.p>
      </div>
    </>
  );
};

export default KhrushchevThaw;
