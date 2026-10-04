import React from "react";

import CakeHero from "./components/CakeHero";
import CakeCategories from "./components/CakeCategories";
import CakeProducts from "./components/CakeProducts";

import ScrollReveal from "../../components/ScrollReveal";

function Cake() {
  return (
    <>
      {/* HERO */}
      <CakeHero />

      {/* CATEGORIES */}
      <ScrollReveal
        duration={450}
        distance={35}
      >
        <CakeCategories />
      </ScrollReveal>

      {/* PRODUCTS */}
      <ScrollReveal
        duration={450}
        distance={35}
      >
        <CakeProducts />
      </ScrollReveal>
    </>
  );
}

export default Cake;