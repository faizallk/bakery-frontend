import React from "react";
import {
  Clock3,
  Wheat,
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import bakeryImage from "../../../assets/bakery.jpg";

function FreshBakeSection() {
  const features = [
    {
      id: 1,
      icon: Clock3,
      title: "Baked Every Morning",
      description:
        "Our ovens start early so every product is fresh and ready for your day.",
      bg: "#ffdf38",
    },
    {
      id: 2,
      icon: Wheat,
      title: "Quality Ingredients",
      description:
        "Carefully selected ingredients bring better flavour, texture and freshness.",
      bg: "#8edbe3",
    },
    {
      id: 3,
      icon: Heart,
      title: "Handcrafted With Care",
      description:
        "Every bread and pastry is prepared with attention, patience and passion.",
      bg: "#f3a7bd",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#351714] px-5 py-20 md:px-8 md:py-28">
      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full border border-white/5" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#f26d3d]/10 blur-[100px]" />

      <span className="pointer-events-none absolute bottom-[-30px] right-0 text-[120px] font-black uppercase leading-none text-white/[0.025] md:text-[180px]">
        Fresh
      </span>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* =====================================
            LEFT IMAGE
        ===================================== */}

        <div className="relative mx-auto w-full max-w-[620px]">
          {/* YELLOW BACK SHAPE */}

          <div className="absolute -left-5 -top-5 h-[75%] w-[75%] rounded-[40px] bg-[#ffdf38]" />

          {/* IMAGE */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-[#fff9f1]
              bg-[#fff9f1]
              p-2
              shadow-[10px_10px_0_#f26d3d]
            "
          >
            <img
              src={bakeryImage}
              alt="Fresh bakery products from the oven"
              className="
                h-[430px]
                w-full
                rounded-[23px]
                object-cover
                sm:h-[520px]
                lg:h-[600px]
              "
            />

            {/* IMAGE OVERLAY */}

            <div className="pointer-events-none absolute inset-2 rounded-[23px] bg-gradient-to-t from-[#351714]/40 via-transparent to-transparent" />
          </div>

          {/* =================================
              MORNING BADGE
          ================================= */}

          <div
            className="
              absolute
              -bottom-6
              -left-2
              z-20
              flex
              h-[125px]
              w-[125px]
              rotate-[-7deg]
              flex-col
              items-center
              justify-center
              rounded-full
              border
              border-[#351714]
              bg-[#8edbe3]
              text-center
              shadow-[5px_5px_0_#fff9f1]
              sm:h-[140px]
              sm:w-[140px]
            "
          >
            <Clock3
              size={21}
              strokeWidth={2}
              className="mb-2 text-[#351714]"
            />

            <p className="text-[8px] font-extrabold uppercase tracking-[1px] text-[#351714]">
              Oven Starts
            </p>

            <p className="mt-1 text-[20px] font-black text-[#351714]">
              5:00 AM
            </p>

            <p className="text-[7px] font-bold uppercase tracking-[1px] text-[#351714]/60">
              Every Morning
            </p>
          </div>

          {/* =================================
              FRESH BADGE
          ================================= */}

          <div
            className="
              absolute
              -right-3
              top-8
              z-20
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[#351714]
              bg-[#f3a7bd]
              px-4
              py-2.5
              shadow-[3px_3px_0_#fff9f1]
            "
          >
            <Sparkles
              size={14}
              className="text-[#351714]"
            />

            <span className="text-[8px] font-black uppercase tracking-[1px] text-[#351714]">
              Always Fresh
            </span>
          </div>
        </div>

        {/* =====================================
            RIGHT CONTENT
        ===================================== */}

        <div>
          {/* SMALL HEADING */}

          <div className="flex items-center gap-3">
            <span className="h-[7px] w-[7px] rounded-full bg-[#ffdf38]" />

            <p className="text-[9px] font-extrabold uppercase tracking-[2px] text-[#ffdf38]">
              Fresh From The Oven
            </p>
          </div>

          {/* MAIN HEADING */}

          <h2
            className="
              mt-5
              max-w-[650px]
              text-[42px]
              font-black
              uppercase
              leading-[0.95]
              tracking-[-2px]
              text-[#fff9f1]
              sm:text-[48px]
              md:text-[56px]
              lg:text-[62px]
            "
          >
            Every Morning
            <br />
            Starts With
            <br />

            <span className="text-[#f26d3d]">
              Something Fresh.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              max-w-[540px]
              text-[12px]
              font-medium
              leading-7
              text-[#fff9f1]/60
              md:text-[13px]
            "
          >
            Good baking takes time. Our bakers begin early,
            preparing dough, shaping breads and carefully
            baking every batch so you can enjoy bakery
            products at their freshest.
          </p>

          {/* =================================
              FEATURES
          ================================= */}

          <div className="mt-9 space-y-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.id}
                  className="
                    group
                    flex
                    items-start
                    gap-4
                    rounded-[20px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                    transition-all
                    duration-300
                    hover:translate-x-2
                    hover:border-white/20
                    hover:bg-white/[0.07]
                  "
                >
                  {/* ICON */}

                  <div
                    style={{
                      backgroundColor: feature.bg,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#351714]
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className="text-[#351714]"
                    />
                  </div>

                  {/* TEXT */}

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-[13px] font-black uppercase text-[#fff9f1] md:text-[14px]">
                        {feature.title}
                      </h3>

                      <span className="text-[9px] font-black text-white/20">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-1.5 max-w-[420px] text-[10px] font-medium leading-5 text-[#fff9f1]/50">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =================================
              BUTTON
          ================================= */}

          <div className="mt-9">
            <Link
              to="/about"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#fff9f1]
                bg-[#fff9f1]
                px-6
                py-3.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[1px]
                text-[#351714]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#ffdf38]
                hover:bg-[#ffdf38]
                hover:shadow-[4px_4px_0_#f26d3d]
              "
            >
              Our Baking Story

              <ArrowRight
                size={14}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM STATS
      ========================================= */}

      <div className="relative z-10 mx-auto mt-20 max-w-[1400px] border-t border-white/10 pt-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {/* 01 */}

          <div>
            <p className="text-[25px] font-black text-[#ffdf38]">
              5 AM
            </p>

            <p className="mt-1 text-[8px] font-bold uppercase tracking-[1px] text-white/40">
              Baking Begins
            </p>
          </div>

          {/* 02 */}

          <div>
            <p className="text-[25px] font-black text-[#8edbe3]">
              Daily
            </p>

            <p className="mt-1 text-[8px] font-bold uppercase tracking-[1px] text-white/40">
              Fresh Batches
            </p>
          </div>

          {/* 03 */}

          <div>
            <p className="text-[25px] font-black text-[#f3a7bd]">
              100%
            </p>

            <p className="mt-1 text-[8px] font-bold uppercase tracking-[1px] text-white/40">
              Handmade
            </p>
          </div>

          {/* 04 */}

          <div>
            <p className="text-[25px] font-black text-[#f26d3d]">
              Fresh
            </p>

            <p className="mt-1 text-[8px] font-bold uppercase tracking-[1px] text-white/40">
              From Our Oven
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreshBakeSection;