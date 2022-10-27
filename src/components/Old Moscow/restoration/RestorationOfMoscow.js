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

const RestorationOfMoscow = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="leftCard__img d-none d-xl-block"
        style={{ marginTop: 300 }}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_14.jpg"
        custom={1}
      />
      <div className="leftCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-title"
          id="RestorationOfMoscow"
          custom={1}
        >
          Восстановление Москвы
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="leftCard__text-paragraph"
        >
          В городе сгорело около 70% всех домов и строений. Просто так отстроить
          заново Москву было непросто, предусматривалась перепланировка многих
          районов.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="leftCard__text-paragraph"
        >
          Река Неглинка была заключена в трубу, прямо под новым Александровским
          садом, разбитом вдоль кремлевской стены. <br /> Тут же выстроили Манеж,
          Театральную площадь на которой <br /> возвели Большой Петровский театр.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="leftCard__text-paragraph"
        >
          Здание театра просуществовало 30 лет, но его постигла вся та же
          печальная участь. Вспыхнувший пожар 11 марта 1853 года не могли
          потушить три дня, и он уничтожил все что только смог, полностью.
          Здание восстанавливали с самого начала, проводя огромные конкурсы
          среди архитекторов и в августе 1856 года Большой театр вновь распахнул
          свои двери перед зрительским бомондом.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={5}
          className="leftCard__text-paragraph"
        >
          После тех печальных событий Отечественной войны к концу 1820-х годов
          Москва была восстановлена полностью и продолжала стремительно
          развиваться.
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={6}
          className="leftCard__text-paragraph"
        >
          На Красной площади открылся памятник Минину и Пожарскому, на
          Воробьевых горах заложен храм Христа Спасителя, строительство которого
          велось почти 44 года.{" "}
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={7}
          className="leftCard__text-paragraph"
        >
          В 1847 году открылись линии первого общественного транспорта (— то
          были конные линейки), а с 1851 года началось железнодорожное сообщение
          с Петербургом (тогдашнего столичного города).{" "}
        </motion.p>{" "}
      </div>
    </>
  );
};

export default RestorationOfMoscow;
