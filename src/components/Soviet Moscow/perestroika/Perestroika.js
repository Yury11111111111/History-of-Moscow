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

const Perestroika = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="leftCard__img d-none d-xl-block"
        style={{ marginTop: 300 }}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_35.jpg"
        custom={1}
      />
      <div className="leftCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-title"
          id="Perestroika"
          custom={1}
        >
          Москва времен перестройки
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="leftCard__text-paragraph"
        >
          В конце 80-х годов — начале 90-х годов Москва являясь столицей
          тогдашнего СССР, стала ареной значительных событий в основном на
          политических изменениях. К 1985 году закончилось время холодной войны
          и начались масштабные перемены в идеологии среди населения, что
          повлияло на экономическую и политическую деятельность СССР.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="leftCard__text-paragraph"
        >
          Михаил Сергеевич Горбачев избирается 5-м Генеральным секретарем ЦК
          КПСС (высшая должность в Коммунистической партии Советского союза).
          Горбачевская политика путем проведения реформ перестройки не
          увенчалась успехом и позиции Советского союза падают, как на внешней
          политической арене, так и массово среди населения СССР. Всё большая
          свобода слова и отпускание режимов, окончательная оттепель, делает
          привлекает в страну коммерческие движения со стороны других стран.
          Меняется мода в Москве, все больше москвичи хотят походить на
          "свободных людей" с западного мира, происходит смена идеалов с
          социалистического мышления на "кооперативное".
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="leftCard__text-paragraph"
        >
          В 1989 году москвичи, несмотря на сопротивление коммунистической
          партии, подавляющим большинством избирают Бориса Николаевича Ельцина
          народным депутатом. Страна подходит ко времени накала больших событий,
          которые вот-вот произойдут в Москве, в столице распадающегося некогда
          сильнейшего государства СССР.
        </motion.p>{" "}
      </div>
    </>
  );
};

export default Perestroika;
