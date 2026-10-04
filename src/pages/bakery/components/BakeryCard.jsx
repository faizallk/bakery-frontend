import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Heart,
  Star,
} from "lucide-react";

function BakeryCard({
  id,
  image,
  name,
  category,
  description,
  price,
  oldPrice,
  rating = 4.8,
  badge = "Fresh",
  bg = "#ffdf38",
}) {
  return (
    <div
      style={{ backgroundColor: bg }}
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
              md:h-[320px]
            "
          />

          {/* IMAGE GRADIENT */}

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
                tracking-[0.6px]

                text-[#351714]

                shadow-[2px_2px_0_#351714]
              "
            >
              {badge}
            </span>
          )}

          {/* =================================
              HEART BUTTON
          ================================= */}

          <button
            type="button"
            aria-label={`Add ${name} to wishlist`}
            onClick={(e) => {
              e.preventDefault();
            }}
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
            <Heart
              size={16}
              strokeWidth={2}
            />
          </button>

          {/* =================================
              CATEGORY BOTTOM BADGE
          ================================= */}

          <span
            className="
              absolute
              bottom-4
              left-4

              rounded-full

              border
              border-[#351714]

              bg-[#fff9f1]

              px-3
              py-1.5

              text-[8px]
              font-extrabold
              uppercase
              tracking-[0.7px]

              text-[#351714]
            "
          >
            {category}
          </span>
        </div>
      </div>

      {/* =====================================
          PRODUCT CONTENT
      ===================================== */}

      <div
        className="
          px-5
          pb-6
          pt-1

          md:px-6
        "
      >
        {/* =================================
            CATEGORY + RATING
        ================================= */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
          "
        >
          <p
            className="
              text-[8px]
              font-extrabold
              uppercase
              tracking-[1.3px]
              text-[#351714]/55
            "
          >
            Fresh Bakery
          </p>

          {/* RATING */}

          <div
            className="
              flex
              items-center
              gap-1.5

              rounded-full

              border
              border-[#351714]/10

              bg-white/60

              px-2.5
              py-1
            "
          >
            <Star
              size={11}
              fill="currentColor"
              className="text-[#351714]"
            />

            <span
              className="
                text-[9px]
                font-extrabold
                text-[#351714]
              "
            >
              {rating}
            </span>
          </div>
        </div>

        {/* =================================
            PRODUCT NAME
        ================================= */}

        <h3
          className="
            mt-3
            text-[20px]
            font-black
            uppercase
            leading-[1.1]
            text-[#351714]

            md:text-[22px]
          "
        >
          {name}
        </h3>

        {/* =================================
            DESCRIPTION
        ================================= */}

        {description && (
          <p
            className="
              mt-3
              line-clamp-2
              text-[10px]
              font-medium
              leading-5
              text-[#351714]/60

              md:text-[11px]
            "
          >
            {description}
          </p>
        )}

        {/* =================================
            SMALL INFO TAGS
        ================================= */}

        <div
          className="
            mt-4
            flex
            flex-wrap
            gap-2
          "
        >
          <span
            className="
              rounded-full
              border
              border-[#351714]/20
              bg-white/40
              px-3
              py-1.5

              text-[7px]
              font-bold
              uppercase
              tracking-[0.7px]

              text-[#351714]
            "
          >
            Fresh Today
          </span>

          <span
            className="
              rounded-full
              border
              border-[#351714]/20
              bg-white/40
              px-3
              py-1.5

              text-[7px]
              font-bold
              uppercase
              tracking-[0.7px]

              text-[#351714]
            "
          >
            Handmade
          </span>
        </div>

        {/* =================================
            DIVIDER
        ================================= */}

        <div
          className="
            my-5
            h-px
            w-full
            bg-[#351714]/15
          "
        />

        {/* =================================
            PRICE + VIEW
        ================================= */}

        <div
          className="
            flex
            items-end
            justify-between
            gap-4
          "
        >
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
              Price
            </p>

            <div
              className="
                mt-1
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  text-[22px]
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
                    text-[#351714]/40
                    line-through
                  "
                >
                  ₹{oldPrice}
                </span>
              )}
            </div>
          </div>

          {/* =================================
              VIEW BUTTON
          ================================= */}

          <Link
            to={`/bakery/${id}`}
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

export default BakeryCard;