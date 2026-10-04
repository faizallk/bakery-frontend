import React from "react";
import {
  Clock3,
  Sunrise,
  Sparkles,
  CalendarDays,
} from "lucide-react";

function OpeningHours() {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "8:00 AM - 8:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "8:00 AM - 8:00 PM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "8:00 AM - 8:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "8:00 AM - 8:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "8:00 AM - 8:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "8:00 AM - 9:00 PM",
    },
    {
      id: 7,
      day: "Sunday",
      time: "9:00 AM - 6:00 PM",
    },
  ];

  return (
    <section
      id="opening-hours"
      className="
        relative
        overflow-hidden
        bg-[#351714]
        px-5
        py-20
        md:px-8
        md:py-28
      "
    >
      {/* ======================================
          BACKGROUND
      ====================================== */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full border border-white/5" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[400px] w-[400px] rounded-full bg-[#f26d3d]/10 blur-[120px]" />

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
          text-white/[0.025]
          md:text-[150px]
        "
      >
        Opening
      </p>

      {/* ======================================
          MAIN CONTAINER
      ====================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1400px]
          grid-cols-1
          gap-14
          lg:grid-cols-[0.85fr_1.15fr]
          lg:items-center
          lg:gap-20
        "
      >
        {/* ======================================
            LEFT CONTENT
        ====================================== */}

        <div>
          {/* LABEL */}

          <div className="flex items-center gap-2">
            <Sparkles
              size={14}
              className="text-[#ffdf38]"
            />

            <p className="text-[9px] font-extrabold uppercase tracking-[2px] text-[#ffdf38]">
              Opening Hours
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
              text-[#fff9f1]
              sm:text-[46px]
              md:text-[54px]
              lg:text-[60px]
            "
          >
            Fresh Bakes
            <br />
            Are Waiting
            <br />

            <span className="text-[#f26d3d]">
              For You.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              max-w-[500px]
              text-[11px]
              font-medium
              leading-7
              text-white/50
              md:text-[12px]
            "
          >
            Visit us throughout the week for freshly baked
            breads, pastries, cakes and sweet treats. Our
            bakers begin preparing long before the doors open.
          </p>

          {/* ==================================
              FRESH BAKING CARD
          ================================== */}

          <div
            className="
              mt-8
              max-w-[470px]
              rounded-[24px]
              border
              border-[#351714]
              bg-[#ffdf38]
              p-5
              shadow-[5px_5px_0_#f26d3d]
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#351714]
                  bg-[#fff9f1]
                  text-[#351714]
                "
              >
                <Sunrise
                  size={22}
                  strokeWidth={2}
                />
              </div>

              <div>
                <p className="text-[7px] font-extrabold uppercase tracking-[1.5px] text-[#351714]/55">
                  Every Morning
                </p>

                <h3 className="mt-1 text-[16px] font-black uppercase text-[#351714]">
                  Fresh Baking Starts
                </h3>

                <p className="mt-1 text-[25px] font-black leading-none text-[#351714]">
                  5:00 AM
                </p>
              </div>
            </div>
          </div>

          {/* ==================================
              SMALL CARDS
          ================================== */}

          <div className="mt-5 grid max-w-[470px] grid-cols-2 gap-3">
            <div
              className="
                rounded-[18px]
                border
                border-white/10
                bg-white/[0.05]
                p-4
              "
            >
              <Clock3
                size={17}
                className="text-[#8edbe3]"
              />

              <p className="mt-3 text-[7px] font-bold uppercase tracking-[1px] text-white/40">
                Weekdays
              </p>

              <p className="mt-1 text-[11px] font-black text-white">
                8 AM - 8 PM
              </p>
            </div>

            <div
              className="
                rounded-[18px]
                border
                border-white/10
                bg-white/[0.05]
                p-4
              "
            >
              <CalendarDays
                size={17}
                className="text-[#f3a7bd]"
              />

              <p className="mt-3 text-[7px] font-bold uppercase tracking-[1px] text-white/40">
                Weekend
              </p>

              <p className="mt-1 text-[11px] font-black text-white">
                Extended Hours
              </p>
            </div>
          </div>
        </div>

        {/* ======================================
            RIGHT OPENING HOURS CARD
        ====================================== */}

        <div className="relative">
          {/* BLUE BACKGROUND */}

          <div
            className="
              absolute
              -right-3
              -top-3
              h-full
              w-full
              rounded-[32px]
              border
              border-[#351714]
              bg-[#8edbe3]
            "
          />

          {/* MAIN CARD */}

          <div
            className="
              relative
              z-10
              overflow-hidden
              rounded-[32px]
              border
              border-[#351714]
              bg-[#fff9f1]
              p-5
              shadow-[7px_7px_0_#f26d3d]
              sm:p-7
              md:p-8
            "
          >
            {/* CARD HEADER */}

            <div
              className="
                flex
                flex-col
                gap-4
                border-b
                border-[#351714]/10
                pb-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#351714]
                    bg-[#f3a7bd]
                    text-[#351714]
                    shadow-[2px_2px_0_#351714]
                  "
                >
                  <Clock3 size={18} />
                </div>

                <div>
                  <p className="text-[7px] font-bold uppercase tracking-[1.5px] text-[#f26d3d]">
                    Weekly Schedule
                  </p>

                  <h3 className="mt-1 text-[20px] font-black uppercase text-[#351714] md:text-[23px]">
                    Bakery Hours
                  </h3>
                </div>
              </div>

              {/* OPEN BADGE */}

              <div
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#351714]
                  bg-[#b8d69b]
                  px-4
                  py-2
                "
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#351714]" />

                <span className="text-[7px] font-black uppercase tracking-[1px] text-[#351714]">
                  Open Daily
                </span>
              </div>
            </div>

            {/* ==================================
                HOURS LIST
            ================================== */}

            <div className="mt-3">
              {hours.map((item, index) => (
                <div
                  key={item.id}
                  className={`
                    flex
                    items-center
                    justify-between
                    gap-4
                    py-4

                    ${
                      index !== hours.length - 1
                        ? "border-b border-dashed border-[#351714]/15"
                        : ""
                    }
                  `}
                >
                  {/* DAY */}

                  <div className="flex items-center gap-3">
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-[#351714]/5
                        text-[7px]
                        font-black
                        text-[#351714]/40
                      "
                    >
                      0{item.id}
                    </span>

                    <p
                      className="
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.4px]
                        text-[#351714]
                        md:text-[11px]
                      "
                    >
                      {item.day}
                    </p>
                  </div>

                  {/* DOT LINE */}

                  <div className="hidden flex-1 border-b border-dotted border-[#351714]/15 sm:block" />

                  {/* TIME */}

                  <p
                    className={`
                      whitespace-nowrap
                      text-[9px]
                      font-bold
                      md:text-[10px]

                      ${
                        item.day === "Sunday"
                          ? "text-[#f26d3d]"
                          : "text-[#725c56]"
                      }
                    `}
                  >
                    {item.time}
                  </p>
                </div>
              ))}
            </div>

            {/* ==================================
                BOTTOM NOTE
            ================================== */}

            <div
              className="
                mt-5
                flex
                items-start
                gap-3
                rounded-[16px]
                border
                border-[#351714]/10
                bg-[#f5efe7]
                p-4
              "
            >
              <Sparkles
                size={15}
                className="mt-0.5 shrink-0 text-[#f26d3d]"
              />

              <p className="text-[8px] font-medium leading-4 text-[#725c56]">
                Opening hours may vary on public holidays and
                special occasions. Contact us before visiting
                if you're planning a special order pickup.
              </p>
            </div>
          </div>

          {/* FLOATING BADGE */}

          <div
            className="
              absolute
              -bottom-7
              -left-5
              z-20
              hidden
              h-[110px]
              w-[110px]
              rotate-[-8deg]
              flex-col
              items-center
              justify-center
              rounded-full
              border
              border-[#351714]
              bg-[#f3a7bd]
              text-center
              shadow-[4px_4px_0_#351714]
              sm:flex
            "
          >
            <Sunrise
              size={18}
              className="mb-1 text-[#351714]"
            />

            <p className="text-[7px] font-black uppercase tracking-[1px] text-[#351714]">
              Fresh
            </p>

            <p className="text-[13px] font-black uppercase text-[#351714]">
              Every Day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpeningHours;