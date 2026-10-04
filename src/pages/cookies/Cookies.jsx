import React from "react";

import CookiesHero from "./components/CookiesHero";
import CookiesContent from "./components/CookiesContent";
import CookieTypes from "./components/CookieTypes";
import CookiesCTA from "./components/CookiesCTA";

import ScrollReveal from "../../components/ScrollReveal";

function Cookies() {
  return (
    <main className="min-h-screen bg-[#fff9f1]">

      {/* HERO */}
      <CookiesHero />

      {/* COOKIE POLICY CONTENT */}
      <ScrollReveal duration={400} distance={30}>
        <CookiesContent />
      </ScrollReveal>

      {/* COOKIE TYPES */}
      <ScrollReveal duration={400} distance={30}>
        <CookieTypes />
      </ScrollReveal>

      {/* FINAL CTA */}
      <ScrollReveal duration={400} distance={30}>
        <CookiesCTA />
      </ScrollReveal>

    </main>
  );
}

export default Cookies;