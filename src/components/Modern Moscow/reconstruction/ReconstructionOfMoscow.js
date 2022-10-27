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

const ReconstructionOfMoscow = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="leftCard__img d-none d-xl-block"
        style={{ marginTop: 300 }}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_39.jpg"
        custom={1}
      />
      <div className="leftCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-title"
          id="ReconstructionOfMoscow"
          custom={1}
        >
          Реконструкция Москвы
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="leftCard__text-paragraph"
        >
          В последнее десятилетие XX века в Новой России уже прошли ряд
          глобальных перемен, поменялась жизнь, окончательно сменилось
          мировоззрение и бесповоротно ушел в небытие Советский Союз. Москва
          вместе с Россией, как главный центр по прежнему огромной страны,
          начала меняться.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="leftCard__text-paragraph"
        >
          В 1995 году утверждены официальные символы города Москвы — герб
          Москвы, флаг и гимн столицы.
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="leftCard__text-paragraph"
        >
          Прошла волна сноса символов советской власти, памятников, монументов,
          многим улицам стали возвращаться прежние дореволюционные названия,
          менялись названия и у станций метро. Стремительно начали возрождаться
          церкви, храмы, соборы. Восстанавливаются Воскресенские (Иверские)
          ворота возле Красной площади, там же восстанавливается Иверская
          часовня.
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={5}
          className="leftCard__text-paragraph"
        >
          С 1994 по 1999 год начато воссоздание заново Храм Христа Спасителя,
          взорванного и полностью уничтоженного в 30-е годы советскими
          правителями. Храм был восстановлен полностью, как условная копия
          предыдущего, но с некоторыми привнесенными современными условиями, 19
          августа 2000 года прошло великое освящение храма.{" "}
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={6}
          className="leftCard__text-paragraph"
        >
          20 августа 2000 года в новом Храме Христа Спасителя состоялась
          канонизация расстрелянной семьи Романовых.{" "}
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={7}
          className="leftCard__text-paragraph"
        >
          Тем не менее, многие реконструированные здания, а также новая
          архитектура современной Москвы, зачастую справедливо подвергается
          критике. Так, плотность застроек выросла в несколько раз, не все новые
          здания выдержаны в гармонии с архитектурным стилем близких с ними
          исторических построек, многие станции метро, как и фасады прежних
          зданий, затерялись в открывшихся крупных торговых и бизнес центрах.{" "}
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={8}
          className="leftCard__text-paragraph"
        >
          С 1995 года по 2022 год ведется строительство современного комплекса
          торгово-офисных зданий ММДЦ "Москва-Сити". Состоит комплекс из 23
          запланированных высокоэтажных башен, многие из которых уже построены и
          функционируют. Самое высокое строение комплекса — башня Федерация,
          Восток (374 метра){" "}
        </motion.p>{" "}
      </div>
    </>
  );
};

export default ReconstructionOfMoscow;
