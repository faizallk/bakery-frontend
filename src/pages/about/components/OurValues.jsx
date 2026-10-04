import React from "react";
import {
  Wheat,
  Heart,
  Sparkles,
  Sunrise,
  ArrowUpRight,
} from "lucide-react";

function OurValues() {
  const values = [
    {
      id: "01",
      icon: Sunrise,
      title: "Fresh Every Day",
      description:
        "We bake fresh every morning so every bread, pastry and sweet treat reaches you at its best.",
      bg: "#ffdf38",
      tag: "Always Fresh",
    },
    {
      id: "02",
      icon: Wheat,
      title: "Quality Ingredients",
      description:
        "We carefully choose quality ingredients because better ingredients create better flavour and texture.",
      bg: "#8edbe3",
      tag: "Quality First",
    },
    {
      id: "03",
      icon: Sparkles,
      title: "Handmade With Care",
      description:
        "Our breads, pastries and cakes are carefully prepared by hand with patience and attention to detail.",
      bg: "#f4a2bc",
      tag: "Handcrafted",
    },
    {
      id: "04",
      icon: Heart,
      title: "Made With Love",
      description:
        "For us, baking is more than a process. It is about creating something people can enjoy and share.",
      bg: "#f49a65",
      tag: "With Love",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5efe7] px-5 py-20 md:px-8 md:py-28">
      {/* Background decorations */}

      <div className="pointer-events-none absolute -left-32 top-0 h-[300px] w-[300px] rounded-full bg-[#ffdf38]/20 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full bg-[#f3a7bd]/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* ========================================
            HEADER
        ======================================== */}

        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          {/* LEFT */}

          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full bg-[#f26d3d]" />

              <p className="text-[9px] font-extrabold uppercase tracking-[2px] text-[#f26d3d]">
                What We Believe
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
                lg:text-[60px]
              "
            >
              The Values Behind
              <br />

              <span className="text-[#f26d3d]">
                Every Bake.
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div className="max-w-[450px]">
            <p className="text-[12px] font-medium leading-7 text-[#725c56] md:text-[13px]">
              From choosing our ingredients to taking the
              final batch from the oven, these simple values
              guide the way we bake every day.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#351714]/20" />

              <Heart
                size={14}
                className="text-[#f26d3d]"
              />
            </div>
          </div>
        </div>

        {/* ========================================
            VALUE CARDS
        ======================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.id}
                style={{ backgroundColor: value.bg }}
                className="
                  group
                  relative
                  min-h-[350px]
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#351714]
                  p-6

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:shadow-[7px_7px_0_#351714]

                  md:min-h-[390px]
                  md:p-7
                "
              >
                {/* BIG NUMBER */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -bottom-7
                    -right-3

                    text-[120px]
                    font-black
                    leading-none

                    text-[#351714]/[0.06]
                  "
                >
                  {value.id}
                </span>

                {/* TOP */}

                <div className="relative z-10 flex items-start justify-between">
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#351714]

                      bg-[#fff9f1]

                      text-[#351714]

                      shadow-[3px_3px_0_#351714]

                      transition-all
                      duration-300

                      group-hover:rotate-6
                      group-hover:scale-105
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={2}
                    />
                  </div>

                  {/* NUMBER */}

                  <span
                    className="
                      text-[10px]
                      font-black
                      tracking-[1px]
                      text-[#351714]/50
                    "
                  >
                    {value.id}
                  </span>
                </div>

                {/* CONTENT */}

                <div className="relative z-10 mt-16">
                  {/* TAG */}

                  <span
                    className="
                      inline-flex

                      rounded-full

                      border
                      border-[#351714]/30

                      bg-[#fff9f1]/50

                      px-3
                      py-1.5

                      text-[7px]
                      font-extrabold
                      uppercase
                      tracking-[1px]

                      text-[#351714]
                    "
                  >
                    {value.tag}
                  </span>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-4
                      max-w-[240px]

                      text-[22px]
                      font-black
                      uppercase
                      leading-[1]

                      text-[#351714]

                      md:text-[25px]
                    "
                  >
                    {value.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-4
                      max-w-[270px]

                      text-[10px]
                      font-medium
                      leading-5

                      text-[#351714]/65

                      md:text-[11px]
                      md:leading-6
                    "
                  >
                    {value.description}
                  </p>
                </div>

                {/* ARROW */}

                <div
                  className="
                    absolute
                    bottom-6
                    right-6
                    z-20

                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#351714]

                    bg-[#fff9f1]

                    text-[#351714]

                    opacity-0

                    transition-all
                    duration-300

                    group-hover:rotate-45
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.5}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================
            BOTTOM MESSAGE
        ======================================== */}

        <div
          className="
            mt-10

            flex
            flex-col
            gap-5

            rounded-[25px]

            border
            border-[#351714]

            bg-[#351714]

            px-6
            py-6

            text-white

            md:flex-row
            md:items-center
            md:justify-between
            md:px-8
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center

                rounded-full

                bg-[#ffdf38]

                text-[#351714]
              "
            >
              <Heart
                size={18}
                fill="currentColor"
              />
            </div>

            <div>
              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[1.5px]

                  text-[#ffdf38]
                "
              >
                Our Promise
              </p>

              <p
                className="
                  mt-1
                  text-[13px]
                  font-black
                  uppercase

                  text-[#fff9f1]

                  md:text-[15px]
                "
              >
                Freshly Made. Carefully Crafted.
              </p>
            </div>
          </div>

          <p
            className="
              max-w-[430px]

              text-[10px]
              font-medium
              leading-5

              text-white/55

              md:text-right
            "
          >
            We want every product leaving our bakery to
            be something we're proud to serve and
            something you'll be happy to enjoy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurValues;