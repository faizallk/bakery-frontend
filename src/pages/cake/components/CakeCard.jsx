import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Heart,
  Star,
} from "lucide-react";

function CakeCard({
  id,
  image,
  name,
  category,
  price,
  oldPrice,
  weight = "500g",
  eggless = false,
  rating = 4.8,
  badge,
  bg = "#f3a7bd",
}) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[26px]
        border
        border-[#351714]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[6px_6px_0_#351714]
      "
      style={{ backgroundColor: bg }}
    >
      {/* =====================================
          IMAGE AREA
      ===================================== */}

      <div className="relative p-3.5">
        <div
          className="
            relative
            overflow-hidden
            rounded-[20px]
            bg-[#fff9f1]
          "
        >
          <img
            src={image}
            alt={name}
            className="
              h-[280px]
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
              sm:h-[300px]
              lg:h-[320px]
            "
          />

          {/* IMAGE OVERLAY */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#351714]/20
              via-transparent
              to-transparent
            "
          />

          {/* =================================
              BADGE
          ================================= */}

          {badge && (
            <span
              className="
                absolute
                left-4
                top-4
                rounded-full
                border
                border-[#351714]
                bg-[#ffdf38]
                px-3.5
                py-1.5
                text-[8px]
                font-extrabold
                uppercase
                tracking-[0.7px]
                text-[#351714]
                shadow-[2px_2px_0_#351714]
              "
            >
              {badge}
            </span>
          )}

          {/* =================================
              WISHLIST
          ================================= */}

          <button
            type="button"
            aria-label={`Add ${name} to wishlist`}
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
              bg-white
              text-[#351714]
              transition-all
              duration-300
              hover:scale-110
              hover:bg-[#f3a7bd]
            "
          >
            <Heart size={16} />
          </button>

          {/* =================================
              EGGLESS BADGE
          ================================= */}

          {eggless && (
            <span
              className="
                absolute
                bottom-4
                left-4
                rounded-full
                border
                border-[#351714]
                bg-[#b8d69b]
                px-3
                py-1.5
                text-[8px]
                font-extrabold
                uppercase
                tracking-[0.6px]
                text-[#351714]
              "
            >
              Eggless
            </span>
          )}
        </div>
      </div>

      {/* =====================================
          CONTENT
      ===================================== */}

      <div className="px-5 pb-6 pt-1 md:px-6">
        {/* CATEGORY + RATING */}

        <div className="flex items-center justify-between gap-3">
          <p
            className="
              text-[8px]
              font-extrabold
              uppercase
              tracking-[1.3px]
              text-[#351714]/55
            "
          >
            {category}
          </p>

          <div
            className="
              flex
              items-center
              gap-1
              rounded-full
              bg-white/60
              px-2
              py-1
            "
          >
            <Star
              size={11}
              fill="currentColor"
              className="text-[#351714]"
            />

            <span className="text-[9px] font-extrabold text-[#351714]">
              {rating}
            </span>
          </div>
        </div>

        {/* CAKE NAME */}

        <h3
          className="
            mt-3
            min-h-[46px]
            text-[19px]
            font-black
            uppercase
            leading-[1.15]
            text-[#351714]
            md:text-[21px]
          "
        >
          {name}
        </h3>

        {/* WEIGHT */}

        <div className="mt-3 flex items-center gap-2">
          <span
            className="
              rounded-full
              border
              border-[#351714]/30
              bg-white/40
              px-3
              py-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.5px]
              text-[#351714]
            "
          >
            {weight}
          </span>

          <span
            className="
              rounded-full
              border
              border-[#351714]/30
              bg-white/40
              px-3
              py-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.5px]
              text-[#351714]
            "
          >
            {eggless
              ? "Eggless"
              : "Egg / Eggless"}
          </span>
        </div>

        {/* DIVIDER */}

        <div className="my-5 h-px bg-[#351714]/15" />

        {/* =====================================
            PRICE + BUTTON
        ===================================== */}

        <div className="flex items-end justify-between gap-4">
          {/* PRICE */}

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
              Starting From
            </p>

            <div className="mt-1 flex items-center gap-2">
              <span
                className="
                  text-[21px]
                  font-black
                  text-[#351714]
                "
              >
                ₹{price}
              </span>

              {oldPrice && (
                <span
                  className="
                    text-[11px]
                    font-semibold
                    text-[#351714]/45
                    line-through
                  "
                >
                  ₹{oldPrice}
                </span>
              )}
            </div>
          </div>

          {/* VIEW BUTTON */}

          <Link
            to={`/cakes/${id}`}
            aria-label={`View ${name}`}
            className="
              flex
              h-11
              w-11
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
              size={17}
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CakeCard;