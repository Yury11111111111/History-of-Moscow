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

const MoscowLosesCrown = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="rightCard__img d-none d-xl-block"
        style={{marginTop: 400}}
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_11.jpg"
        custom={1}
      />
      <div className="rightCard__text"
       style={{marginTop: 400}}>
        <motion.h2
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-title"
          id="MoscowLosesCrown"
          custom={1}
        >
          Москва теряет корону главного города
        </motion.h2>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="rightCard__text-paragraph"
        >
          На время правления Петра I Москва перестала быть столичным городом. Не
          любил Петр I Москву, а был увлечен возведением нового современного
          города на Неве (быть ближе к Европе). И Москва на долгие десятки лет
          остановилась в развитии.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="rightCard__text-paragraph"
        >
          В 1737 году неприятности продолжались для Москвы, крупнейший пожар,
          почти уничтожил весь город.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="rightCard__text-paragraph"
        >
          Начался пожар с Волхонки от свечи, поставленной перед иконой, отсюда
          берет и поговорка "Москва от копеечной свечи сгорела".
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={5}
          className="rightCard__text-paragraph"
        >
          В 1742 году изменилась граница города: теперь она стала проходить по
          Камер-Коллежскому валу, так называемая линия контроля, устроенная за
          наблюдением и отслеживанием перевозок контрабандных товаров. Москва
          ведь и тогда вне статусе столицы продолжала быть одним из торговых
          городов Европы. Все пути сводились в Москве и шли на разные части
          света.{" "}
        </motion.p>
      </div>
    </>
  );
};

export default MoscowLosesCrown;
