import React from "react";
import { motion } from "framer-motion";
import "./Header.scss"

const Header = () => {
  return (
    <header>
      <motion.img
        initial={{ x: -100, opacity: 0.8 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="header__img d-none d-xl-block"
        src="https://www.2do2go.ru/uploads/69a07398cf58bb4aefd8370604a17703.jpeg"
        alt="header__img-Moscow"
      />
      <motion.h1
        className="header__title"
        initial={{ x: -100, opacity: 0.2 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        История Москвы
      </motion.h1>
    </header>
  );
};

export default Header;
