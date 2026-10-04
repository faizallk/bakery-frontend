import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Clock3,
  Heart,
  Sparkles,
  Wheat,
  Award,
} from "lucide-react";

import bakeryImage from "../../../assets/bakery.jpg";

function WhyChooseUs() {
  const reasons = [
    {
      id: "01",
      icon: Clock3,
      title: "Fresh Daily",
      description: "Fresh batches prepared every morning.",
      bg: "#ffdf38",
    },
    {
      id: "02",
      icon: Wheat,
      title: "Quality Ingredients",
      description: "Carefully selected ingredients in every bake.",
      bg: "#8edbe3",
    },
    {
      id: "03",
      icon: Heart,
      title: "Handcrafted",
      description: "Made by hand with patience, care and passion.",
      bg: "#f3a7bd",
    },
    {
      id: "04",
      icon: Award,
      title: "Quality First",
      description: "Taste and quality come before everything else.",
      bg: "#f49a65",
    },
  ];

  return (
    <section
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
          BACKGROUND
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#8edbe3]/10
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#ffdf38]/15
          blur-[100px]
        "
      />

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
            LEFT CONTENT
        ===================================== */}

        <div>
          {/* SMALL LABEL */}

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
              Why Choose Us
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
            Good Baking
            <br />
            Starts With
            <br />

            <span className="text-[#f26d3d]">
              Good Choices.
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
              text-[#725c56]

              md:text-[13px]
              md:leading-8
            "
          >
            From the ingredients we choose to the way
            every product is prepared, we focus on the
            small details that make bakery favourites
            fresh, delicious and memorable.
          </p>

          {/* =====================================
              REASONS GRID
          ===================================== */}

          <div
            className="
              mt-9
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
            "
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.id}
                  className="
                    group
                    relative
                    flex
                    items-start
                    gap-4

                    rounded-[20px]

                    border
                    border-[#351714]/20

                    bg-white

                    p-4

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#351714]
                    hover:shadow-[4px_4px_0_#351714]
                  "
                >
                  {/* ICON */}

                  <div
                    style={{
                      backgroundColor: reason.bg,
                    }}
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#351714]

                      transition-transform
                      duration-300

                      group-hover:rotate-6
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={2}
                      className="text-[#351714]"
                    />
                  </div>

                  {/* TEXT */}

                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="
                          text-[7px]
                          font-black
                          text-[#351714]/30
                        "
                      >
                        {reason.id}
                      </span>

                      <h3
                        className="
                          text-[11px]
                          font-black
                          uppercase
                          text-[#351714]
                        "
                      >
                        {reason.title}
                      </h3>
                    </div>

                    <p
                      className="
                        mt-1.5
                        text-[9px]
                        font-medium
                        leading-5
                        text-[#725c56]
                      "
                    >
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =====================================
              CHECK LIST
          ===================================== */}

          <div
            className="
              mt-8
              border-y
              border-dashed
              border-[#351714]/20
              py-6
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >
              {[
                "Freshly Baked Every Day",
                "Traditional Baking Methods",
                "Made With Quality Ingredients",
                "Prepared With Care",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5"
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#351714]
                      text-white
                    "
                  >
                    <Check
                      size={11}
                      strokeWidth={3}
                    />
                  </span>

                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.3px]
                      text-[#351714]
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BUTTON */}

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

        {/* =====================================
            RIGHT IMAGE
        ===================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[600px]
          "
        >
          {/* BACK SHAPE */}

          <div
            className="
              absolute
              -right-5
              -top-5

              h-[90%]
              w-[90%]

              rounded-[40px]

              border
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

              overflow-hidden

              rounded-[35px]

              border
              border-[#351714]

              bg-white

              p-2.5

              shadow-[8px_8px_0_#351714]
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[27px]
              "
            >
              <img
                src={bakeryImage}
                alt="Freshly baked bakery products"
                className="
                  h-[450px]
                  w-full
                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-105

                  sm:h-[550px]
                  lg:h-[620px]
                "
              />

              {/* OVERLAY */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-[#351714]/55
                  via-transparent
                  to-transparent
                "
              />

              {/* BOTTOM IMAGE CONTENT */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                "
              >
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[1.5px]
                    text-white/60
                  "
                >
                  Our Promise
                </p>

                <h3
                  className="
                    mt-1
                    max-w-[330px]

                    text-[22px]
                    font-black
                    uppercase
                    leading-[1.05]

                    text-white

                    sm:text-[26px]
                  "
                >
                  Fresh From Our
                  Oven To Your Table.
                </h3>
              </div>
            </div>
          </div>

          {/* =================================
              100% BADGE
          ================================= */}

          <div
            className="
              absolute
              -bottom-7
              -left-5
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
              size={18}
              fill="currentColor"
              className="mb-1 text-[#351714]"
            />

            <p
              className="
                text-[22px]
                font-black
                leading-none
                text-[#351714]
              "
            >
              100%
            </p>

            <p
              className="
                mt-1
                text-[7px]
                font-black
                uppercase
                tracking-[1px]
                text-[#351714]
              "
            >
              Made With Care
            </p>
          </div>

          {/* =================================
              TOP BADGE
          ================================= */}

          <div
            className="
              absolute
              -right-3
              top-10
              z-20

              rotate-[6deg]

              rounded-full

              border
              border-[#351714]

              bg-[#f3a7bd]

              px-4
              py-2.5

              shadow-[3px_3px_0_#351714]
            "
          >
            <p
              className="
                text-[8px]
                font-black
                uppercase
                tracking-[1px]
                text-[#351714]
              "
            >
              ✦ Baked Fresh Daily
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;