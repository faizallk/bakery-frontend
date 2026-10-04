import React, { useState } from "react";
import {
  Croissant,
  Cookie,
  CakeSlice,
  Wheat,
  CircleDot,
  CupSoda,
  ArrowUpRight,
} from "lucide-react";

function BakeryCategories() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const categories = [
    {
      id: 1,
      name: "All",
      subtitle: "Explore Everything",
      icon: Wheat,
      bg: "#ffdf38",
      count: 18,
    },
    {
      id: 2,
      name: "Bread",
      subtitle: "Fresh Everyday",
      icon: Wheat,
      bg: "#f49a65",
      count: 4,
    },
    {
      id: 3,
      name: "Croissant",
      subtitle: "Flaky & Buttery",
      icon: Croissant,
      bg: "#8edbe3",
      count: 3,
    },
    {
      id: 4,
      name: "Cookies",
      subtitle: "Sweet & Crunchy",
      icon: Cookie,
      bg: "#f3a7bd",
      count: 3,
    },
    {
      id: 5,
      name: "Pastries",
      subtitle: "Sweet Creations",
      icon: CakeSlice,
      bg: "#caa8e8",
      count: 3,
    },
    {
      id: 6,
      name: "Bagels",
      subtitle: "Soft & Chewy",
      icon: CircleDot,
      bg: "#b8d69b",
      count: 2,
    },
    {
      id: 7,
      name: "Muffins",
      subtitle: "Soft & Delicious",
      icon: CupSoda,
      bg: "#f4c6a6",
      count: 3,
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
      {/* =====================================
          BACKGROUND DECORATIONS
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#ffdf38]/15
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#f3a7bd]/20
          blur-[100px]
        "
      />

      {/* =====================================
          CONTAINER
      ===================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
        "
      >
        {/* ===================================
            HEADER
        =================================== */}

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
                Baked Fresh Daily
              </p>
            </div>

            <h2
              className="
                text-[40px]
                font-black
                uppercase
                leading-[0.95]
                tracking-[-1.5px]
                text-[#351714]

                sm:text-[46px]
                md:text-[54px]
                lg:text-[58px]
              "
            >
              Pick Your
              <br />

              <span className="text-[#f26d3d]">
                Favourite.
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div className="max-w-[450px]">
            <p
              className="
                text-[12px]
                font-medium
                leading-6
                text-[#725c56]
                md:text-[13px]
                md:leading-7
              "
            >
              From crusty artisan breads to buttery
              croissants, sweet cookies and freshly
              prepared pastries — find something
              delicious for every craving.
            </p>

            {/* SMALL FEATURES */}

            <div className="mt-5 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#ffdf38]" />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[1px]
                    text-[#351714]
                  "
                >
                  Fresh
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f49a65]" />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[1px]
                    text-[#351714]
                  "
                >
                  Handmade
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#8edbe3]" />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[1px]
                    text-[#351714]
                  "
                >
                  Daily Baked
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================
            DIVIDER
        =================================== */}

        <div className="my-10 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#351714]/15" />

          <span className="h-2 w-2 rounded-full bg-[#f26d3d]" />
          <span className="h-2 w-2 rounded-full bg-[#ffdf38]" />
          <span className="h-2 w-2 rounded-full bg-[#8edbe3]" />

          <div className="h-px flex-1 bg-[#351714]/15" />
        </div>

        {/* ===================================
            CATEGORY GRID
        =================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-4

            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-7
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;

            const isActive =
              activeCategory === category.name;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() =>
                  setActiveCategory(category.name)
                }
                style={{
                  backgroundColor: category.bg,
                }}
                className={`
                  group
                  relative
                  min-h-[190px]
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#351714]
                  p-4
                  text-left

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[5px_5px_0_#351714]

                  md:min-h-[205px]

                  ${
                    isActive
                      ? "-translate-y-1 shadow-[5px_5px_0_#351714]"
                      : ""
                  }
                `}
              >
                {/* ==========================
                    BACKGROUND NUMBER
                ========================== */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -bottom-4
                    -right-1
                    text-[75px]
                    font-black
                    leading-none
                    text-[#351714]/5
                  "
                >
                  {String(category.id).padStart(
                    2,
                    "0"
                  )}
                </span>

                {/* ==========================
                    TOP
                ========================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                  "
                >
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
                          ? "rotate-6 bg-[#351714] text-white"
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

                  {/* COUNT */}

                  <span
                    className="
                      flex
                      h-7
                      min-w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#351714]
                      bg-[#fff9f1]
                      px-1.5
                      text-[8px]
                      font-black
                      text-[#351714]
                    "
                  >
                    {category.count}
                  </span>
                </div>

                {/* ==========================
                    TEXT
                ========================== */}

                <div
                  className="
                    relative
                    z-10
                    mt-9
                  "
                >
                  <p
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[1px]
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
                    "
                  >
                    {category.name}
                  </h3>
                </div>

                {/* ==========================
                    BOTTOM ARROW
                ========================== */}

                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    z-10

                    flex
                    h-8
                    w-8
                    items-center
                    justify-center

                    rounded-full
                    border
                    border-[#351714]

                    bg-[#fff9f1]

                    opacity-0

                    transition-all
                    duration-300

                    group-hover:rotate-45
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2.5}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* ===================================
            SELECTED CATEGORY
        =================================== */}

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

            bg-white/50

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

            <h3
              className="
                mt-1
                text-[18px]
                font-black
                uppercase
                text-[#351714]
              "
            >
              {activeCategory}
            </h3>
          </div>

          <p
            className="
              max-w-[400px]
              text-[10px]
              font-medium
              leading-5
              text-[#725c56]

              sm:text-right
            "
          >
            Browse our freshly baked{" "}
            <span className="font-black text-[#351714]">
              {activeCategory}
            </span>{" "}
            collection made with quality ingredients
            and lots of love.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BakeryCategories;