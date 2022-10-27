import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemIds = [
  { title: "AncientMoscow" },
  { title: "FoundationOfMoscow" },
  { title: "FortificationOfMoscow" },
  { title: "FormationOfMoscow" },
  { title: "MoscowKremlin" },
  { title: "RedSquare" },
  { title: "TimeOfTroubles" },
  { title: "MoscowExpansion" },
  { title: "MoscowLosesCrown" },
  { title: "CulturalHeyday" },
  { title: "Events1812" },
  { title: "MoscowDevelopment" },
  { title: "PreRevolutionaryMoscow" },
  { title: "CapitalOfNewState" },
  { title: "NewCapital" },
  { title: "GreatPatrioticWar" },
  { title: "PostWarYears" },
  { title: "KhrushchevThaw" },
  { title: "BrezhnevStagnation" },
  { title: "Olympiad80" },
  { title: "Perestroika" },
  { title: "TimeForChange" },
  { title: "ReconstructionOfMoscow" },
  { title: "MetropolisOfModernLife" },
];

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={Math.random()} title={i.title} />
    ))}
  </motion.ul>
);
