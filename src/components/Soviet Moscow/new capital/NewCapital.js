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

const NewCapital = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="leftCard__img d-none d-xl-block"
        style={{ marginTop: 300 }}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_22.jpg"
        custom={1}
      />
      <div className="leftCard__text">
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="leftCard__text-title"
          id="NewCapital"
          custom={1}
        >
          Новая Столица
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="leftCard__text-paragraph"
        >
          Разработанный под руководством архитекторов Владимира Семёнова и
          Сергея Чернышёва план реконструкции должен был превратить старую
          Москву в новый процветающий социалистический город — на планете.
          Утверждён план 10 июля 1935 года постановлением ЦК ВКП(б) и СНК СССР №
          1435 «О генеральном плане реконструкции города Москвы».
        </motion.p>
        
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="leftCard__text-paragraph"
        >
          Особенное место в генплане имели амбициозные идеи строительства здания
          Дворца Советов. Планы касались и расширения Красной площади, для этого
          планировалось снести здание торговых рядов (нынешнего ГУМа) и другие
          исторические объекты, но сам Дворец Советов приняли решение строить на
          месте Храма Христа Спасителя, который был взорван для этой цели в 1931
          году.
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="leftCard__text-paragraph"
        >
          Уже была готова площадка на месте снесенного храма, был вырыт
          гигантский котлован и залит нижний фундамент. Этим планам помешала,
          начавшаяся в 1941 году, Великая Отечественная Война. И в будущем на
          этом месте вырытый котлован использовали для сооружения открытого
          бассейна "Москва".
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={5}
          className="leftCard__text-paragraph"
        >
          Серьезной трансформации подверглись городские системы водоснабжения и
          канализации. К 1937 году закончилось превращение Москва-реки в 128-ми
          километровый канал, соединяющий реку Москву с Волгой, частично
          проходящий в Москве (получил название — Канал имени Москвы).
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={6}
          className="leftCard__text-paragraph"
        >
          Были выстроены новые каменные набережные вдоль Москвы и за её
          пределами, многоуровневые шлюзы и мосты.{" "}
        </motion.p>{" "}
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={7}
          className="leftCard__text-paragraph"
        >
          К сожалению, хоть и Генеральный план решил многие проблемы, превратив
          город в крупную социалистическую столицу — символ социализма и труда,
          но были и разрушены многие исторические памятники: древние монастыри,
          Китай-городская стена, Казанский собор на Красной площади,
          Воскресенские ворота, Храм Христа Спасителя, Сухарева башня, памятники
          Александру II и Александру III. В современное время многие из этих
          исторических наследий были восстановлены в конце XX века.
        </motion.p>{" "}
      </div>
    </>
  );
};

export default NewCapital;
