import React from "react";

import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import OpeningHours from "./components/OpeningHours";
import BakeryLocation from "./components/BakeryLocation";
import FAQSection from "./components/FAQSection";
import ContactCTA from "./components/ContactCTA";

import ScrollReveal from "../../components/ScrollReveal";

function Contact() {
  return (
    <main className="min-h-screen bg-[#fff9f1]">

      <ContactHero />

      <ScrollReveal duration={400} distance={30}>
        <ContactInfo />
      </ScrollReveal>

      <ScrollReveal duration={400} distance={30}>
        <ContactForm />
      </ScrollReveal>

      <ScrollReveal duration={400} distance={30}>
        <OpeningHours />
      </ScrollReveal>

      <ScrollReveal duration={400} distance={30}>
        <BakeryLocation />
      </ScrollReveal>

      <ScrollReveal duration={400} distance={30}>
        <FAQSection />
      </ScrollReveal>

      <ScrollReveal duration={400} distance={30}>
        <ContactCTA />
      </ScrollReveal>

    </main>
  );
}

export default Contact;