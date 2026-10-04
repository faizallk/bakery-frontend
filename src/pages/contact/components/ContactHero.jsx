import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Sparkles,
  Phone,
} from "lucide-react";

import bakeryImage from "../../../assets/bakery.jpg";

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#8edbe3] px-5 py-16 md:px-8 md:py-20 lg:py-24">
      {/* =========================================
          BACKGROUND DECORATIONS
      ========================================= */}

      <div className="pointer-events-none absolute -left-32 -top-32 h-[350px] w-[350px] rounded-full bg-[#ffdf38]/30 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-24 h-[400px] w-[400px] rounded-full bg-[#f3a7bd]/40 blur-[120px]" />

      {/* DOTS */}

      <span className="absolute left-[5%] top-[25%] h-3 w-3 rounded-full bg-[#351714]" />

      <span className="absolute left-[44%] top-[12%] h-4 w-4 rounded-full bg-[#f26d3d]" />

      <span className="absolute bottom-[18%] left-[42%] h-3 w-3 rounded-full bg-[#ffdf38]" />

      {/* BIG BACKGROUND TEXT */}

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
          text-[#351714]/[0.04]
          md:text-[140px]
          lg:text-[190px]
        "
      >
        Contact
      </p>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[600px]
          max-w-[1400px]
          grid-cols-1
          items-center
          gap-14
          lg:min-h-[650px]
          lg:grid-cols-2
          lg:gap-20
        "
      >
        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <div>
          {/* SMALL BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#351714]
              bg-[#ffdf38]
              px-4
              py-2
              shadow-[3px_3px_0_#351714]
            "
          >
            <MessageCircle
              size={13}
              strokeWidth={2.5}
              className="text-[#351714]"
            />

            <span className="text-[8px] font-extrabold uppercase tracking-[1.5px] text-[#351714]">
              Let's Talk
            </span>
          </div>

          {/* HEADING */}

          <h1
            className="
              mt-6
              max-w-[700px]
              text-[48px]
              font-black
              uppercase
              leading-[0.9]
              tracking-[-2.5px]
              text-[#351714]
              sm:text-[58px]
              md:text-[68px]
              lg:text-[76px]
              xl:text-[82px]
            "
          >
            We'd Love
            <br />
            To Hear
            <br />

            <span className="text-[#fff9f1]">
              From You.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-7
              max-w-[530px]
              text-[12px]
              font-medium
              leading-7
              text-[#4f3935]
              md:text-[13px]
            "
          >
            Have a question, planning a celebration or looking
            for something special? Send us a message or visit
            our bakery. We'd be happy to help.
          </p>

          {/* =====================================
              QUICK DETAILS
          ===================================== */}

          <div className="mt-7 flex flex-wrap gap-3">
            {/* LOCATION */}

            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-[#351714]/30
                bg-white/30
                px-4
                py-2
              "
            >
              <MapPin
                size={13}
                className="text-[#351714]"
              />

              <span className="text-[8px] font-bold uppercase tracking-[0.7px] text-[#351714]">
                Visit Our Bakery
              </span>
            </div>

            {/* PHONE */}

            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-[#351714]/30
                bg-white/30
                px-4
                py-2
              "
            >
              <Phone
                size={13}
                className="text-[#351714]"
              />

              <span className="text-[8px] font-bold uppercase tracking-[0.7px] text-[#351714]">
                We're Here To Help
              </span>
            </div>
          </div>

          {/* =====================================
              BUTTONS
          ===================================== */}

          <div className="mt-9 flex flex-wrap items-center gap-4">
            {/* MESSAGE BUTTON */}

            <a
              href="#contact-form"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#351714]
                bg-[#351714]
                px-7
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
              Send A Message

              <ArrowRight
                size={14}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* LOCATION BUTTON */}

            <a
              href="#bakery-location"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#351714]
                bg-[#fff9f1]
                px-7
                py-3.5
                text-[9px]
                font-extrabold
                uppercase
                tracking-[1px]
                text-[#351714]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#ffdf38]
                hover:shadow-[4px_4px_0_#351714]
              "
            >
              <MapPin size={13} />

              Visit Bakery
            </a>
          </div>
        </div>

        {/* =====================================
            RIGHT IMAGE
        ===================================== */}

        <div className="relative mx-auto w-full max-w-[580px]">
          {/* PINK BACK SHAPE */}

          <div
            className="
              absolute
              -right-5
              -top-5
              h-[90%]
              w-[90%]
              rotate-3
              rounded-[45px]
              border-2
              border-[#351714]
              bg-[#f3a7bd]
            "
          />

          {/* IMAGE CARD */}

          <div
            className="
              group
              relative
              z-10
              -rotate-2
              overflow-hidden
              rounded-[38px]
              border-2
              border-[#351714]
              bg-[#fff9f1]
              p-3
              shadow-[9px_9px_0_#351714]
              transition-all
              duration-500
              hover:rotate-0
            "
          >
            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src={bakeryImage}
                alt="Visit our bakery"
                className="
                  h-[420px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  sm:h-[500px]
                  lg:h-[550px]
                "
              />

              {/* IMAGE OVERLAY */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#351714]/60 via-transparent to-transparent" />

              {/* IMAGE TEXT */}

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[8px] font-bold uppercase tracking-[1.5px] text-white/70">
                  Come Say Hello
                </p>

                <h3
                  className="
                    mt-1
                    max-w-[320px]
                    text-[21px]
                    font-black
                    uppercase
                    leading-[1.05]
                    text-white
                    md:text-[25px]
                  "
                >
                  Fresh Bakes &
                  <br />
                  Warm Welcomes.
                </h3>
              </div>
            </div>
          </div>

          {/* =================================
              LOCATION BADGE
          ================================= */}

          <div
            className="
              absolute
              -bottom-7
              -left-3
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
              bg-[#ffdf38]
              text-center
              shadow-[4px_4px_0_#351714]
              sm:h-[140px]
              sm:w-[140px]
            "
          >
            <MapPin
              size={20}
              className="mb-2 text-[#351714]"
            />

            <p className="text-[7px] font-extrabold uppercase tracking-[1px] text-[#351714]">
              Come
            </p>

            <p className="text-[15px] font-black uppercase text-[#351714]">
              Visit Us
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
              flex
              items-center
              gap-2
              rotate-[6deg]
              rounded-full
              border
              border-[#351714]
              bg-[#fff9f1]
              px-4
              py-2.5
              shadow-[3px_3px_0_#351714]
            "
          >
            <Sparkles
              size={13}
              className="text-[#f26d3d]"
            />

            <span className="text-[8px] font-black uppercase tracking-[1px] text-[#351714]">
              We're Open
            </span>
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM STRIP
      ========================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-20
          w-full
          overflow-hidden
          border-y
          border-[#351714]
          bg-[#ffdf38]
          py-3
        "
      >
        <div
          className="
            flex
            min-w-max
            items-center
            justify-center
            gap-8
            text-[8px]
            font-extrabold
            uppercase
            tracking-[1.5px]
            text-[#351714]
          "
        >
          <span>Questions?</span>
          <span>✦</span>

          <span>Custom Cakes</span>
          <span>✦</span>

          <span>Special Orders</span>
          <span>✦</span>

          <span>Visit Our Bakery</span>
          <span>✦</span>

          <span>Let's Talk</span>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;