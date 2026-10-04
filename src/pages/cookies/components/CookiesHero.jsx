import React from "react";
import {
  Cookie,
  ShieldCheck,
  Sparkles,
  ArrowDown,
} from "lucide-react";

function CookiesHero() {
  const scrollToPolicy = () => {
    document
      .getElementById("cookies-content")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#ffdf38]
        px-5
        py-20
        md:px-8
        md:py-24
        lg:py-28
      "
    >
      {/* ==============================
          BACKGROUND DECORATIONS
      ============================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#f3a7bd]/40
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-32
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#8edbe3]/50
          blur-[110px]
        "
      />

      {/* SMALL DECORATIONS */}

      <span
        className="
          absolute
          left-[8%]
          top-[25%]
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
          right-[10%]
          top-[20%]
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
          bottom-[20%]
          right-[20%]
          hidden
          h-5
          w-5
          rounded-full
          bg-[#f3a7bd]
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
          text-[85px]
          font-black
          uppercase
          leading-none
          tracking-[-4px]
          text-[#351714]/[0.04]
          md:text-[140px]
          lg:text-[180px]
        "
      >
        Cookies
      </p>

      {/* ==============================
          MAIN CONTENT
      ============================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[480px]
          max-w-[1100px]
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* COOKIE ICON */}

        <div className="relative">
          <div
            className="
              flex
              h-[90px]
              w-[90px]
              rotate-[-6deg]
              items-center
              justify-center
              rounded-[28px]
              border-2
              border-[#351714]
              bg-[#fff9f1]
              text-[#351714]
              shadow-[6px_6px_0_#351714]
              transition-transform
              duration-300
              hover:rotate-0
              md:h-[105px]
              md:w-[105px]
            "
          >
            <Cookie
              size={42}
              strokeWidth={1.8}
            />
          </div>

          {/* SMALL SPARKLE */}

          <div
            className="
              absolute
              -right-5
              -top-4
              flex
              h-9
              w-9
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
            <Sparkles size={14} />
          </div>
        </div>

        {/* BADGE */}

        <div
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#351714]
            bg-[#8edbe3]
            px-4
            py-2
            shadow-[3px_3px_0_#351714]
          "
        >
          <ShieldCheck
            size={13}
            strokeWidth={2.5}
          />

          <span
            className="
              text-[8px]
              font-extrabold
              uppercase
              tracking-[1.5px]
              text-[#351714]
            "
          >
            Your Privacy Matters
          </span>
        </div>

        {/* HEADING */}

        <h1
          className="
            mt-6
            text-[47px]
            font-black
            uppercase
            leading-[0.9]
            tracking-[-2px]
            text-[#351714]
            sm:text-[58px]
            md:text-[70px]
            lg:text-[78px]
          "
        >
          Cookies
          <br />

          <span className="text-[#f26d3d]">
            Policy.
          </span>
        </h1>

        {/* DESCRIPTION */}

        <p
          className="
            mx-auto
            mt-6
            max-w-[620px]
            text-[11px]
            font-medium
            leading-6
            text-[#4f3935]
            md:text-[12px]
            md:leading-7
          "
        >
          We use cookies and similar technologies to help our
          website work properly, understand how visitors use
          our website and improve your browsing experience.
        </p>

        {/* UPDATED */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          "
        >
          <div
            className="
              rounded-full
              border
              border-[#351714]/20
              bg-white/30
              px-4
              py-2
            "
          >
            <p
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[1px]
                text-[#351714]/60
              "
            >
              Last Updated: October 2026
            </p>
          </div>

          <div
            className="
              rounded-full
              border
              border-[#351714]/20
              bg-white/30
              px-4
              py-2
            "
          >
            <p
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[1px]
                text-[#351714]/60
              "
            >
              Sweet Crumbs Bakery
            </p>
          </div>
        </div>

        {/* BUTTON */}

        <button
          type="button"
          onClick={scrollToPolicy}
          className="
            group
            mt-8
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-[#351714]
            bg-[#351714]
            px-6
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
          "
        >
          Read Cookie Policy

          <ArrowDown
            size={13}
            className="
              transition-transform
              duration-300
              group-hover:translate-y-1
            "
          />
        </button>
      </div>

      {/* ==============================
          BOTTOM STRIP
      ============================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          border-y
          border-[#351714]
          bg-[#f3a7bd]
          py-3
        "
      >
        <div
          className="
            flex
            min-w-max
            items-center
            justify-center
            gap-7
            text-[7px]
            font-extrabold
            uppercase
            tracking-[1.3px]
            text-[#351714]
          "
        >
          <span>Privacy First</span>
          <span>✦</span>

          <span>Essential Cookies</span>
          <span>✦</span>

          <span>Better Experience</span>
          <span>✦</span>

          <span>Your Choices</span>
        </div>
      </div>
    </section>
  );
}

export default CookiesHero;