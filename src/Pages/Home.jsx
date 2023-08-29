import React from "react";
import Header from "../Compunent/Header";
import Herosection from "../Compunent/Herosection";
import Slidemenue from "../Compunent/Slidemenue";
// import BenefitSec from "../Compunent/BenefitSec";

const Home = () => {
  return (
    <section className="bg-[#5a5afb]  ">
      <Slidemenue />
      <Header />
      <Herosection />
      {/* <BenefitSec /> */}
    </section>
  );
};

export default Home;
