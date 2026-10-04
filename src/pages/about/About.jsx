import React from "react";

import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";
import WhyChooseUs from "./components/WhyChooseUs";
import OurProcess from "./components/OurProcess";
import MeetOurBakers from "./components/MeetOurBakers";

import ScrollReveal from "../../components/ScrollReveal";

function About() {
  return (
    <main className="min-h-screen bg-[#fff9f1]">
      <AboutHero />

      <ScrollReveal duration={450} distance={35}>
        <OurStory />
      </ScrollReveal>

      <ScrollReveal duration={450} distance={35}>
        <OurValues />
      </ScrollReveal>

      <ScrollReveal duration={450} distance={35}>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal duration={450} distance={35}>
        <OurProcess />
      </ScrollReveal>

      <ScrollReveal duration={450} distance={35}>
        <MeetOurBakers />
      </ScrollReveal>
    </main>
  );
}

export default About;