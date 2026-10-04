import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CakeSlice,
  MessageCircle,
  Sparkles,
  Heart,
  Star,
} from "lucide-react";

function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#8edbe3] px-5 py-20 md:px-8 md:py-24">

      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div className="pointer-events-none absolute -left-28 -top-28 h-[300px] w-[300px] rounded-full bg-[#ffdf38]/40 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-32 -right-28 h-[320px] w-[320px] rounded-full bg-[#f3a7bd]/50 blur-[100px]" />

      {/* Decorative dots */}

      <span className="absolute left-[8%] top-[20%] h-3 w-3 rounded-full bg-[#f26d3d]" />

      <span className="absolute bottom-[20%] left-[15%] h-4 w-4 rounded-full bg-[#ffdf38]" />

      <span className="absolute right-[8%] top-[18%] h-3 w-3 rounded-full bg-[#351714]" />

      {/* BIG BACKGROUND TEXT */}

      <p
        className="
          pointer-events-none
          absolute
          bottom-[-25px]
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          text-[85px]
          font-black
          uppercase
          leading-none
          tracking-[-4px]
          text-[#351714]/[0.035]
          md:text-[140px]
          lg:text-[180px]
        "
      >
        Let's Bake
      </p>

      {/* =========================================
          MAIN
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-[1200px]">

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-[#351714]
            bg-[#fff9f1]
            px-6
            py-12
            shadow-[8px_8px_0_#351714]
            md:px-12
            md:py-16
            lg:px-16
          "
        >

          {/* PINK CIRCLE */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-[260px]
              w-[260px]
              rounded-full
              bg-[#f3a7bd]
            "
          />

          {/* YELLOW CIRCLE */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-24
              h-[220px]
              w-[220px]
              rounded-full
              bg-[#ffdf38]
            "
          />

          {/* SMALL DECORATIONS */}

          <Star
            size={24}
            className="
              absolute
              right-[15%]
              top-[18%]
              hidden
              rotate-12
              text-[#351714]
              md:block
            "
          />

          <Heart
            size={22}
            className="
              absolute
              bottom-[18%]
              left-[12%]
              hidden
              -rotate-12
              text-[#f26d3d]
              md:block
            "
          />

          {/* =====================================
              CONTENT
          ===================================== */}

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-[780px]
              text-center
            "
          >

            {/* ICON */}

            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[#351714]
                bg-[#ffdf38]
                text-[#351714]
                shadow-[4px_4px_0_#351714]
              "
            >
              <CakeSlice
                size={25}
                strokeWidth={2}
              />
            </div>

            {/* SMALL TITLE */}

            <div className="mt-7 flex items-center justify-center gap-2">
              <Sparkles
                size={13}
                className="text-[#f26d3d]"
              />

              <p
                className="
                  text-[8px]
                  font-extrabold
                  uppercase
                  tracking-[2px]
                  text-[#f26d3d]
                "
              >
                Something Special?
              </p>
            </div>

            {/* HEADING */}

            <h2
              className="
                mt-4
                text-[39px]
                font-black
                uppercase
                leading-[0.95]
                tracking-[-1.5px]
                text-[#351714]
                sm:text-[46px]
                md:text-[55px]
                lg:text-[62px]
              "
            >
              Planning A
              <br />

              <span className="text-[#f26d3d]">
                Celebration?
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-6
                max-w-[580px]
                text-[11px]
                font-medium
                leading-6
                text-[#725c56]
                md:text-[12px]
                md:leading-7
              "
            >
              Birthdays, anniversaries, parties or simply
              something sweet — tell us what you're
              celebrating and we'll help create something
              delicious for your special moment.
            </p>

            {/* =====================================
                BUTTONS
            ===================================== */}

            <div
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >

              {/* ORDER CAKE */}

              <Link
                to="/cake"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#351714]
                  bg-[#351714]
                  px-7
                  py-3.5
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[1px]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#f26d3d]
                  hover:shadow-[4px_4px_0_#351714]
                  sm:w-auto
                "
              >
                <CakeSlice size={14} />

                Explore Cakes

                <ArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* CONTACT */}

              <a
                href="#contact-form"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#351714]
                  bg-[#f3a7bd]
                  px-7
                  py-3.5
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[1px]
                  text-[#351714]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ffdf38]
                  hover:shadow-[4px_4px_0_#351714]
                  sm:w-auto
                "
              >
                <MessageCircle size={14} />

                Contact Us
              </a>
            </div>

            {/* =====================================
                BOTTOM TEXT
            ===================================== */}

            <div
              className="
                mx-auto
                mt-9
                flex
                max-w-[450px]
                items-center
                gap-4
              "
            >
              <div className="h-px flex-1 bg-[#351714]/15" />

              <div className="flex items-center gap-2">
                <Heart
                  size={11}
                  fill="currentColor"
                  className="text-[#f26d3d]"
                />

                <span
                  className="
                    whitespace-nowrap
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[1px]
                    text-[#725c56]
                  "
                >
                  Made With Love
                </span>
              </div>

              <div className="h-px flex-1 bg-[#351714]/15" />
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM MINI CARDS
        ========================================= */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-3
          "
        >
          {/* CARD 1 */}

          <div
            className="
              rounded-[18px]
              border
              border-[#351714]
              bg-[#ffdf38]
              px-5
              py-4
              text-center
            "
          >
            <p className="text-[7px] font-bold uppercase tracking-[1px] text-[#351714]/50">
              Fresh
            </p>

            <p className="mt-1 text-[11px] font-black uppercase text-[#351714]">
              Baked Daily
            </p>
          </div>

          {/* CARD 2 */}

          <div
            className="
              rounded-[18px]
              border
              border-[#351714]
              bg-[#f3a7bd]
              px-5
              py-4
              text-center
            "
          >
            <p className="text-[7px] font-bold uppercase tracking-[1px] text-[#351714]/50">
              Custom
            </p>

            <p className="mt-1 text-[11px] font-black uppercase text-[#351714]">
              Cake Orders
            </p>
          </div>

          {/* CARD 3 */}

          <div
            className="
              rounded-[18px]
              border
              border-[#351714]
              bg-[#f49a65]
              px-5
              py-4
              text-center
            "
          >
            <p className="text-[7px] font-bold uppercase tracking-[1px] text-[#351714]/50">
              Always
            </p>

            <p className="mt-1 text-[11px] font-black uppercase text-[#351714]">
              Made With Care
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;