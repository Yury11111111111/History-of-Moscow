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

const FortificationOfMoscow = () => {
  return (
    <>
      <motion.img
        initial="hiden"
        whileInView="visible"
        variants={Animation}
        className="rightCard__img d-none d-xl-block"
        src="https://moscowchronology.ru/sites/default/files/images/Moscow_3.jpg"
        custom={1}
      />
      <div className="rightCard__text">
        <motion.h1
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          className="rightCard__text-title"
          is="FortificationOfMoscow"
          custom={1}
        >
          Укрепление Москвы
        </motion.h1>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={2}
          className="rightCard__text-paragraph"
        >
          Сколько же раз еще в истории города Москве предстояло гореть пожаром и
          неоднократно выстоять все напасти, попытки покорения и трудности.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={3}
          className="rightCard__text-paragraph"
        >
          Так в 1238 году Москву разорили и сожгли полчища хана Батыя "...люди
          избиша от старьца и до сущаго младенца; а град и церкви святыя огневи
          предаша, и манастыри вси и села пожгоша, и много именья въземше
          отъидоше"
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={4}
          className="rightCard__text-paragraph"
        >
          На Руси на много лет установилась власть монгольских ханов, но Москва
          была сравнительно далеко от Золотой Орды и в этот отдаленный уголок
          потянулись торговцы, крестьяне, ремесленники, по сути они и сыграли
          роль в возвышении и становлении города Москвы, как торгового центра
          Руси.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={5}
          className="rightCard__text-paragraph"
        >
          Москва и окружающие её села достались сыну великого князя Александра
          Невского Даниилу, который и стал первым московским удельным князем. А
          вот его сын Иван был смекалист, и довольно успешен в своих делах, с
          легкостью округлял свои владения монетой, так и получил прозвище
          Калита.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={6}
          className="rightCard__text-paragraph"
        >
          Преемники Ивана Калиты князья Семен Гордый и Иван Красный также
          следовали его примеру и Москва возвышалась года из года, да так, что
          перенесли в Москву кафедру Митрополита всея Руси после 1326 года, да
          начали строить каменный собор Успения Богородицы.
        </motion.p>
        <motion.p
          initial="hiden"
          whileInView="visible"
          variants={Animation}
          custom={7}
          className="rightCard__text-paragraph"
        >
          Победа на Куликовском поле в 1380 году стала предвестником
          освобождения от татаро-монгольского ига, что подтвердило
          главенствующую роль Московского княжества среди всех княжеств на Руси.
        </motion.p>
      </div>
    </>
  );
};

export default FortificationOfMoscow;
