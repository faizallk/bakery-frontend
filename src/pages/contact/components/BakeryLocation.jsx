import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  Clock3,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

function BakeryLocation() {
  return (
    <section
      id="bakery-location"
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

      <div className="pointer-events-none absolute -left-40 top-10 h-[350px] w-[350px] rounded-full bg-[#ffdf38]/15 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#8edbe3]/20 blur-[110px]" />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1400px]
          grid-cols-1
          items-center
          gap-14
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-20
        "
      >
        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div>
          {/* SMALL LABEL */}

          <div className="flex items-center gap-2">
            <Sparkles
              size={14}
              className="text-[#f26d3d]"
            />

            <p className="text-[9px] font-extrabold uppercase tracking-[2px] text-[#f26d3d]">
              Find Our Bakery
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
            Come Visit
            <br />
            Our Little
            <br />

            <span className="text-[#f26d3d]">
              Bakery.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              max-w-[500px]
              text-[12px]
              font-medium
              leading-7
              text-[#725c56]
              md:text-[13px]
            "
          >
            Stop by for freshly baked breads, pastries,
            cakes and something sweet. We'd love to welcome
            you and help you find your new favourite bake.
          </p>

          {/* =========================================
              ADDRESS CARD
          ========================================= */}

          <div
            className="
              mt-8
              max-w-[500px]
              rounded-[24px]
              border
              border-[#351714]
              bg-[#ffdf38]
              p-5
              shadow-[5px_5px_0_#351714]
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
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
                <MapPin size={19} />
              </div>

              <div>
                <p className="text-[7px] font-extrabold uppercase tracking-[1.5px] text-[#351714]/50">
                  Our Address
                </p>

                <h3 className="mt-1 text-[15px] font-black uppercase text-[#351714]">
                  Sweet Crumbs Bakery
                </h3>

                <p className="mt-2 text-[10px] font-medium leading-5 text-[#351714]/65">
                  123 Artisan Street
                  <br />
                  Your City, India
                </p>
              </div>
            </div>
          </div>

          {/* =========================================
              CONTACT DETAILS
          ========================================= */}

          <div className="mt-5 max-w-[500px] space-y-3">
            {/* PHONE */}

            <a
              href="tel:+919876543210"
              className="
                group
                flex
                items-center
                justify-between
                rounded-[18px]
                border
                border-[#351714]/15
                bg-white
                p-4
                transition-all
                duration-300
                hover:border-[#351714]
                hover:shadow-[3px_3px_0_#351714]
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#8edbe3]
                    text-[#351714]
                  "
                >
                  <Phone size={15} />
                </div>

                <div>
                  <p className="text-[7px] font-bold uppercase tracking-[1px] text-[#725c56]">
                    Call Us
                  </p>

                  <p className="mt-1 text-[10px] font-black text-[#351714]">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={15}
                className="
                  text-[#351714]/40
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-[#351714]
                "
              />
            </a>

            {/* EMAIL */}

            <a
              href="mailto:hello@lartisan.com"
              className="
                group
                flex
                items-center
                justify-between
                rounded-[18px]
                border
                border-[#351714]/15
                bg-white
                p-4
                transition-all
                duration-300
                hover:border-[#351714]
                hover:shadow-[3px_3px_0_#351714]
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f3a7bd]
                    text-[#351714]
                  "
                >
                  <Mail size={15} />
                </div>

                <div>
                  <p className="text-[7px] font-bold uppercase tracking-[1px] text-[#725c56]">
                    Email Us
                  </p>

                  <p className="mt-1 text-[10px] font-black text-[#351714]">
                    hello@lartisan.com
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={15}
                className="
                  text-[#351714]/40
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-[#351714]
                "
              />
            </a>

            {/* HOURS */}

            <div
              className="
                flex
                items-center
                gap-3
                rounded-[18px]
                border
                border-[#351714]/15
                bg-white
                p-4
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f49a65]
                  text-[#351714]
                "
              >
                <Clock3 size={15} />
              </div>

              <div>
                <p className="text-[7px] font-bold uppercase tracking-[1px] text-[#725c56]">
                  Opening Hours
                </p>

                <p className="mt-1 text-[10px] font-black text-[#351714]">
                  Mon - Sat • 8 AM - 8 PM
                </p>
              </div>
            </div>
          </div>

          {/* GET DIRECTIONS */}

          <a
            href="#map"
            className="
              group
              mt-7
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
            <Navigation
              size={14}
              strokeWidth={2.5}
            />

            Get Directions

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* =========================================
            RIGHT MAP
        ========================================= */}

        <div
          id="map"
          className="
            relative
            mx-auto
            w-full
            max-w-[750px]
          "
        >
          {/* BACKGROUND SHAPE */}

          <div
            className="
              absolute
              -right-4
              -top-4
              h-full
              w-full
              rounded-[35px]
              border
              border-[#351714]
              bg-[#8edbe3]
            "
          />

          {/* MAP CARD */}

          <div
            className="
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
                h-[470px]
                overflow-hidden
                rounded-[27px]
                bg-[#e9e4dd]
                md:h-[580px]
              "
            >
              {/* GOOGLE MAP */}

              <iframe
                title="Sweet Crumbs Bakery Location"
                src="https://www.google.com/maps?q=Patna,Bihar,India&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* MAP TOP LABEL */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-4
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#351714]
                  bg-[#fff9f1]
                  px-4
                  py-2.5
                  shadow-[3px_3px_0_#351714]
                "
              >
                <MapPin
                  size={13}
                  className="text-[#f26d3d]"
                />

                <span className="text-[8px] font-black uppercase tracking-[1px] text-[#351714]">
                  Find Us Here
                </span>
              </div>
            </div>
          </div>

          {/* FLOATING CARD */}

          <div
            className="
              absolute
              -bottom-7
              -left-4
              z-20
              hidden
              max-w-[230px]
              rotate-[-3deg]
              rounded-[20px]
              border
              border-[#351714]
              bg-[#f3a7bd]
              p-4
              shadow-[4px_4px_0_#351714]
              sm:block
            "
          >
            <div className="flex items-center gap-3">
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
                  bg-[#fff9f1]
                "
              >
                <Navigation
                  size={15}
                  className="text-[#351714]"
                />
              </div>

              <div>
                <p className="text-[7px] font-bold uppercase tracking-[1px] text-[#351714]/55">
                  Come Say Hello
                </p>

                <p className="mt-1 text-[11px] font-black uppercase leading-tight text-[#351714]">
                  We'd Love To See You!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BakeryLocation;