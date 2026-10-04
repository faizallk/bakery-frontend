import React from "react";

import BakeryHero from "./components/BakeryHero";
import BakeryCategories from "./components/BakeryCategories";
import BakeryProducts from "./components/BakeryProducts";
import FreshBakeSection from "./components/FreshBakeSection";

import ScrollReveal from "../../components/ScrollReveal";

function Bakery() {
  return (
    <main className="min-h-screen bg-[#fff9f1]">
      <BakeryHero />

      <ScrollReveal duration={450} distance={35}>
        <BakeryCategories />
      </ScrollReveal>

      <ScrollReveal duration={450} distance={35}>
        <BakeryProducts />
      </ScrollReveal>

      <ScrollReveal duration={450} distance={35}>
        <FreshBakeSection />
      </ScrollReveal>
    </main>
  );
}

export default Bakery;