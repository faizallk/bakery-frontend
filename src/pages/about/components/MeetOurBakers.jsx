import React from "react";
import {
  ChefHat,

  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import bakeryImage from "../../../assets/bakery.jpg";
import croissantImage from "../../../assets/croissant.jpg";
import cakeImage from "../../../assets/cake.jpg";

function MeetOurBakers() {
  const bakers = [
    {
      id: 1,
      name: "Daniel Martin",
      role: "Head Baker",
      experience: "12+ Years Experience",
      image: bakeryImage,
      bg: "#ffdf38",
      number: "01",
    },
    {
      id: 2,
      name: "Emma Rose",
      role: "Pastry Chef",
      experience: "8+ Years Experience",
      image: croissantImage,
      bg: "#8edbe3",
      number: "02",
    },
    {
      id: 3,
      name: "Sophia Claire",
      role: "Cake Artist",
      experience: "6+ Years Experience",
      image: cakeImage,
      bg: "#f3a7bd",
      number: "03",
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
      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#ffdf38]/15
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#f3a7bd]/20
          blur-[110px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* ======================================
            HEADER
        ====================================== */}

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
          <div>
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
                Meet The Makers
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
                text-[#351714]

                sm:text-[46px]
                md:text-[54px]
                lg:text-[60px]
              "
            >
              The Hands Behind
              <br />

              <span className="text-[#f26d3d]">
                Every Bake.
              </span>
            </h2>
          </div>

          <div className="max-w-[430px]">
            <p
              className="
                text-[12px]
                font-medium
                leading-7
                text-[#725c56]
                md:text-[13px]
              "
            >
              Behind every fresh loaf, delicate pastry and
              celebration cake is a baker who brings
              experience, creativity and care to the kitchen.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#351714]/20" />

              <ChefHat
                size={16}
                className="text-[#351714]"
              />
            </div>
          </div>
        </div>

        {/* ======================================
            BAKER CARDS
        ====================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-7
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {bakers.map((baker) => (
            <div
              key={baker.id}
              className="
                group
                relative
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              {/* COLORED BACKGROUND */}

              <div
                style={{
                  backgroundColor: baker.bg,
                }}
                className="
                  absolute
                  -bottom-3
                  -right-3
                  h-full
                  w-full
                  rounded-[28px]
                  border
                  border-[#351714]
                "
              />

              {/* MAIN CARD */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#351714]
                  bg-white
                  p-3
                  transition-all
                  duration-300
                  group-hover:shadow-[6px_6px_0_#351714]
                "
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[21px]
                    bg-[#f5efe7]
                  "
                >
                  <img
                    src={baker.image}
                    alt={baker.name}
                    className="
                      h-[390px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                      md:h-[430px]
                    "
                  />

                  {/* OVERLAY */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#351714]/60
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* NUMBER */}

                  <span
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#351714]
                      bg-[#fff9f1]
                      text-[8px]
                      font-black
                      text-[#351714]
                      shadow-[2px_2px_0_#351714]
                    "
                  >
                    {baker.number}
                  </span>

                  {/* SOCIAL */}

                  <button
                    type="button"
                    aria-label={`${baker.name} Instagram`}
                    className="
                      absolute
                      right-4
                      top-4
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
                      transition-all
                      duration-300
                      hover:rotate-6
                      hover:bg-[#ffdf38]
                    "
                  >
                    {/* <I size={15} /> */}
                  </button>

                  {/* IMAGE BOTTOM */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      right-5
                    "
                  >
                    <span
                      style={{
                        backgroundColor: baker.bg,
                      }}
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-[#351714]
                        px-3
                        py-1.5
                        text-[7px]
                        font-black
                        uppercase
                        tracking-[1px]
                        text-[#351714]
                      "
                    >
                      {baker.role}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="px-2 pb-3 pt-5">

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[7px]
                          font-bold
                          uppercase
                          tracking-[1.5px]
                          text-[#f26d3d]
                        "
                      >
                        {baker.experience}
                      </p>

                      <h3
                        className="
                          mt-2
                          text-[22px]
                          font-black
                          uppercase
                          leading-none
                          text-[#351714]
                          md:text-[24px]
                        "
                      >
                        {baker.name}
                      </h3>
                    </div>

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#351714]
                        bg-[#351714]
                        text-white
                        transition-all
                        duration-300
                        group-hover:rotate-45
                        group-hover:bg-[#ffdf38]
                        group-hover:text-[#351714]
                      "
                    >
                      <ArrowUpRight
                        size={16}
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  <div className="my-4 h-px bg-[#351714]/10" />

                  <div className="flex items-center gap-2">
                    <ChefHat
                      size={13}
                      className="text-[#351714]/50"
                    />

                    <p
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.7px]
                        text-[#351714]/50
                      "
                    >
                      Sweet Crumbs Bakery Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ======================================
            BOTTOM MESSAGE
        ====================================== */}

        <div
          className="
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-[25px]
            border
            border-[#351714]
            bg-[#f5efe7]
            px-6
            py-6
            text-center
            md:flex-row
            md:px-8
            md:text-left
          "
        >
          <div>
            <p
              className="
                text-[8px]
                font-extrabold
                uppercase
                tracking-[1.5px]
                text-[#f26d3d]
              "
            >
              One Team. One Passion.
            </p>

            <h3
              className="
                mt-1
                text-[17px]
                font-black
                uppercase
                text-[#351714]
                md:text-[20px]
              "
            >
              Creating Something Delicious Every Day.
            </h3>
          </div>

          <div className="flex -space-x-2">
            {bakers.map((baker) => (
              <div
                key={baker.id}
                className="
                  h-10
                  w-10
                  overflow-hidden
                  rounded-full
                  border-2
                  border-[#fff9f1]
                  bg-white
                "
              >
                <img
                  src={baker.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            ))}

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border-2
                border-[#fff9f1]
                bg-[#351714]
                text-[8px]
                font-black
                text-white
              "
            >
              +5
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetOurBakers;