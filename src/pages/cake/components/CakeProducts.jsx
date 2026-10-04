import React, { useMemo, useState } from "react";
import { CakeSlice, Search } from "lucide-react";

import CakeCard from "./CakeCard";

// Existing images
import cakeImage from "../../../assets/cake.jpg";
import bakeryImage from "../../../assets/bakery.jpg";
import croissantImage from "../../../assets/croissant.jpg";

function CakeProducts() {
  // =====================================================
  // ACTIVE CATEGORY
  // =====================================================

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  // =====================================================
  // CATEGORIES
  // =====================================================

  const categories = [
    "All",
    "Chocolate",
    "Birthday",
    "Fruit",
    "Wedding",
    "Designer",
    "Eggless",
  ];

  // =====================================================
  // PRODUCTS
  // =====================================================

  const cakes = [
    {
      id: 1,
      name: "Chocolate Truffle Cake",
      category: "Chocolate",
      price: 599,
      oldPrice: 699,
      image: cakeImage,
      weight: "500g",
      eggless: true,
      rating: 4.9,
      badge: "Bestseller",
      bg: "#caa8e8",
    },

    {
      id: 2,
      name: "Birthday Celebration Cake",
      category: "Birthday",
      price: 649,
      oldPrice: 749,
      image: bakeryImage,
      weight: "500g",
      eggless: false,
      rating: 4.8,
      badge: "Popular",
      bg: "#f3a7bd",
    },

    {
      id: 3,
      name: "Fresh Fruit Cream Cake",
      category: "Fruit",
      price: 699,
      oldPrice: 799,
      image: cakeImage,
      weight: "500g",
      eggless: true,
      rating: 4.7,
      badge: "Fresh",
      bg: "#8edbe3",
    },

    {
      id: 4,
      name: "Classic Wedding Cake",
      category: "Wedding",
      price: 1299,
      oldPrice: 1499,
      image: bakeryImage,
      weight: "1kg",
      eggless: false,
      rating: 4.9,
      badge: "Premium",
      bg: "#f4c6a6",
    },

    {
      id: 5,
      name: "Chocolate Birthday Cake",
      category: "Birthday",
      price: 749,
      oldPrice: 849,
      image: cakeImage,
      weight: "1kg",
      eggless: true,
      rating: 4.9,
      badge: "Bestseller",
      bg: "#ffdf38",
    },

    {
      id: 6,
      name: "Designer Celebration Cake",
      category: "Designer",
      price: 899,
      oldPrice: 999,
      image: croissantImage,
      weight: "1kg",
      eggless: false,
      rating: 4.8,
      badge: "Special",
      bg: "#f49a65",
    },

    {
      id: 7,
      name: "Eggless Chocolate Cake",
      category: "Eggless",
      price: 649,
      oldPrice: 749,
      image: cakeImage,
      weight: "500g",
      eggless: true,
      rating: 4.8,
      badge: "100% Eggless",
      bg: "#b8d69b",
    },

    {
      id: 8,
      name: "Berry Fruit Cake",
      category: "Fruit",
      price: 749,
      oldPrice: 849,
      image: bakeryImage,
      weight: "1kg",
      eggless: true,
      rating: 4.7,
      badge: "Fresh",
      bg: "#8edbe3",
    },

    {
      id: 9,
      name: "Luxury Wedding Cake",
      category: "Wedding",
      price: 1599,
      oldPrice: 1799,
      image: cakeImage,
      weight: "2kg",
      eggless: true,
      rating: 5.0,
      badge: "Premium",
      bg: "#e7b4d3",
    },
  ];

  // =====================================================
  // FILTER PRODUCTS
  // =====================================================

  const filteredCakes = useMemo(() => {
    return cakes.filter((cake) => {
      // CATEGORY MATCH
      const categoryMatch =
        activeCategory === "All" ||
        cake.category === activeCategory;

      // SEARCH MATCH
      const searchMatch = cake.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  // =====================================================
  // CATEGORY COUNT
  // =====================================================

  const getCategoryCount = (category) => {
    if (category === "All") {
      return cakes.length;
    }

    return cakes.filter(
      (cake) => cake.category === category
    ).length;
  };

  return (
    <section
      id="cakes"
      className="
        relative
        overflow-hidden
        bg-[#fff9f1]
        px-5
        py-20
        md:px-8
        md:py-24
      "
    >
      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-[25%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#ffdf38]/15
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-[20%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#f3a7bd]/20
          blur-[100px]
        "
      />

      {/* =================================================
          CONTAINER
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

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
          {/* LEFT */}

          <div>
            <div className="mb-3 flex items-center gap-2">
              <CakeSlice
                size={15}
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
                Fresh From Our Bakery
              </p>
            </div>

            <h2
              className="
                text-[40px]
                font-black
                uppercase
                leading-[0.95]
                tracking-[-1.5px]
                text-[#351714]

                sm:text-[46px]
                md:text-[54px]
              "
            >
              Find Your
              <br />

              Perfect{" "}

              <span className="text-[#f26d3d]">
                Cake.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-[500px]
                text-[12px]
                font-medium
                leading-6
                text-[#725c56]

                md:text-[13px]
                md:leading-7
              "
            >
              Explore our collection of freshly
              prepared cakes made for birthdays,
              weddings, celebrations and everyday
              sweet moments.
            </p>
          </div>

          {/* ===============================================
              SEARCH
          =============================================== */}

          <div className="w-full lg:max-w-[350px]">
            <p
              className="
                mb-2
                text-[8px]
                font-bold
                uppercase
                tracking-[1.5px]
                text-[#351714]/50
              "
            >
              Looking For Something?
            </p>

            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[#351714]
                bg-white
                px-5
                py-3.5
                shadow-[3px_3px_0_#351714]
              "
            >
              <Search
                size={16}
                className="shrink-0 text-[#351714]"
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search cakes..."
                className="
                  w-full
                  bg-transparent
                  text-[11px]
                  font-medium
                  text-[#351714]
                  outline-none
                  placeholder:text-[#351714]/40
                "
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    text-[#f26d3d]
                  "
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* =================================================
            CATEGORY FILTER
        ================================================= */}

        <div
          className="
            mt-10
            flex
            flex-wrap
            gap-2.5
            border-y
            border-dashed
            border-[#351714]/20
            py-6
          "
        >
          {categories.map((category) => {
            const active =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-[#351714]

                  px-4
                  py-2.5

                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.5px]

                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-[#351714] text-white shadow-[3px_3px_0_#f26d3d]"
                      : "bg-white text-[#351714] hover:-translate-y-0.5 hover:bg-[#ffdf38] hover:shadow-[2px_2px_0_#351714]"
                  }
                `}
              >
                {category}

                {/* COUNT */}

                <span
                  className={`
                    flex
                    h-5
                    min-w-5
                    items-center
                    justify-center
                    rounded-full
                    px-1.5
                    text-[8px]

                    ${
                      active
                        ? "bg-[#ffdf38] text-[#351714]"
                        : "bg-[#351714] text-white"
                    }
                  `}
                >
                  {getCategoryCount(category)}
                </span>
              </button>
            );
          })}
        </div>

        {/* =================================================
            RESULT INFO
        ================================================= */}

        <div
          className="
            mb-7
            mt-8
            flex
            flex-col
            gap-3

            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[1.5px]
                text-[#f26d3d]
              "
            >
              Showing Collection
            </p>

            <h3
              className="
                mt-1
                text-[21px]
                font-black
                uppercase
                text-[#351714]
              "
            >
              {activeCategory === "All"
                ? "All Cakes"
                : `${activeCategory} Cakes`}
            </h3>
          </div>

          <div
            className="
              w-fit
              rounded-full
              border
              border-[#351714]
              bg-[#ffdf38]
              px-4
              py-2
              text-[9px]
              font-black
              uppercase
              text-[#351714]
            "
          >
            {filteredCakes.length}{" "}
            {filteredCakes.length === 1
              ? "Cake"
              : "Cakes"}
          </div>
        </div>

        {/* =================================================
            CAKE GRID
        ================================================= */}

        {filteredCakes.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-6

              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredCakes.map((cake) => (
              <CakeCard
                key={cake.id}
                id={cake.id}
                image={cake.image}
                name={cake.name}
                category={cake.category}
                price={cake.price}
                oldPrice={cake.oldPrice}
                weight={cake.weight}
                eggless={cake.eggless}
                rating={cake.rating}
                badge={cake.badge}
                bg={cake.bg}
              />
            ))}
          </div>
        ) : (
          /* ===============================================
              NO PRODUCT
          =============================================== */

          <div
            className="
              rounded-[28px]
              border
              border-dashed
              border-[#351714]/30
              bg-white/50
              px-5
              py-20
              text-center
            "
          >
            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[#351714]
                bg-[#ffdf38]
                shadow-[4px_4px_0_#351714]
              "
            >
              <CakeSlice
                size={25}
                className="text-[#351714]"
              />
            </div>

            <h3
              className="
                mt-6
                text-[22px]
                font-black
                uppercase
                text-[#351714]
              "
            >
              No Cakes Found
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-[400px]
                text-[11px]
                leading-6
                text-[#725c56]
              "
            >
              We couldn't find a cake matching
              your current search or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="
                mt-6
                rounded-full
                border
                border-[#351714]
                bg-[#351714]
                px-6
                py-3
                text-[9px]
                font-extrabold
                uppercase
                tracking-[1px]
                text-white
                transition
                hover:bg-[#f26d3d]
              "
            >
              Show All Cakes
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CakeProducts;