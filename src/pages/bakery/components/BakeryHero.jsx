import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Wheat,
  Clock3,
  Sparkles,
} from "lucide-react";

import bakeryImage from "../../../assets/bakery.jpg";

function BakeryHero() {
  return (
    <section
      className="
        relative
        min-h-[650px]
        overflow-hidden
        bg-[#f8a5bd]
        pt-20
        md:min-h-[720px]
      "
    >
      {/* =========================================
          BACKGROUND DECORATIONS
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-20
          h-[260px]
          w-[260px]
          rounded-full
          border
          border-[#351714]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#ffdf38]/30
          blur-[80px]
        "
      />

      {/* Decorative text */}

      <p
        className="
          pointer-events-none
          absolute
          bottom-[-25px]
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          text-[90px]
          font-black
          uppercase
          leading-none
          tracking-[-7px]
          text-[#351714]/[0.04]

          md:text-[150px]
          lg:text-[190px]
        "
      >
        Bakery
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
          min-h-[570px]
          max-w-[1450px]
          grid-cols-1
          items-center
          gap-12
          px-5
          py-14

          md:px-8

          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-16
          lg:px-12
        "
      >
        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <div>
          {/* SMALL LABEL */}

          <div className="flex items-center gap-3">
            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#351714]
                bg-[#ffdf38]
              "
            >
              <Wheat
                size={16}
                strokeWidth={2.3}
              />
            </span>

            <p
              className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[2px]
                text-[#351714]
              "
            >
              Freshly Baked Every Day
            </p>
          </div>

          {/* HEADING */}

          <h1
            className="
              mt-7
              max-w-[650px]
              text-[50px]
              font-black
              uppercase
              leading-[0.88]
              tracking-[-3px]
              text-[#351714]

              sm:text-[62px]
              md:text-[75px]
              lg:text-[82px]
            "
          >
            Made With
            <br />

            <span className="text-[#fff9f1]">
              Love.
            </span>

            <br />

            Baked With
            <br />

            <span
              className="
                relative
                inline-block
                text-[#351714]
              "
            >
              Passion.

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[6px]
                  w-full
                  rounded-full
                  bg-[#ffdf38]
                "
              />
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-8
              max-w-[520px]
              text-[12px]
              font-medium
              leading-6
              text-[#351714]/70

              md:text-[13px]
              md:leading-7
            "
          >
            From warm artisan breads to buttery
            croissants and delicious pastries, every
            bite is handcrafted using quality
            ingredients and traditional baking
            techniques.
          </p>

          {/* BUTTONS */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <Link
              to="#bakery-products"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#351714]
                bg-[#351714]
                px-6
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
              Explore Bakery

              <ArrowRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#351714]
                bg-transparent
                px-6
                py-3.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[1px]
                text-[#351714]
                transition-all
                duration-300

                hover:bg-white
              "
            >
              Visit Our Bakery
            </Link>
          </div>

          {/* =====================================
              FEATURES
          ===================================== */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-6
              border-t
              border-[#351714]/20
              pt-6
            "
          >
            {/* FRESH */}

            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white/50
                "
              >
                <Clock3 size={15} />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    text-[#351714]
                  "
                >
                  Daily Fresh
                </p>

                <p
                  className="
                    mt-0.5
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.5px]
                    text-[#351714]/50
                  "
                >
                  Baked Every Morning
                </p>
              </div>
            </div>

            {/* HANDMADE */}

            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white/50
                "
              >
                <Sparkles size={15} />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    text-[#351714]
                  "
                >
                  Handmade
                </p>

                <p
                  className="
                    mt-0.5
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.5px]
                    text-[#351714]/50
                  "
                >
                  Crafted With Care
                </p>
              </div>
            </div>
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
            max-w-[650px]
          "
        >
          {/* YELLOW SHAPE */}

          <div
            className="
              absolute
              -right-5
              -top-5
              h-[75%]
              w-[75%]
              rounded-[45%_55%_40%_60%]
              bg-[#ffdf38]
            "
          />

          {/* IMAGE */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[40px_40px_150px_40px]
              border
              border-[#351714]
              bg-[#fff9f1]
              p-2
              shadow-[8px_8px_0_#351714]
            "
          >
            <img
              src={bakeryImage}
              alt="Fresh bakery products"
              className="
                h-[400px]
                w-full
                rounded-[32px_32px_140px_32px]
                object-cover

                md:h-[500px]
                lg:h-[550px]
              "
            />
          </div>

          {/* =================================
              FLOATING BADGE
          ================================= */}

          <div
            className="
              absolute
              -bottom-5
              -left-3
              flex
              h-[110px]
              w-[110px]
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

              sm:h-[125px]
              sm:w-[125px]
            "
          >
            <Wheat
              size={21}
              className="mb-1 text-[#351714]"
            />

            <p
              className="
                text-[8px]
                font-extrabold
                uppercase
                tracking-[1px]
                text-[#351714]
              "
            >
              Fresh
            </p>

            <p
              className="
                text-[15px]
                font-black
                uppercase
                text-[#351714]
              "
            >
              Every Day
            </p>
          </div>

          {/* TOP BADGE */}

          <div
            className="
              absolute
              -right-2
              top-10
              rotate-[7deg]
              rounded-full
              border
              border-[#351714]
              bg-[#fff9f1]
              px-4
              py-2
              text-[8px]
              font-black
              uppercase
              tracking-[1px]
              text-[#351714]
              shadow-[3px_3px_0_#351714]
            "
          >
            ✦ Artisan Bakery
          </div>
        </div>
      </div>
    </section>
  );
}

export default BakeryHero;