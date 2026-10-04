import React from "react";
import {
  Heart,
  Wheat,
  Sparkles,
  ChefHat,
  ArrowUpRight,
} from "lucide-react";

import bakeryImage from "../../../assets/bakery.jpg";
import croissantImage from "../../../assets/croissant.jpg";
import cakeImage from "../../../assets/cake.jpg";

function WhySpecialSection() {
  const features = [
    {
      id: 1,
      number: "01",
      title: "Freshly Baked",
      description:
        "Our products are freshly prepared every day so every bite feels fresh, soft and delicious.",
      icon: Sparkles,
      bg: "#ffdf38",
    },
    {
      id: 2,
      number: "02",
      title: "Quality Ingredients",
      description:
        "We carefully choose quality ingredients to create flavourful breads, cakes and pastries.",
      icon: Wheat,
      bg: "#8edbe3",
    },
    {
      id: 3,
      number: "03",
      title: "Made With Love",
      description:
        "Every product receives attention, patience and care from preparation to the final bake.",
      icon: Heart,
      bg: "#f3c8c8",
    },
    {
      id: 4,
      number: "04",
      title: "Expert Bakers",
      description:
        "Traditional techniques and skilled hands come together to create our everyday favourites.",
      icon: ChefHat,
      bg: "#caa8e8",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fff9f1] py-20 md:py-28">

      {/* ==================================================
          DECORATION
      ================================================== */}

      <div className="absolute -left-[170px] top-[300px] h-[350px] w-[350px] rounded-full border-[70px] border-[#8edbe3]/15" />

      <div className="absolute -right-[180px] bottom-[100px] h-[400px] w-[400px] rounded-full border-[80px] border-[#ffdf38]/20" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">

        {/* ==================================================
            TOP HEADING
        ================================================== */}

        <div className="mx-auto max-w-[1050px] text-center">

          <div className="flex items-center justify-center gap-3">
            <span className="h-[8px] w-[8px] rounded-full bg-[#f26d3d]" />

            <p className="text-[10px] font-black uppercase tracking-[2.5px] text-[#351714]">
              What Makes Us Different
            </p>

            <span className="h-[8px] w-[8px] rounded-full bg-[#8edbe3]" />
          </div>

          <h2
            className="
              mt-5
              text-[48px]
              font-black
              uppercase
              leading-[0.9]
              tracking-[-2.5px]
              text-[#351714]

              sm:text-[60px]
              md:text-[78px]
              lg:text-[90px]
            "
          >
            Why Bakery's Items
            <br />

            Are

            <span className="relative ml-3 inline-block">
              Special?

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[8px]
                  w-full
                  -rotate-1
                  rounded-full
                  bg-[#ffdf38]
                "
              />
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[650px] text-[13px] font-medium leading-7 text-[#705b55]">
            Great bakery products are about more than taste. Freshness,
            ingredients, craftsmanship and care all come together to create
            something worth remembering.
          </p>

        </div>


        {/* ==================================================
            CREATIVE GRID
        ================================================== */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-12
          "
        >

          {/* ==================================================
              BIG IMAGE
          ================================================== */}

          <div
            className="
              group
              relative
              min-h-[520px]
              overflow-hidden
              rounded-[35px]
              border-2
              border-[#351714]
              shadow-[7px_7px_0_#351714]

              md:col-span-2
              lg:col-span-5
              lg:row-span-2
              lg:min-h-[650px]
            "
          >

            <img
              src={bakeryImage}
              alt="Fresh bakery products"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#351714]/70 via-[#351714]/5 to-transparent" />

            {/* top badge */}

            <div
              className="
                absolute
                left-6
                top-6
                -rotate-6
                rounded-full
                border-2
                border-[#351714]
                bg-[#ffdf38]
                px-5
                py-2.5
                text-[8px]
                font-black
                uppercase
                tracking-[1px]
                text-[#351714]
                shadow-[3px_3px_0_#351714]
              "
            >
              Fresh Everyday
            </div>

            {/* bottom content */}

            <div className="absolute bottom-7 left-7 right-7">

              <p className="text-[9px] font-black uppercase tracking-[2px] text-[#ffdf38]">
                From Our Oven
              </p>

              <h3 className="mt-3 max-w-[450px] text-[32px] font-black uppercase leading-[0.95] text-white md:text-[42px]">
                Good Things
                <br />
                Take Time.
              </h3>

            </div>

          </div>


          {/* ==================================================
              YELLOW FEATURE CARD
          ================================================== */}

          <FeatureCard
            feature={features[0]}
            className="lg:col-span-3"
          />


          {/* ==================================================
              CROISSANT IMAGE
          ================================================== */}

          <div
            className="
              group
              relative
              min-h-[300px]
              overflow-hidden
              rounded-[35px]
              border-2
              border-[#351714]
              bg-[#f49a65]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[6px_6px_0_#351714]

              lg:col-span-4
            "
          >

            <img
              src={croissantImage}
              alt="Fresh croissant"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#351714]/50 via-transparent to-transparent" />

            <div
              className="
                absolute
                bottom-5
                left-5
                rounded-full
                border-2
                border-[#351714]
                bg-white
                px-4
                py-2
                text-[8px]
                font-black
                uppercase
                text-[#351714]
              "
            >
              Buttery & Flaky
            </div>

          </div>


          {/* ==================================================
              BLUE FEATURE CARD
          ================================================== */}

          <FeatureCard
            feature={features[1]}
            className="lg:col-span-4"
          />


          {/* ==================================================
              SMALL CAKE IMAGE
          ================================================== */}

          <div
            className="
              group
              relative
              min-h-[300px]
              overflow-hidden
              rounded-[35px]
              border-2
              border-[#351714]
              bg-[#f3c8c8]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[6px_6px_0_#351714]

              lg:col-span-3
            "
          >

            <img
              src={cakeImage}
              alt="Fresh bakery cake"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#351714]/40 via-transparent to-transparent" />

            <span
              className="
                absolute
                right-5
                top-5
                flex
                h-[70px]
                w-[70px]
                rotate-6
                items-center
                justify-center
                rounded-full
                border-2
                border-[#351714]
                bg-[#8edbe3]
                text-center
                text-[8px]
                font-black
                uppercase
                leading-3
                text-[#351714]
                shadow-[3px_3px_0_#351714]
              "
            >
              Sweet
              <br />
              Moments
            </span>

          </div>

        </div>


        {/* ==================================================
            SECOND ROW FEATURES
        ================================================== */}

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">

          <FeatureCard feature={features[2]} />

          <FeatureCard feature={features[3]} />

        </div>


        {/* ==================================================
            BOTTOM BANNER
        ================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[35px]
            border-2
            border-[#351714]
            bg-[#7130a6]
            px-6
            py-10
            text-white
            shadow-[7px_7px_0_#351714]

            md:px-10
            lg:px-14
          "
        >

          {/* Decorative text */}

          <span
            className="
              pointer-events-none
              absolute
              -right-5
              -top-10
              select-none
              text-[120px]
              font-black
              uppercase
              text-white/[0.04]

              md:text-[170px]
            "
          >
            Fresh
          </span>


          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-8

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            <div>

              <p className="text-[9px] font-black uppercase tracking-[2px] text-[#ffdf38]">
                Our Promise
              </p>

              <h3
                className="
                  mt-3
                  max-w-[700px]
                  text-[32px]
                  font-black
                  uppercase
                  leading-none

                  md:text-[42px]
                  lg:text-[48px]
                "
              >
                Freshly Made.
                <br />
                Happily Shared.
              </h3>

            </div>


            {/* mini stats */}

            <div className="flex flex-wrap gap-3">

              <div
                className="
                  rounded-[22px]
                  border-2
                  border-[#351714]
                  bg-[#ffdf38]
                  px-6
                  py-4
                  text-center
                  text-[#351714]
                "
              >
                <p className="text-[25px] font-black">
                  100%
                </p>

                <p className="mt-1 text-[8px] font-black uppercase tracking-[1px]">
                  Fresh
                </p>
              </div>


              <div
                className="
                  rounded-[22px]
                  border-2
                  border-[#351714]
                  bg-[#8edbe3]
                  px-6
                  py-4
                  text-center
                  text-[#351714]
                "
              >
                <p className="text-[25px] font-black">
                  Daily
                </p>

                <p className="mt-1 text-[8px] font-black uppercase tracking-[1px]">
                  Baking
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


/* ==========================================================
   REUSABLE FEATURE CARD
========================================================== */

function FeatureCard({ feature, className = "" }) {
  const Icon = feature.icon;

  return (
    <div
      style={{
        backgroundColor: feature.bg,
      }}
      className={`
        group
        relative
        min-h-[300px]
        overflow-hidden
        rounded-[35px]
        border-2
        border-[#351714]
        p-7
        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-[7px_7px_0_#351714]

        ${className}
      `}
    >

      {/* number */}

      <p className="text-[9px] font-black uppercase tracking-[2px] text-[#351714]/50">
        {feature.number}
      </p>


      {/* icon */}

      <div
        className="
          mt-7
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border-2
          border-[#351714]
          bg-[#fff9f1]
          text-[#351714]
          transition-all
          duration-300

          group-hover:rotate-12
          group-hover:scale-110
        "
      >
        <Icon size={23} strokeWidth={2.3} />
      </div>


      {/* content */}

      <h3
        className="
          mt-8
          max-w-[300px]
          text-[24px]
          font-black
          uppercase
          leading-none
          text-[#351714]

          md:text-[27px]
        "
      >
        {feature.title}
      </h3>

      <p className="mt-4 max-w-[350px] text-[11px] font-medium leading-6 text-[#553934]">
        {feature.description}
      </p>


      {/* arrow */}

      <div
        className="
          absolute
          bottom-6
          right-6
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border-2
          border-[#351714]
          bg-[#fff9f1]
          text-[#351714]
          transition-all
          duration-300

          group-hover:rotate-45
          group-hover:bg-[#351714]
          group-hover:text-white
        "
      >
        <ArrowUpRight size={16} strokeWidth={3} />
      </div>

    </div>
  );
}

export default WhySpecialSection;