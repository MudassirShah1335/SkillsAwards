import React from "react";
import Home from "../src/Pages/Home";
import Biglmg from "./Pages/Biglmg";
import BenefitSec from "./Compunent/BenefitSec";
import Choseus from "./Pages/Choseus";
import EducationalPartner from "./Pages/EducationalPartner";
import Globalskill from "./Pages/Globalskill";
import JoinOur from "./Pages/JoinOur";
import ChangeRoad from "./Pages/ChangeRoad";
import Contactus from "./Pages/Contactus";
import { Formik } from "formik";

const App = () => {
  return (
    <div>
      {/* <Formik /> */}
      <Home />
      <BenefitSec />
      <Biglmg />
      <Choseus />
      <EducationalPartner />
      <Globalskill />
      <JoinOur />
      <ChangeRoad />
      <Contactus />
    </div>
  );
};

export default App;
