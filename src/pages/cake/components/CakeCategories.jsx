import React, { useState } from "react";
import {
  CakeSlice,
  Heart,
  PartyPopper,
  Sparkles,
  Cherry,
  Candy,
  Gift,
  Wheat,
} from "lucide-react";

function CakeCategories() {
  const [activeCategory, setActiveCategory] =
    useState("All Cakes");

  const categories = [
    {
      id: 1,
      name: "All Cakes",
      subtitle: "Explore All",
      icon: CakeSlice,
      bg: "#ffdf38",
    },
    {
      id: 2,
      name: "Birthday",
      subtitle: "Celebrate Big",
      icon: PartyPopper,
      bg: "#f3a7bd",
    },
    {
      id: 3,
      name: "Chocolate",
      subtitle: "Rich & Creamy",
      icon: Candy,
      bg: "#caa8e8",
    },
    {
      id: 4,
      name: "Fruit Cakes",
      subtitle: "Fresh & Fruity",
      icon: Cherry,
      bg: "#8edbe3",
    },
    {
      id: 5,
      name: "Wedding",
      subtitle: "For Your Day",
      icon: Heart,
      bg: "#f4c6a6",
    },
    {
      id: 6,
      name: "Designer",
      subtitle: "Made For You",
      icon: Sparkles,
      bg: "#f49a65",
    },
    {
      id: 7,
      name: "Eggless",
      subtitle: "100% Eggless",
      icon: Wheat,
      bg: "#b8d69b",
    },
    {
      id: 8,
      name: "Anniversary",
      subtitle: "Share The Love",
      icon: Gift,
      bg: "#e7b4d3",
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
        md:py-24
      "
    >
      {/* BACKGROUND DECORATION */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-1/2
          h-[260px]
          w-[260px]
          -translate-y-1/2
          rounded-full
          bg-[#f3a7bd]/15
          blur-[90px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          top-10
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#8edbe3]/20
          blur-[90px]
        "
      />

      {/* MAIN CONTAINER */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
        "
      >
        {/* =========================================
            HEADER
        ========================================= */}

        <div
          className="
            flex
            flex-col
            gap-7

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* LEFT */}

          <div>
            <div className="mb-3 flex items-center gap-2">
              <span
                className="
                  h-[7px]
                  w-[7px]
                  rounded-full
                  bg-[#f26d3d]
                "
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
                Find Your Favourite
              </p>
            </div>

            <h2
              className="
                text-[38px]
                font-black
                uppercase
                leading-[0.95]
                tracking-[-1.5px]
                text-[#351714]

                sm:text-[44px]
                md:text-[52px]
              "
            >
              Cakes For Every
              <br />

              <span className="text-[#f26d3d]">
                Celebration.
              </span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}

          <p
            className="
              max-w-[430px]
              text-[12px]
              font-medium
              leading-6
              text-[#725c56]

              md:text-[13px]
              md:leading-7
            "
          >
            Choose from our freshly baked cake
            collection, from classic chocolate
            favourites to beautiful cakes made for
            birthdays, weddings and special moments.
          </p>
        </div>

        {/* =========================================
            DECORATIVE LINE
        ========================================= */}

        <div className="my-10 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#351714]/15" />

          <span className="h-2 w-2 rounded-full bg-[#f26d3d]" />

          <span className="h-2 w-2 rounded-full bg-[#ffdf38]" />

          <span className="h-2 w-2 rounded-full bg-[#8edbe3]" />

          <div className="h-px flex-1 bg-[#351714]/15" />
        </div>

        {/* =========================================
            CATEGORY GRID
        ========================================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-4

            sm:grid-cols-2
            md:grid-cols-4
            lg:gap-5
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;

            const isActive =
              activeCategory === category.name;

            return (
              <button
                type="button"
                key={category.id}
                onClick={() =>
                  setActiveCategory(category.name)
                }
                style={{
                  backgroundColor: category.bg,
                }}
                className={`
                  group
                  relative
                  min-h-[175px]
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#351714]
                  p-5
                  text-left
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[5px_5px_0_#351714]

                  md:min-h-[195px]
                  md:p-6

                  ${
                    isActive
                      ? "-translate-y-1 shadow-[5px_5px_0_#351714]"
                      : ""
                  }
                `}
              >
                {/* BIG DECORATIVE NUMBER */}

                <span
                  className="
                    absolute
                    -bottom-4
                    -right-1
                    text-[75px]
                    font-black
                    leading-none
                    text-[#351714]/5

                    md:text-[90px]
                  "
                >
                  {String(category.id).padStart(
                    2,
                    "0"
                  )}
                </span>

                {/* TOP */}

                <div className="flex items-start justify-between">
                  {/* ICON */}

                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#351714]
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "bg-[#351714] text-white"
                          : "bg-[#fff9f1] text-[#351714]"
                      }

                      group-hover:rotate-6
                    `}
                  >
                    <Icon
                      size={18}
                      strokeWidth={2}
                    />
                  </div>

                  {/* ACTIVE DOT */}

                  <div
                    className={`
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#351714]
                    `}
                  >
                    <span
                      className={`
                        h-2.5
                        w-2.5
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "scale-100 bg-[#351714]"
                            : "scale-0"
                        }
                      `}
                    />
                  </div>
                </div>

                {/* TEXT */}

                <div className="relative z-10 mt-8">
                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[1.3px]
                      text-[#351714]/55
                    "
                  >
                    {category.subtitle}
                  </p>

                  <h3
                    className="
                      mt-1
                      text-[17px]
                      font-black
                      uppercase
                      leading-tight
                      text-[#351714]

                      md:text-[20px]
                    "
                  >
                    {category.name}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* =========================================
            SELECTED CATEGORY
        ========================================= */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-4
            rounded-[22px]
            border
            border-dashed
            border-[#351714]/30
            bg-white/60
            px-5
            py-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[1.5px]
                text-[#f26d3d]
              "
            >
              Selected Category
            </p>

            <p
              className="
                mt-1
                text-[17px]
                font-black
                uppercase
                text-[#351714]
              "
            >
              {activeCategory}
            </p>
          </div>

          <p
            className="
              max-w-[400px]
              text-[10px]
              leading-5
              text-[#725c56]

              sm:text-right
            "
          >
            Browse our delicious{" "}
            <span className="font-bold text-[#351714]">
              {activeCategory}
            </span>{" "}
            collection freshly prepared for your
            special moments.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CakeCategories;