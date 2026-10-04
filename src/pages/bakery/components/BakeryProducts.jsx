import React, { useMemo, useState } from "react";
import { Search, Wheat } from "lucide-react";

import BakeryCard from "./BakeryCard";

// Existing images
import bakeryImage from "../../../assets/bakery.jpg";
import croissantImage from "../../../assets/croissant.jpg";
import cakeImage from "../../../assets/cake.jpg";

function BakeryProducts() {
  // ============================================
  // STATES
  // ============================================

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  // ============================================
  // CATEGORIES
  // ============================================

  const categories = [
    "All",
    "Bread",
    "Croissant",
    "Cookies",
    "Pastries",
    "Bagels",
    "Muffins",
  ];

  // ============================================
  // PRODUCTS
  // ============================================

  const products = [
    {
      id: 1,
      name: "Artisan Country Bread",
      category: "Bread",
      description:
        "Slow-fermented artisan bread with a crisp golden crust and soft centre.",
      price: 149,
      oldPrice: 179,
      image: bakeryImage,
      rating: 4.9,
      badge: "Fresh",
      bg: "#f49a65",
    },

    {
      id: 2,
      name: "Classic Butter Croissant",
      category: "Croissant",
      description:
        "Light, flaky and buttery croissant freshly baked every morning.",
      price: 129,
      oldPrice: 159,
      image: croissantImage,
      rating: 4.9,
      badge: "Bestseller",
      bg: "#ffdf38",
    },

    {
      id: 3,
      name: "Chocolate Cookies",
      category: "Cookies",
      description:
        "Crunchy outside and soft inside with rich chocolate in every bite.",
      price: 199,
      oldPrice: 229,
      image: cakeImage,
      rating: 4.8,
      badge: "Popular",
      bg: "#f3a7bd",
    },

    {
      id: 4,
      name: "French Fruit Pastry",
      category: "Pastries",
      description:
        "Delicate pastry topped with cream and fresh seasonal fruits.",
      price: 179,
      oldPrice: 219,
      image: cakeImage,
      rating: 4.7,
      badge: "Sweet",
      bg: "#caa8e8",
    },

    {
      id: 5,
      name: "Sesame Seed Bagel",
      category: "Bagels",
      description:
        "Soft and chewy freshly baked bagel finished with toasted sesame seeds.",
      price: 119,
      oldPrice: 149,
      image: bakeryImage,
      rating: 4.7,
      badge: "Fresh",
      bg: "#b8d69b",
    },

    {
      id: 6,
      name: "Blueberry Muffin",
      category: "Muffins",
      description:
        "Soft bakery-style muffin packed with juicy blueberry flavour.",
      price: 99,
      oldPrice: 129,
      image: cakeImage,
      rating: 4.8,
      badge: "New",
      bg: "#f4c6a6",
    },

    {
      id: 7,
      name: "Chocolate Croissant",
      category: "Croissant",
      description:
        "Buttery layered croissant filled with smooth rich chocolate.",
      price: 159,
      oldPrice: 189,
      image: croissantImage,
      rating: 4.9,
      badge: "Popular",
      bg: "#8edbe3",
    },

    {
      id: 8,
      name: "Whole Wheat Bread",
      category: "Bread",
      description:
        "Wholesome everyday bread prepared with quality whole wheat flour.",
      price: 139,
      oldPrice: 169,
      image: bakeryImage,
      rating: 4.6,
      badge: "Healthy",
      bg: "#ffdf38",
    },

    {
      id: 9,
      name: "Butter Cookies",
      category: "Cookies",
      description:
        "Classic buttery cookies with a delicate crunch and rich flavour.",
      price: 179,
      oldPrice: 209,
      image: cakeImage,
      rating: 4.8,
      badge: "Classic",
      bg: "#f3a7bd",
    },

    {
      id: 10,
      name: "Chocolate Muffin",
      category: "Muffins",
      description:
        "Rich chocolate muffin with a soft centre and deep cocoa flavour.",
      price: 109,
      oldPrice: 139,
      image: cakeImage,
      rating: 4.7,
      badge: "Chocolate",
      bg: "#caa8e8",
    },

    {
      id: 11,
      name: "Cream Pastry",
      category: "Pastries",
      description:
        "Light pastry layered with smooth cream for a perfectly sweet treat.",
      price: 149,
      oldPrice: 179,
      image: cakeImage,
      rating: 4.8,
      badge: "Fresh",
      bg: "#8edbe3",
    },

    {
      id: 12,
      name: "Classic Plain Bagel",
      category: "Bagels",
      description:
        "A simple soft and chewy bagel, perfect for breakfast or snacking.",
      price: 99,
      oldPrice: 119,
      image: bakeryImage,
      rating: 4.6,
      badge: "Classic",
      bg: "#f49a65",
    },
  ];

  // ============================================
  // FILTER PRODUCTS
  // ============================================

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "All" ||
        product.category === activeCategory;

      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  // ============================================
  // CATEGORY COUNT
  // ============================================

  const getCategoryCount = (category) => {
    if (category === "All") {
      return products.length;
    }

    return products.filter(
      (product) => product.category === category
    ).length;
  };

  return (
    <section
      id="bakery-products"
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
      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-[20%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#8edbe3]/15
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-[15%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#ffdf38]/20
          blur-[100px]
        "
      />

      {/* ========================================
          CONTAINER
      ======================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
        "
      >
        {/* ======================================
            HEADER
        ====================================== */}

        <div
          className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* LEFT */}

          <div>
            <div className="mb-3 flex items-center gap-2">
              <Wheat
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
                From Our Oven
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
                lg:text-[58px]
              "
            >
              Freshly Baked
              <br />

              <span className="text-[#f26d3d]">
                For You.
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
              Discover our daily selection of
              artisan breads, buttery croissants,
              cookies, pastries and other bakery
              favourites.
            </p>
          </div>

          {/* ====================================
              SEARCH
          ==================================== */}

          <div className="w-full lg:max-w-[370px]">
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
              Search Our Bakery
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
                placeholder="Search bread, croissant..."
                className="
                  w-full
                  bg-transparent

                  text-[11px]
                  font-medium
                  text-[#351714]

                  outline-none

                  placeholder:text-[#351714]/35
                "
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.5px]
                    text-[#f26d3d]
                  "
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ======================================
            CATEGORY FILTERS
        ====================================== */}

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
                    font-black

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

        {/* ======================================
            RESULT INFO
        ====================================== */}

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
                text-[22px]
                font-black
                uppercase
                text-[#351714]
              "
            >
              {activeCategory === "All"
                ? "All Bakery Products"
                : activeCategory}
            </h3>
          </div>

          {/* RESULT COUNT */}

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

              shadow-[2px_2px_0_#351714]
            "
          >
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "Product"
              : "Products"}
          </div>
        </div>

        {/* ======================================
            PRODUCT GRID
        ====================================== */}

        {filteredProducts.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-6

              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredProducts.map((product) => (
              <BakeryCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                category={product.category}
                description={product.description}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
                badge={product.badge}
                bg={product.bg}
              />
            ))}
          </div>
        ) : (
          /* ====================================
              EMPTY STATE
          ==================================== */

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
              <Wheat
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
              No Products Found
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
              We couldn't find a bakery product
              matching your current search or
              selected category.
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

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#f26d3d]
                hover:shadow-[3px_3px_0_#351714]
              "
            >
              Show All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default BakeryProducts;