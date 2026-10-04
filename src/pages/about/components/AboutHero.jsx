import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Sparkles,
  Wheat,
} from "lucide-react";

import bakeryImage from "../../../assets/bakery.jpg";

function AboutHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f3a7bd]
        px-5
        py-16
        md:px-8
        md:py-20
        lg:py-24
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-28
          -top-28
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#ffdf38]/30
          blur-[90px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-24
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#8edbe3]/30
          blur-[100px]
        "
      />

      {/* Small decoration dots */}

      <span
        className="
          absolute
          left-[5%]
          top-[20%]
          h-3
          w-3
          rounded-full
          bg-[#351714]
        "
      />

      <span
        className="
          absolute
          left-[45%]
          top-[12%]
          h-4
          w-4
          rounded-full
          bg-[#ffdf38]
        "
      />

      <span
        className="
          absolute
          bottom-[15%]
          left-[42%]
          h-3
          w-3
          rounded-full
          bg-[#f26d3d]
        "
      />

      {/* BIG BACKGROUND TEXT */}

      <p
        className="
          pointer-events-none
          absolute
          bottom-[-30px]
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          text-[90px]
          font-black
          uppercase
          leading-none
          tracking-[-5px]
          text-[#351714]/[0.04]

          md:text-[140px]
          lg:text-[190px]
        "
      >
        About Us
      </p>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[600px]
          max-w-[1400px]
          grid-cols-1
          items-center
          gap-14

          lg:min-h-[650px]
          lg:grid-cols-2
          lg:gap-20
        "
      >
        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <div>
          {/* LABEL */}

          <div
            className="
              mb-6
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
              size={13}
              strokeWidth={2.5}
            />

            <span
              className="
                text-[8px]
                font-extrabold
                uppercase
                tracking-[1.5px]
                text-[#351714]
              "
            >
              Our Story
            </span>
          </div>

          {/* HEADING */}

          <h1
            className="
              max-w-[700px]

              text-[48px]
              font-black
              uppercase
              leading-[0.9]
              tracking-[-2.5px]

              text-[#351714]

              sm:text-[58px]
              md:text-[68px]
              lg:text-[76px]
              xl:text-[82px]
            "
          >
            Baking
            <br />

            Happiness

            <br />

            <span className="text-[#fff9f1]">
              Since Day
            </span>

            <span className="text-[#f26d3d]">
              {" "}One.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-7
              max-w-[530px]

              text-[12px]
              font-medium
              leading-7

              text-[#5c3935]

              md:text-[13px]
            "
          >
            What started with a simple love for baking
            has grown into a place where fresh breads,
            beautiful cakes and handcrafted pastries
            bring people together every day.
          </p>

          {/* =====================================
              SMALL FEATURES
          ===================================== */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              gap-x-6
              gap-y-3
            "
          >
            <div className="flex items-center gap-2">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#351714]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.7px]
                  text-[#351714]
                "
              >
                Fresh Daily
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#351714]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.7px]
                  text-[#351714]
                "
              >
                Handmade
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#351714]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.7px]
                  text-[#351714]
                "
              >
                Made With Love
              </span>
            </div>
          </div>

          {/* =====================================
              BUTTONS
          ===================================== */}

          <div
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            <a
              href="#our-story"
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
                py-3.5

                text-[9px]
                font-extrabold
                uppercase
                tracking-[1px]

                text-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#ffdf38]
                hover:text-[#351714]

                hover:shadow-[4px_4px_0_#351714]
              "
            >
              Discover Our Story

              <ArrowRight
                size={14}
                strokeWidth={2.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            <Link
              to="/bakery"
              className="
                inline-flex
                items-center

                rounded-full

                border
                border-[#351714]

                bg-[#fff9f1]

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
                hover:bg-[#8edbe3]

                hover:shadow-[4px_4px_0_#351714]
              "
            >
              Explore Bakery
            </Link>
          </div>
        </div>

        {/* =====================================
            RIGHT IMAGE
        ===================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[580px]
          "
        >
          {/* YELLOW BACKGROUND SHAPE */}

          <div
            className="
              absolute
              -right-4
              -top-5

              h-[90%]
              w-[90%]

              rotate-3

              rounded-[45px]

              border-2
              border-[#351714]

              bg-[#ffdf38]
            "
          />

          {/* IMAGE CARD */}

          <div
            className="
              group
              relative
              z-10

              -rotate-2

              overflow-hidden

              rounded-[38px]

              border-2
              border-[#351714]

              bg-[#fff9f1]

              p-3

              shadow-[9px_9px_0_#351714]

              transition-all
              duration-500

              hover:rotate-0
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
              "
            >
              <img
                src={bakeryImage}
                alt="Our artisan bakery"
                className="
                  h-[420px]
                  w-full
                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-105

                  sm:h-[500px]
                  lg:h-[550px]
                "
              />

              {/* GRADIENT */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-[#351714]/40
                  via-transparent
                  to-transparent
                "
              />

              {/* IMAGE TEXT */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                "
              >
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[1.5px]
                    text-white/70
                  "
                >
                  Our Philosophy
                </p>

                <p
                  className="
                    mt-1
                    max-w-[260px]
                    text-[20px]
                    font-black
                    uppercase
                    leading-tight
                    text-white
                  "
                >
                  Simple Ingredients.
                  <br />
                  Beautiful Baking.
                </p>
              </div>
            </div>
          </div>

          {/* =================================
              LOVE BADGE
          ================================= */}

          <div
            className="
              absolute
              -bottom-7
              -left-3
              z-20

              flex
              h-[125px]
              w-[125px]
              rotate-[-8deg]

              flex-col
              items-center
              justify-center

              rounded-full

              border
              border-[#351714]

              bg-[#8edbe3]

              text-center

              shadow-[4px_4px_0_#351714]

              sm:h-[140px]
              sm:w-[140px]
            "
          >
            <Heart
              size={20}
              fill="currentColor"
              className="mb-2 text-[#351714]"
            />

            <p
              className="
                text-[7px]
                font-extrabold
                uppercase
                tracking-[1px]
                text-[#351714]
              "
            >
              Baked
            </p>

            <p
              className="
                text-[15px]
                font-black
                uppercase
                text-[#351714]
              "
            >
              With Love
            </p>
          </div>

          {/* =================================
              FRESH BADGE
          ================================= */}

          <div
            className="
              absolute
              -right-2
              top-10
              z-20

              flex
              items-center
              gap-2

              rotate-[6deg]

              rounded-full

              border
              border-[#351714]

              bg-[#fff9f1]

              px-4
              py-2.5

              shadow-[3px_3px_0_#351714]
            "
          >
            <Wheat
              size={13}
              className="text-[#351714]"
            />

            <span
              className="
                text-[8px]
                font-black
                uppercase
                tracking-[1px]
                text-[#351714]
              "
            >
              Artisan Bakery
            </span>
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM STRIP
      ========================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-20

          w-full

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

            text-[8px]
            font-extrabold
            uppercase
            tracking-[1.5px]

            text-[#351714]
          "
        >
          <span>Fresh Every Day</span>
          <span>✦</span>

          <span>Handcrafted</span>
          <span>✦</span>

          <span>Quality Ingredients</span>
          <span>✦</span>

          <span>Made With Love</span>
          <span>✦</span>

          <span>Fresh From The Oven</span>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;