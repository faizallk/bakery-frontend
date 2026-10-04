import React from "react";
import {
  Wheat,
  Blend,
  Timer,
  Flame,
  ShoppingBag,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function OurProcess() {
  const processes = [
    {
      id: "01",
      title: "Choose Ingredients",
      shortTitle: "Ingredients",
      description:
        "We begin with carefully selected ingredients to create better flavour, texture and freshness.",
      icon: Wheat,
      bg: "#ffdf38",
    },
    {
      id: "02",
      title: "Mix & Prepare",
      shortTitle: "Mix",
      description:
        "Every batch is carefully mixed and prepared using the right balance of ingredients.",
      icon: Blend,
      bg: "#8edbe3",
    },
    {
      id: "03",
      title: "Rest & Shape",
      shortTitle: "Shape",
      description:
        "We give our dough the time it needs before carefully shaping every piece by hand.",
      icon: Timer,
      bg: "#f3a7bd",
    },
    {
      id: "04",
      title: "Bake Fresh",
      shortTitle: "Bake",
      description:
        "Each batch is baked until it reaches the perfect colour, texture and delicious aroma.",
      icon: Flame,
      bg: "#f49a65",
    },
    {
      id: "05",
      title: "Ready For You",
      shortTitle: "Enjoy",
      description:
        "Fresh from our oven and ready to be enjoyed with your family, friends or a cup of coffee.",
      icon: ShoppingBag,
      bg: "#b8d69b",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#351714] px-5 py-20 md:px-8 md:py-28">
      {/* =========================================
          BACKGROUND DECORATIONS
      ========================================= */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full border border-white/[0.05]" />

      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[450px] w-[450px] rounded-full bg-[#f26d3d]/10 blur-[120px]" />

      <p
        className="
          pointer-events-none
          absolute
          bottom-[-35px]
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          text-[90px]
          font-black
          uppercase
          leading-none
          tracking-[-5px]
          text-white/[0.025]
          md:text-[140px]
          lg:text-[180px]
        "
      >
        Our Process
      </p>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mx-auto max-w-[750px] text-center">
          <div className="flex items-center justify-center gap-2">
            <Sparkles
              size={14}
              className="text-[#ffdf38]"
            />

            <p className="text-[9px] font-extrabold uppercase tracking-[2px] text-[#ffdf38]">
              Behind Every Bake
            </p>
          </div>

          <h2
            className="
              mt-4
              text-[40px]
              font-black
              uppercase
              leading-[0.95]
              tracking-[-1.5px]
              text-[#fff9f1]
              sm:text-[46px]
              md:text-[54px]
              lg:text-[60px]
            "
          >
            From Simple Ingredients
            <br />

            <span className="text-[#f26d3d]">
              To Something Delicious.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[600px]
              text-[11px]
              font-medium
              leading-6
              text-white/50
              md:text-[12px]
              md:leading-7
            "
          >
            Great baking doesn't happen by accident. Every
            product goes through a careful process from
            selecting ingredients to the moment it leaves
            our oven.
          </p>
        </div>

        {/* =========================================
            PROCESS LINE
        ========================================= */}

        <div className="relative mt-16">
          {/* DESKTOP CONNECTING LINE */}

          <div
            className="
              absolute
              left-[10%]
              right-[10%]
              top-[48px]
              hidden
              h-[2px]
              bg-white/10
              lg:block
            "
          />

          {/* YELLOW LINE */}

          <div
            className="
              absolute
              left-[10%]
              top-[48px]
              hidden
              h-[2px]
              w-[80%]
              bg-gradient-to-r
              from-[#ffdf38]
              via-[#f3a7bd]
              to-[#b8d69b]
              opacity-60
              lg:block
            "
          />

          {/* PROCESS GRID */}

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {processes.map((process, index) => {
              const Icon = process.icon;

              return (
                <div
                  key={process.id}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >
                  {/* =================================
                      ICON
                  ================================= */}

                  <div className="relative">
                    {/* OUTER CIRCLE */}

                    <div
                      className="
                        flex
                        h-[96px]
                        w-[96px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-[#351714]
                        p-2
                      "
                    >
                      {/* INNER CIRCLE */}

                      <div
                        style={{
                          backgroundColor: process.bg,
                        }}
                        className="
                          flex
                          h-full
                          w-full
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#351714]
                          text-[#351714]
                          transition-all
                          duration-300
                          group-hover:rotate-6
                          group-hover:scale-105
                        "
                      >
                        <Icon
                          size={25}
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    {/* NUMBER */}

                    <span
                      className="
                        absolute
                        -right-1
                        -top-1
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#351714]
                        bg-[#fff9f1]
                        text-[8px]
                        font-black
                        text-[#351714]
                      "
                    >
                      {process.id}
                    </span>
                  </div>

                  {/* =================================
                      CONTENT
                  ================================= */}

                  <div
                    className="
                      mt-6
                      w-full
                      rounded-[22px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-4
                      py-5
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:border-white/20
                      group-hover:bg-white/[0.07]
                    "
                  >
                    <p
                      style={{
                        color: process.bg,
                      }}
                      className="
                        text-[7px]
                        font-extrabold
                        uppercase
                        tracking-[1.5px]
                      "
                    >
                      Step {process.id}
                    </p>

                    <h3
                      className="
                        mt-2
                        text-[13px]
                        font-black
                        uppercase
                        leading-tight
                        text-[#fff9f1]
                      "
                    >
                      {process.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-[9px]
                        font-medium
                        leading-5
                        text-white/45
                      "
                    >
                      {process.description}
                    </p>
                  </div>

                  {/* =================================
                      MOBILE/TABLET ARROW
                  ================================= */}

                  {index !== processes.length - 1 && (
                    <div
                      className="
                        my-3
                        flex
                        h-8
                        w-8
                        rotate-90
                        items-center
                        justify-center
                        rounded-full
                        bg-white/5
                        text-white/30
                        sm:hidden
                      "
                    >
                      <ArrowRight size={14} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            SIMPLE PROCESS SUMMARY
        ========================================= */}

        <div
          className="
            mt-14
            overflow-hidden
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.04]
          "
        >
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-[1fr_auto_1fr]
              md:items-center
            "
          >
            {/* LEFT */}

            <div className="p-6 md:p-8">
              <p
                className="
                  text-[8px]
                  font-extrabold
                  uppercase
                  tracking-[1.5px]
                  text-[#ffdf38]
                "
              >
                Start
              </p>

              <h3
                className="
                  mt-2
                  text-[19px]
                  font-black
                  uppercase
                  text-white
                "
              >
                Simple Ingredients
              </h3>

              <p
                className="
                  mt-2
                  max-w-[380px]
                  text-[9px]
                  font-medium
                  leading-5
                  text-white/45
                "
              >
                Flour, butter, chocolate, fruits and other
                carefully selected ingredients.
              </p>
            </div>

            {/* CENTER */}

            <div
              className="
                hidden
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-[#f26d3d]
                text-white
                md:flex
              "
            >
              <ArrowRight
                size={18}
                strokeWidth={2.5}
              />
            </div>

            {/* RIGHT */}

            <div
              className="
                border-t
                border-white/10
                p-6
                md:border-l
                md:border-t-0
                md:p-8
                md:text-right
              "
            >
              <p
                className="
                  text-[8px]
                  font-extrabold
                  uppercase
                  tracking-[1.5px]
                  text-[#8edbe3]
                "
              >
                Finish
              </p>

              <h3
                className="
                  mt-2
                  text-[19px]
                  font-black
                  uppercase
                  text-white
                "
              >
                Freshly Baked Happiness
              </h3>

              <p
                className="
                  mt-2
                  ml-auto
                  max-w-[380px]
                  text-[9px]
                  font-medium
                  leading-5
                  text-white/45
                "
              >
                Fresh bakery favourites ready to be shared,
                enjoyed and remembered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;