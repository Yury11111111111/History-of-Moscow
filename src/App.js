import React from "react";
import Header from "./components/Other/header/Header";
import MenuBurger from "./components/Other/menuBurger/MenuBurger";
// import AncientMoscow from "./components/Ancient Moscow/ancient-moscow/AncientMoscow";
// import FoundationOfMoscow from "./components/Ancient Moscow/foundation/FoundationOfMoscow";
// import FortificationOfMoscow from "./components/Ancient Moscow/fortification/FortificationOfMoscow";
// import FormationOfMoscow from "./components/Ancient Moscow/formation/FormationOfMoscow";
// import MoscowKremlin from "./components/Ancient Moscow/kremlin/MoscowKremlin";
// import RedSquare from "./components/Ancient Moscow/red square/RedSquare";
// import TimeOfTroubles from "./components/Ancient Moscow/time of troubles/TimeOfTroubles";
// import MoscowExpansion from "./components/Old Moscow/expansion/MoscowExpansion";
// import MoscowLosesCrown from "./components/Old Moscow/loses crown/MoscowLosesCrown";
// import CulturalHeyday from "./components/Old Moscow/cultural heyday/CulturalHeyday";
// import Events1812 from "./components/Old Moscow/1812/Events1812";
// import RestorationOfMoscow from "./components/Old Moscow/restoration/RestorationOfMoscow";
// import MoscowDevelopment from "./components/Old Moscow/development/MoscowDevelopment";
// import PreRevolutionaryMoscow from "./components/Old Moscow/pre-revolutionary/PreRevolutionaryMoscow";
// import CapitalOfNewState from "./components/Soviet Moscow/capital of the new state/CapitalOfNewState";
// import NewCapital from "./components/Soviet Moscow/new capital/NewCapital";
// import GreatPatrioticWar from "./components/Soviet Moscow/great patriotic war/GreatPatrioticWar";
// import PostWarYears from "./components/Soviet Moscow/post-war/PostWarYears";
// import KhrushchevThaw from "./components/Soviet Moscow/khrushchev thaw/KhrushchevThaw";
// import BrezhnevStagnation from "./components/Soviet Moscow/brezhnev stagnation/BrezhnevStagnation";
// import Olympiad80 from "./components/Soviet Moscow/olympiad-80/Olympiad80";
// import Perestroika from "./components/Soviet Moscow/perestroika/Perestroika";
// import TimeForChange from "./components/Modern Moscow/time for change/TimeForChange";
// import ReconstructionOfMoscow from "./components/Modern Moscow/reconstruction/ReconstructionOfMoscow";
// import MetropolisOfModernLife from "./components/Modern Moscow/metropolis of modern life/MetropolisOfModernLife";
import * as All from "./Imports";

import "./style/App.scss";

const App = () => {
  return (
    <>
      <MenuBurger />
      <Header />
      <All.AncientMoscow />
      <All.FoundationOfMoscow />
      <All.FortificationOfMoscow />
      <All.FormationOfMoscow />
      <All.MoscowKremlin />
      <All.RedSquare />
      <All.TimeOfTroubles />
      <All.MoscowExpansion />
      <All.MoscowLosesCrown />
      <All.CulturalHeyday />
      <All.Events1812 />
      <All.RestorationOfMoscow />
      <All.MoscowDevelopment />
      <All.PreRevolutionaryMoscow />
      <All.CapitalOfNewState />
      <All.NewCapital />
      <All.GreatPatrioticWar />
      <All.PostWarYears />
      <All.KhrushchevThaw />
      <All.BrezhnevStagnation />
      <All.Olympiad80 />
      <All.Perestroika />
      <All.TimeForChange />
      <All.ReconstructionOfMoscow />
      <All.MetropolisOfModernLife />
    </>
  );
};

export default App;
