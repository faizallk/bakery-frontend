import React from "react";
import { Link } from "react-router-dom";
import {
  Cookie,
  ShieldCheck,
  Settings,
  MessageCircle,
  ArrowRight,
  Sparkles,
  LockKeyhole,
} from "lucide-react";

function CookiesCTA() {
  const scrollToCookies = () => {
    document
      .getElementById("cookie-types")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#8edbe3]
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
          -top-32
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#ffdf38]/50
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#f3a7bd]/60
          blur-[110px]
        "
      />

      {/* DECORATIVE CIRCLES */}

      <span
        className="
          absolute
          left-[8%]
          top-[18%]
          hidden
          h-4
          w-4
          rounded-full
          bg-[#f26d3d]
          md:block
        "
      />

      <span
        className="
          absolute
          bottom-[20%]
          left-[15%]
          hidden
          h-3
          w-3
          rounded-full
          bg-[#351714]
          md:block
        "
      />

      <span
        className="
          absolute
          right-[10%]
          top-[20%]
          hidden
          h-5
          w-5
          rounded-full
          bg-[#ffdf38]
          md:block
        "
      />

      {/* BIG BACKGROUND TEXT */}

      <p
        className="
          pointer-events-none
          absolute
          bottom-[-30px]
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          text-[80px]
          font-black
          uppercase
          leading-none
          tracking-[-4px]
          text-[#351714]/[0.035]
          md:text-[140px]
          lg:text-[175px]
        "
      >
        Privacy
      </p>

      {/* =====================================
          CONTAINER
      ===================================== */}

      <div className="relative z-10 mx-auto max-w-[1200px]">

        {/* =====================================
            MAIN CARD
        ===================================== */}

        <div className="relative">

          {/* PINK BACK LAYER */}

          <div
            className="
              absolute
              -bottom-3
              -right-3
              h-full
              w-full
              rounded-[34px]
              border
              border-[#351714]
              bg-[#f3a7bd]
            "
          />

          {/* WHITE CARD */}

          <div
            className="
              relative
              z-10
              overflow-hidden
              rounded-[34px]
              border
              border-[#351714]
              bg-[#fff9f1]
              px-6
              py-12
              shadow-[7px_7px_0_#351714]
              md:px-12
              md:py-16
              lg:px-16
            "
          >
            {/* YELLOW DECORATION */}

            <div
              className="
                pointer-events-none
                absolute
                -left-24
                -top-24
                h-[230px]
                w-[230px]
                rounded-full
                bg-[#ffdf38]
              "
            />

            {/* BLUE DECORATION */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-28
                -right-24
                h-[260px]
                w-[260px]
                rounded-full
                bg-[#8edbe3]
              "
            />

            {/* =====================================
                CONTENT
            ===================================== */}

            <div
              className="
                relative
                z-10
                mx-auto
                max-w-[800px]
                text-center
              "
            >
              {/* ICON */}

              <div
                className="
                  mx-auto
                  flex
                  h-[70px]
                  w-[70px]
                  rotate-[-4deg]
                  items-center
                  justify-center
                  rounded-[22px]
                  border
                  border-[#351714]
                  bg-[#ffdf38]
                  text-[#351714]
                  shadow-[4px_4px_0_#351714]
                  transition-transform
                  duration-300
                  hover:rotate-0
                "
              >
                <Cookie
                  size={28}
                  strokeWidth={1.8}
                />
              </div>

              {/* SMALL LABEL */}

              <div className="mt-7 flex items-center justify-center gap-2">
                <Sparkles
                  size={13}
                  className="text-[#f26d3d]"
                />

                <p
                  className="
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[2px]
                    text-[#f26d3d]
                  "
                >
                  Your Privacy Matters
                </p>
              </div>

              {/* HEADING */}

              <h2
                className="
                  mt-4
                  text-[39px]
                  font-black
                  uppercase
                  leading-[0.95]
                  tracking-[-1.5px]
                  text-[#351714]
                  sm:text-[46px]
                  md:text-[55px]
                  lg:text-[62px]
                "
              >
                Cookies Should Be
                <br />

                <span className="text-[#f26d3d]">
                  Easy To Understand.
                </span>
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-[610px]
                  text-[11px]
                  font-medium
                  leading-6
                  text-[#725c56]
                  md:text-[12px]
                  md:leading-7
                "
              >
                We believe you should understand how website
                technologies are used. You can review the
                cookie categories above and manage cookies
                through your browser or available website
                preference controls.
              </p>

              {/* =====================================
                  BUTTONS
              ===================================== */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  sm:flex-row
                "
              >
                {/* REVIEW COOKIES */}

                <button
                  type="button"
                  onClick={scrollToCookies}
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#351714]
                    bg-[#351714]
                    px-7
                    py-3.5
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[1px]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#f26d3d]
                    hover:shadow-[4px_4px_0_#351714]
                    sm:w-auto
                  "
                >
                  <Settings size={14} />

                  Review Cookie Types

                  <ArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>

                {/* CONTACT */}

                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#351714]
                    bg-[#f3a7bd]
                    px-7
                    py-3.5
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[1px]
                    text-[#351714]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#ffdf38]
                    hover:shadow-[4px_4px_0_#351714]
                    sm:w-auto
                  "
                >
                  <MessageCircle size={14} />

                  Privacy Question?
                </Link>
              </div>

              {/* =====================================
                  TRUST LINE
              ===================================== */}

              <div
                className="
                  mx-auto
                  mt-9
                  flex
                  max-w-[500px]
                  items-center
                  gap-4
                "
              >
                <div className="h-px flex-1 bg-[#351714]/15" />

                <div className="flex items-center gap-2">
                  <ShieldCheck
                    size={12}
                    className="text-[#f26d3d]"
                  />

                  <span
                    className="
                      whitespace-nowrap
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[1px]
                      text-[#725c56]
                    "
                  >
                    Privacy First
                  </span>
                </div>

                <div className="h-px flex-1 bg-[#351714]/15" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            BOTTOM CARDS
        ===================================== */}

        <div
          className="
            mt-9
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-3
          "
        >
          {/* CARD 1 */}

          <div
            className="
              flex
              items-center
              gap-4
              rounded-[18px]
              border
              border-[#351714]
              bg-[#ffdf38]
              p-4
            "
          >
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
              <ShieldCheck
                size={15}
                className="text-[#351714]"
              />
            </div>

            <div>
              <p
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[1px]
                  text-[#351714]/50
                "
              >
                Transparent
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  font-black
                  uppercase
                  text-[#351714]
                "
              >
                Cookie Information
              </p>
            </div>
          </div>

          {/* CARD 2 */}

          <div
            className="
              flex
              items-center
              gap-4
              rounded-[18px]
              border
              border-[#351714]
              bg-[#f3a7bd]
              p-4
            "
          >
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
              <Settings
                size={15}
                className="text-[#351714]"
              />
            </div>

            <div>
              <p
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[1px]
                  text-[#351714]/50
                "
              >
                Your Choice
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  font-black
                  uppercase
                  text-[#351714]
                "
              >
                Manage Preferences
              </p>
            </div>
          </div>

          {/* CARD 3 */}

          <div
            className="
              flex
              items-center
              gap-4
              rounded-[18px]
              border
              border-[#351714]
              bg-[#f49a65]
              p-4
            "
          >
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
              <LockKeyhole
                size={15}
                className="text-[#351714]"
              />
            </div>

            <div>
              <p
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[1px]
                  text-[#351714]/50
                "
              >
                Secure
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  font-black
                  uppercase
                  text-[#351714]
                "
              >
                Privacy Matters
              </p>
            </div>
          </div>
        </div>

        {/* =====================================
            LAST NOTE
        ===================================== */}

        <p
          className="
            mx-auto
            mt-7
            max-w-[700px]
            text-center
            text-[8px]
            font-medium
            leading-5
            text-[#351714]/55
          "
        >
          Questions about cookies or privacy? Contact our team
          and we'll be happy to help.
        </p>
      </div>
    </section>
  );
}

export default CookiesCTA;