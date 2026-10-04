import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  ArrowLeft,
  Sparkles,
  Cookie,
  CakeSlice,
} from "lucide-react";

function CartHero({ totalItems = 0 }) {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-b
        border-[#351714]
        bg-[#ffdf38]
        px-5
        py-16
        md:px-8
        md:py-20
      "
    >
      {/* ======================================
          BACKGROUND DECORATIONS
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#f3a7bd]/50
          blur-[90px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#8edbe3]/60
          blur-[100px]
        "
      />

      {/* Decorative icons */}

      <Cookie
        size={30}
        strokeWidth={1.5}
        className="
          absolute
          left-[8%]
          top-[25%]
          hidden
          rotate-[-20deg]
          text-[#351714]/20
          md:block
        "
      />

      <CakeSlice
        size={35}
        strokeWidth={1.5}
        className="
          absolute
          bottom-[20%]
          right-[10%]
          hidden
          rotate-[15deg]
          text-[#351714]/20
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
          text-[90px]
          font-black
          uppercase
          leading-none
          tracking-[-4px]
          text-[#351714]/[0.04]
          md:text-[140px]
          lg:text-[175px]
        "
      >
        Your Cart
      </p>

      {/* ======================================
          MAIN CONTENT
      ====================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* BACK BUTTON */}

        <Link
          to="/"
          className="
            group
            inline-flex
            items-center
            gap-2
            text-[8px]
            font-extrabold
            uppercase
            tracking-[1.5px]
            text-[#351714]/60
            transition-colors
            hover:text-[#351714]
          "
        >
          <ArrowLeft
            size={13}
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          Continue Shopping
        </Link>

        {/* HERO CONTENT */}

        <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">

          {/* LEFT */}

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
                Your Bakery Basket
              </p>
            </div>

            <h1
              className="
                mt-4
                text-[48px]
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
              Your Cart
              <span className="text-[#f26d3d]">.</span>
            </h1>

            <p
              className="
                mt-5
                max-w-[520px]
                text-[11px]
                font-medium
                leading-6
                text-[#351714]/60
                md:text-[12px]
              "
            >
              Almost there! Review your delicious picks,
              adjust quantities and continue when you're
              ready to place your order.
            </p>
          </div>

          {/* RIGHT CART COUNT */}

          <div
            className="
              flex
              items-center
              gap-4
              rounded-[22px]
              border
              border-[#351714]
              bg-[#fff9f1]
              px-5
              py-4
              shadow-[4px_4px_0_#351714]
            "
          >
            <div
              className="
                relative
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
              "
            >
              <ShoppingBag
                size={19}
                strokeWidth={2}
              />

              {/* COUNT */}

              {totalItems > 0 && (
                <span
                  className="
                    absolute
                    -right-2
                    -top-2
                    flex
                    h-6
                    min-w-6
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#351714]
                    bg-[#f26d3d]
                    px-1
                    text-[7px]
                    font-black
                    text-white
                  "
                >
                  {totalItems}
                </span>
              )}
            </div>

            <div>
              <p
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[1px]
                  text-[#351714]/45
                "
              >
                In Your Cart
              </p>

              <p
                className="
                  mt-1
                  text-[14px]
                  font-black
                  uppercase
                  text-[#351714]
                "
              >
                {totalItems}{" "}
                {totalItems === 1 ? "Item" : "Items"}
              </p>
            </div>
          </div>
        </div>

        {/* ======================================
            BOTTOM FEATURES
        ====================================== */}

        <div
          className="
            mt-10
            flex
            flex-wrap
            items-center
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
            <p className="text-[7px] font-bold uppercase tracking-[1px] text-[#351714]/60">
              Freshly Baked
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
            <p className="text-[7px] font-bold uppercase tracking-[1px] text-[#351714]/60">
              Made With Love
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
            <p className="text-[7px] font-bold uppercase tracking-[1px] text-[#351714]/60">
              Secure Checkout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartHero;