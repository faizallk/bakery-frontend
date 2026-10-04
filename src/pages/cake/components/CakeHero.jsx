import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CakeSlice, Sparkles } from "lucide-react";

import cakeImage from "../../../assets/cake.jpg";

function CakeHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7a7bd]">
      {/* ================= BACKGROUND DECORATION ================= */}

      <div className="pointer-events-none absolute -left-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#ffdf38]/40 blur-[80px]" />

      <div className="pointer-events-none absolute -bottom-28 -right-20 h-[350px] w-[350px] rounded-full bg-[#8edbe3]/40 blur-[90px]" />

      {/* Decorative dots */}
      <div className="absolute left-[7%] top-[18%] h-3 w-3 rounded-full bg-[#351714]" />

      <div className="absolute left-[45%] top-[12%] h-4 w-4 rounded-full bg-[#ffdf38]" />

      <div className="absolute bottom-[15%] left-[42%] h-3 w-3 rounded-full bg-[#f26d3d]" />

      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[650px]
          max-w-[1400px]
          grid-cols-1
          items-center
          gap-10
          px-5
          py-16

          md:px-8
          lg:min-h-[720px]
          lg:grid-cols-2
          lg:gap-16
          lg:px-10
          lg:py-20
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="relative z-20">
          {/* Small label */}

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#351714]
              bg-[#ffdf38]
              px-4
              py-2
              shadow-[3px_3px_0_#351714]
            "
          >
            <Sparkles
              size={14}
              strokeWidth={2.5}
            />

            <span
              className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[1.5px]
                text-[#351714]
              "
            >
              Freshly Baked Daily
            </span>
          </div>

          {/* Main Heading */}

          <h1
            className="
              max-w-[650px]
              text-[48px]
              font-black
              uppercase
              leading-[0.9]
              tracking-[-2px]
              text-[#351714]

              sm:text-[58px]
              md:text-[68px]
              lg:text-[76px]
              xl:text-[84px]
            "
          >
            Cakes Made
            <br />

            For Every

            <span className="relative ml-3 inline-block text-[#fff8ef]">
              Moment
              <span className="text-[#f26d3d]">
                .
              </span>
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-[520px]
              text-[13px]
              font-medium
              leading-7
              text-[#5c3935]

              md:text-[14px]
            "
          >
            From birthdays and anniversaries to simple
            everyday celebrations, discover freshly baked
            cakes crafted with delicious flavours and
            beautiful designs.
          </p>

          {/* ===============================================
              FEATURES
          =============================================== */}

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#351714]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.7px] text-[#351714]">
                Fresh Cakes
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#351714]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.7px] text-[#351714]">
                Eggless Available
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#351714]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.7px] text-[#351714]">
                Custom Design
              </span>
            </div>
          </div>

          {/* ===============================================
              BUTTONS
          =============================================== */}

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/cakes#cakes"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#351714]
                bg-[#351714]
                px-7
                py-4
                text-[10px]
                font-extrabold
                uppercase
                tracking-[1px]
                text-white
                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-[5px_5px_0_#ffdf38]
              "
            >
              Explore Cakes

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#351714]
                bg-[#fff8ef]
                px-7
                py-4
                text-[10px]
                font-extrabold
                uppercase
                tracking-[1px]
                text-[#351714]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#ffdf38]
                hover:shadow-[4px_4px_0_#351714]
              "
            >
              Custom Cake
            </Link>
          </div>
        </div>

        {/* =================================================
            RIGHT IMAGE
        ================================================= */}

        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Back shape */}

          <div
            className="
              absolute
              h-[340px]
              w-[340px]
              rotate-6
              rounded-[50px]
              border-2
              border-[#351714]
              bg-[#ffdf38]

              sm:h-[420px]
              sm:w-[420px]

              lg:h-[480px]
              lg:w-[480px]
            "
          />

          {/* Image card */}

          <div
            className="
              group
              relative
              z-10
              w-full
              max-w-[470px]
              -rotate-2
              overflow-hidden
              rounded-[40px]
              border-2
              border-[#351714]
              bg-white
              p-3
              shadow-[10px_10px_0_#351714]
              transition-all
              duration-500

              hover:rotate-0
              hover:scale-[1.02]
            "
          >
            <div className="overflow-hidden rounded-[30px]">
              <img
                src={cakeImage}
                alt="Freshly baked celebration cake"
                className="
                  h-[400px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105

                  sm:h-[470px]
                  lg:h-[520px]
                "
              />
            </div>

            {/* Floating badge */}

            <div
              className="
                absolute
                bottom-7
                left-7
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[#351714]
                bg-[#fff8ef]
                px-4
                py-3
                shadow-[3px_3px_0_#351714]
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f26d3d]
                  text-white
                "
              >
                <CakeSlice size={17} />
              </div>

              <div>
                <p className="text-[7px] font-bold uppercase tracking-[1px] text-[#725c56]">
                  Starting From
                </p>

                <p className="text-[16px] font-black text-[#351714]">
                  ₹499
                </p>
              </div>
            </div>
          </div>

          {/* ===============================================
              DECORATION
          =============================================== */}

          <div
            className="
              absolute
              -right-2
              top-3
              z-20
              flex
              h-[75px]
              w-[75px]
              rotate-12
              items-center
              justify-center
              rounded-full
              border
              border-[#351714]
              bg-[#8edbe3]
              text-center
              shadow-[3px_3px_0_#351714]
              lg:-right-5
            "
          >
            <span className="text-[8px] font-black uppercase leading-3 text-[#351714]">
              Made
              <br />
              With
              <br />
              Love
            </span>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM STRIP ================= */}

      <div
        className="
          relative
          z-20
          overflow-hidden
          border-y
          border-[#351714]
          bg-[#ffdf38]
          py-3
        "
      >
        <div
          className="
            flex
            min-w-max
            items-center
            justify-center
            gap-8
            text-[9px]
            font-extrabold
            uppercase
            tracking-[1.5px]
            text-[#351714]
          "
        >
          <span>Birthday Cakes</span>
          <span>✦</span>

          <span>Chocolate Cakes</span>
          <span>✦</span>

          <span>Wedding Cakes</span>
          <span>✦</span>

          <span>Custom Cakes</span>
          <span>✦</span>

          <span>Eggless Cakes</span>
        </div>
      </div>
    </section>
  );
}

export default CakeHero;