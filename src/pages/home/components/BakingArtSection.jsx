import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Wheat,
  Heart,
  ChefHat,
} from "lucide-react";

import bakeryImage from "../../../assets/bakery.jpg";
import croissantImage from "../../../assets/croissant.jpg";

function BakingArtSection() {
  const features = [
    {
      id: 1,
      icon: Wheat,
      number: "01",
      title: "Quality Ingredients",
      description:
        "Carefully selected ingredients are the foundation of everything we bake.",
      bg: "#ffdf38",
    },
    {
      id: 2,
      icon: ChefHat,
      number: "02",
      title: "Skilled Bakers",
      description:
        "Every creation is shaped by skilled hands, patience and experience.",
      bg: "#8edbe3",
    },
    {
      id: 3,
      icon: Heart,
      number: "03",
      title: "Made With Love",
      description:
        "We put care and passion into every loaf, pastry and sweet creation.",
      bg: "#f3c8c8",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f6a06c] py-20 md:py-28">

      {/* =========================================
          BACKGROUND DECORATIONS
      ========================================= */}

      <div className="pointer-events-none absolute -left-[130px] -top-[130px] h-[350px] w-[350px] rounded-full border-[70px] border-[#ffdf38]/30" />

      <div className="pointer-events-none absolute -bottom-[160px] -right-[130px] h-[420px] w-[420px] rounded-full border-[80px] border-[#7130a6]/15" />

      {/* dots */}
      <div className="absolute right-[8%] top-[8%] hidden rotate-12 md:grid md:grid-cols-4 md:gap-2">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="h-[5px] w-[5px] rounded-full bg-[#351714]"
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">

        {/* =========================================
            TOP HEADING
        ========================================= */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

          <div>
            <div className="flex items-center gap-3">
              <Sparkles
                size={18}
                strokeWidth={2.5}
                className="text-[#351714]"
              />

              <p className="text-[10px] font-black uppercase tracking-[2px] text-[#351714]">
                More Than Just Baking
              </p>
            </div>

            <h2
              className="
                mt-5
                max-w-[900px]
                text-[48px]
                font-black
                uppercase
                leading-[0.88]
                tracking-[-2.5px]
                text-[#351714]

                sm:text-[60px]
                md:text-[78px]
                lg:text-[90px]
              "
            >
              Why Is Baking
              <br />

              Considered An

              <span className="relative ml-3 inline-block">
                Art
                <span className="text-[#fff9f1]"> Form?</span>

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[8px]
                    w-full
                    -rotate-1
                    rounded-full
                    bg-[#ffdf38]
                  "
                />
              </span>
            </h2>
          </div>

          <div className="lg:pb-3">
            <p className="max-w-[430px] text-[13px] font-medium leading-7 text-[#4f2d27] md:text-[14px]">
              Baking brings together precision, creativity and patience.
              Every ingredient has a purpose, every technique matters, and
              every finished creation tells its own story.
            </p>

            <Link
              to="/about"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                border-2
                border-[#351714]
                bg-[#ffdf38]
                px-7
                py-4
                text-[9px]
                font-black
                uppercase
                tracking-[1px]
                text-[#351714]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[5px_5px_0_#351714]
              "
            >
              Discover Our Story

              <ArrowRight
                size={15}
                strokeWidth={3}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

        </div>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">

          {/* =====================================
              LEFT BIG IMAGE
          ===================================== */}

          <div className="relative">

            <div
              className="
                group
                relative
                h-full
                min-h-[500px]
                overflow-hidden
                rounded-[35px]
                border-2
                border-[#351714]
                bg-[#8edbe3]
                shadow-[8px_8px_0_#351714]
                md:min-h-[650px]
              "
            >
              <img
                src={bakeryImage}
                alt="Artisan baker preparing fresh bakery products"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#351714]/60 via-transparent to-transparent" />

              {/* image bottom text */}
              <div className="absolute bottom-7 left-7 right-7">

                <span
                  className="
                    inline-flex
                    rounded-full
                    border-2
                    border-[#351714]
                    bg-[#ffdf38]
                    px-4
                    py-2
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[1px]
                    text-[#351714]
                  "
                >
                  Handmade Everyday
                </span>

                <h3 className="mt-4 max-w-[550px] text-[30px] font-black uppercase leading-none text-white md:text-[42px]">
                  Crafted By Hand.
                  <br />
                  Baked With Passion.
                </h3>

              </div>
            </div>

            {/* =====================================
                FLOATING CIRCLE
            ===================================== */}

            <div
              className="
                absolute
                -right-4
                -top-7
                flex
                h-[105px]
                w-[105px]
                rotate-12
                items-center
                justify-center
                rounded-full
                border-2
                border-[#351714]
                bg-[#7130a6]
                text-center
                shadow-[4px_4px_0_#351714]
                transition-transform
                duration-300
                hover:rotate-0
                md:-right-7
                md:h-[125px]
                md:w-[125px]
              "
            >
              <p className="text-[9px] font-black uppercase leading-4 tracking-[1px] text-white">
                Baking
                <br />
                Is Our
                <br />
                Art
              </p>
            </div>

          </div>

          {/* =====================================
              RIGHT SIDE
          ===================================== */}

          <div className="flex flex-col gap-5">

            {/* small image */}

            <div
              className="
                group
                relative
                h-[240px]
                overflow-hidden
                rounded-[30px]
                border-2
                border-[#351714]
                bg-[#ffdf38]
                shadow-[6px_6px_0_#351714]
                md:h-[300px]
              "
            >
              <img
                src={croissantImage}
                alt="Fresh French croissants"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-[#351714]/10" />

              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  rounded-full
                  border-2
                  border-[#351714]
                  bg-white
                  px-4
                  py-2
                  text-[8px]
                  font-black
                  uppercase
                  text-[#351714]
                "
              >
                Fresh Daily
              </div>
            </div>

            {/* =====================================
                FEATURE CARDS
            ===================================== */}

            <div className="grid flex-1 grid-cols-1 gap-4">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.id}
                    className="
                      group
                      flex
                      items-center
                      gap-5
                      rounded-[25px]
                      border-2
                      border-[#351714]
                      p-5
                      transition-all
                      duration-300
                      hover:-translate-x-1
                      hover:shadow-[5px_5px_0_#351714]
                    "
                    style={{
                      backgroundColor: feature.bg,
                    }}
                  >

                    {/* icon */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-[#351714]
                        bg-[#fff9f1]
                        text-[#351714]
                        transition-transform
                        duration-300
                        group-hover:rotate-6
                        group-hover:scale-110
                      "
                    >
                      <Icon size={22} strokeWidth={2.3} />
                    </div>

                    {/* content */}

                    <div className="flex-1">

                      <p className="text-[8px] font-black uppercase tracking-[1.5px] text-[#351714]/55">
                        {feature.number}
                      </p>

                      <h4 className="mt-1 text-[17px] font-black uppercase text-[#351714]">
                        {feature.title}
                      </h4>

                      <p className="mt-1 max-w-[390px] text-[10px] font-medium leading-5 text-[#553934]">
                        {feature.description}
                      </p>

                    </div>

                    <ArrowRight
                      size={17}
                      strokeWidth={3}
                      className="shrink-0 text-[#351714] transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* =========================================
            BOTTOM TEXT STRIP
        ========================================= */}

        <div
          className="
            mt-14
            overflow-hidden
            rounded-full
            border-2
            border-[#351714]
            bg-[#351714]
            px-6
            py-4
          "
        >
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-center">

            <span className="text-[9px] font-black uppercase tracking-[2px] text-white">
              Fresh Ingredients
            </span>

            <span className="h-2 w-2 rounded-full bg-[#ffdf38]" />

            <span className="text-[9px] font-black uppercase tracking-[2px] text-white">
              Traditional Methods
            </span>

            <span className="h-2 w-2 rounded-full bg-[#8edbe3]" />

            <span className="text-[9px] font-black uppercase tracking-[2px] text-white">
              Handmade Daily
            </span>

            <span className="h-2 w-2 rounded-full bg-[#f3c8c8]" />

            <span className="text-[9px] font-black uppercase tracking-[2px] text-white">
              Baked With Love
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}

export default BakingArtSection;