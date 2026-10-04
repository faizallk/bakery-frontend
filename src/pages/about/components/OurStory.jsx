import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Wheat,
  Sparkles,
  Clock3,
} from "lucide-react";

import bakeryImage from "../../../assets/bakery.jpg";
import croissantImage from "../../../assets/croissant.jpg";

function OurStory() {
  return (
    <section
      id="our-story"
      className="
        relative
        overflow-hidden
        bg-[#fff9f1]
        px-5
        py-20
        md:px-8
        md:py-28
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div className="pointer-events-none absolute -left-32 top-20 h-[300px] w-[300px] rounded-full bg-[#ffdf38]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-[320px] w-[320px] rounded-full bg-[#f3a7bd]/15 blur-[100px]" />

      {/* =========================================
          CONTAINER
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1400px]
          grid-cols-1
          items-center
          gap-16
          lg:grid-cols-2
          lg:gap-24
        "
      >
        {/* =====================================
            LEFT IMAGE AREA
        ===================================== */}

        <div className="relative mx-auto w-full max-w-[620px]">
          {/* BACK SHAPE */}

          <div
            className="
              absolute
              -left-4
              -top-4
              h-[80%]
              w-[80%]
              rounded-[35px]
              border
              border-[#351714]
              bg-[#8edbe3]
            "
          />

          {/* MAIN IMAGE */}

          <div
            className="
              group
              relative
              z-10
              w-[88%]
              overflow-hidden
              rounded-[30px]
              border
              border-[#351714]
              bg-white
              p-2
              shadow-[7px_7px_0_#351714]
            "
          >
            <div className="relative overflow-hidden rounded-[23px]">
              <img
                src={bakeryImage}
                alt="Our bakery story"
                className="
                  h-[430px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  sm:h-[520px]
                  lg:h-[570px]
                "
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#351714]/30 via-transparent to-transparent" />

              {/* IMAGE LABEL */}

              <div className="absolute bottom-5 left-5">
                <div
                  className="
                    rounded-full
                    border
                    border-[#351714]
                    bg-[#ffdf38]
                    px-4
                    py-2
                    shadow-[2px_2px_0_#351714]
                  "
                >
                  <p className="text-[8px] font-black uppercase tracking-[1px] text-[#351714]">
                    Fresh Since Day One
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================
              SMALL IMAGE
          ================================= */}

          <div
            className="
              absolute
              -bottom-10
              right-0
              z-20
              hidden
              w-[220px]
              rotate-3
              overflow-hidden
              rounded-[24px]
              border
              border-[#351714]
              bg-[#fff9f1]
              p-2
              shadow-[5px_5px_0_#351714]
              sm:block
              md:w-[250px]
            "
          >
            <img
              src={croissantImage}
              alt="Fresh handmade croissants"
              className="
                h-[180px]
                w-full
                rounded-[17px]
                object-cover
                md:h-[210px]
              "
            />
          </div>

          {/* =================================
              LOVE BADGE
          ================================= */}

          <div
            className="
              absolute
              -right-1
              top-8
              z-20
              flex
              h-[105px]
              w-[105px]
              rotate-6
              flex-col
              items-center
              justify-center
              rounded-full
              border
              border-[#351714]
              bg-[#f3a7bd]
              text-center
              shadow-[4px_4px_0_#351714]
            "
          >
            <Heart
              size={18}
              fill="currentColor"
              className="mb-1 text-[#351714]"
            />

            <p className="text-[7px] font-bold uppercase tracking-[1px] text-[#351714]">
              Made With
            </p>

            <p className="text-[13px] font-black uppercase text-[#351714]">
              Love
            </p>
          </div>
        </div>

        {/* =====================================
            RIGHT CONTENT
        ===================================== */}

        <div>
          {/* SMALL TITLE */}

          <div className="flex items-center gap-2">
            <Sparkles
              size={14}
              className="text-[#f26d3d]"
            />

            <p
              className="
                text-[9px]
                font-extrabold
                uppercase
                tracking-[2px]
                text-[#f26d3d]
              "
            >
              How It All Began
            </p>
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-4
              text-[40px]
              font-black
              uppercase
              leading-[0.95]
              tracking-[-1.5px]
              text-[#351714]
              sm:text-[46px]
              md:text-[54px]
              lg:text-[60px]
            "
          >
            More Than
            <br />
            Just A{" "}

            <span className="text-[#f26d3d]">
              Bakery.
            </span>
          </h2>

          {/* LINE */}

          <div className="my-6 flex items-center gap-3">
            <div className="h-[2px] w-14 bg-[#351714]" />
            <span className="h-2 w-2 rounded-full bg-[#ffdf38]" />
            <span className="h-2 w-2 rounded-full bg-[#f3a7bd]" />
          </div>

          {/* STORY */}

          <p
            className="
              max-w-[560px]
              text-[12px]
              font-medium
              leading-7
              text-[#725c56]
              md:text-[13px]
              md:leading-8
            "
          >
            Our journey started with a simple idea —
            create delicious bakery products using good
            ingredients, traditional techniques and the
            kind of care that can be tasted in every bite.
          </p>

          <p
            className="
              mt-4
              max-w-[560px]
              text-[12px]
              font-medium
              leading-7
              text-[#725c56]
              md:text-[13px]
              md:leading-8
            "
          >
            Every morning, our bakers prepare fresh breads,
            buttery pastries, celebration cakes and sweet
            treats. We believe good baking cannot be rushed;
            it takes patience, passion and attention to every
            little detail.
          </p>

          {/* =================================
              QUOTE
          ================================= */}

          <div
            className="
              relative
              mt-7
              overflow-hidden
              rounded-[20px]
              border
              border-[#351714]
              bg-[#ffdf38]
              px-5
              py-5
              shadow-[4px_4px_0_#351714]
            "
          >
            <span
              className="
                absolute
                -right-1
                -top-7
                text-[90px]
                font-black
                leading-none
                text-[#351714]/10
              "
            >
              “
            </span>

            <p
              className="
                relative
                z-10
                max-w-[470px]
                text-[13px]
                font-bold
                leading-6
                text-[#351714]
                md:text-[14px]
              "
            >
              “We don't just bake products. We create
              little moments of happiness to share.”
            </p>
          </div>

          {/* =================================
              MINI FEATURES
          ================================= */}

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-3
            "
          >
            {/* FEATURE 1 */}

            <div
              className="
                rounded-[18px]
                border
                border-[#351714]/20
                bg-[#f3a7bd]/40
                p-4
              "
            >
              <Wheat
                size={18}
                className="text-[#351714]"
              />

              <p
                className="
                  mt-3
                  text-[10px]
                  font-black
                  uppercase
                  text-[#351714]
                "
              >
                Quality
              </p>

              <p
                className="
                  mt-1
                  text-[8px]
                  font-medium
                  leading-4
                  text-[#725c56]
                "
              >
                Carefully selected ingredients.
              </p>
            </div>

            {/* FEATURE 2 */}

            <div
              className="
                rounded-[18px]
                border
                border-[#351714]/20
                bg-[#8edbe3]/40
                p-4
              "
            >
              <Clock3
                size={18}
                className="text-[#351714]"
              />

              <p
                className="
                  mt-3
                  text-[10px]
                  font-black
                  uppercase
                  text-[#351714]
                "
              >
                Freshness
              </p>

              <p
                className="
                  mt-1
                  text-[8px]
                  font-medium
                  leading-4
                  text-[#725c56]
                "
              >
                Fresh batches prepared daily.
              </p>
            </div>

            {/* FEATURE 3 */}

            <div
              className="
                rounded-[18px]
                border
                border-[#351714]/20
                bg-[#f4c6a6]/50
                p-4
              "
            >
              <Heart
                size={18}
                className="text-[#351714]"
              />

              <p
                className="
                  mt-3
                  text-[10px]
                  font-black
                  uppercase
                  text-[#351714]
                "
              >
                Passion
              </p>

              <p
                className="
                  mt-1
                  text-[8px]
                  font-medium
                  leading-4
                  text-[#725c56]
                "
              >
                Handmade with care and love.
              </p>
            </div>
          </div>

          {/* =================================
              BUTTON
          ================================= */}

          <Link
            to="/bakery"
            className="
              group
              mt-8
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
              hover:bg-[#f26d3d]
              hover:shadow-[4px_4px_0_#351714]
            "
          >
            Explore Our Bakery

            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurStory;