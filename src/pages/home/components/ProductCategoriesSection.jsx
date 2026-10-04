import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

// Images
import bakeryImage from "../../../assets/bakery.jpg";
import croissantImage from "../../../assets/croissant.jpg";
import cakeImage from "../../../assets/cake.jpg";

/* =========================================================
   COUNTER COMPONENT
========================================================= */

function Counter({
  end = 0,
  start = false,
  duration = 1200,
  resetKey = "",
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    if (end <= 0) {
      setCount(0);
      return;
    }

    setCount(0);

    let current = 0;

    const speed = Math.max(
      Math.floor(duration / end),
      80
    );

    const timer = setInterval(() => {
      current += 1;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
        return;
      }

      setCount(current);
    }, speed);

    return () => {
      clearInterval(timer);
    };
  }, [end, start, duration, resetKey]);

  return <>{count}</>;
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function ProductCategoriesSection() {
  /* =======================================================
     CATEGORIES
  ======================================================= */

  const categories = [
    {
      id: 1,
      name: "All",
      bg: "#ffdf38",
    },
    {
      id: 2,
      name: "Cookies",
      bg: "#f3c8c8",
    },
    {
      id: 3,
      name: "Cake",
      bg: "#8edbe3",
    },
    {
      id: 4,
      name: "Pretzel",
      bg: "#caa8e8",
    },
    {
      id: 5,
      name: "Pastries",
      bg: "#e8e5df",
    },
    {
      id: 6,
      name: "Croissant",
      bg: "#ffdf38",
    },
    {
      id: 7,
      name: "Bagel",
      bg: "#f49a65",
    },
  ];

  /* =======================================================
     PRODUCTS
  ======================================================= */

  const products = [
    {
      id: 1,
      title: "Bagel With Seeds",
      category: "Bagel",
      price: 149,
      image: bakeryImage,
      bg: "#f49a65",
      badge: "Fresh",
    },
    {
      id: 2,
      title: "Classic Croissant",
      category: "Croissant",
      price: 129,
      image: croissantImage,
      bg: "#ffdf38",
      badge: "Popular",
    },
    {
      id: 3,
      title: "Chocolate Cake",
      category: "Cake",
      price: 499,
      image: cakeImage,
      bg: "#8edbe3",
      badge: "Tasty",
    },
    {
      id: 4,
      title: "Butter Cookies",
      category: "Cookies",
      price: 199,
      image: bakeryImage,
      bg: "#f3c8c8",
      badge: "Fresh",
    },
    {
      id: 5,
      title: "Chocolate Cookies",
      category: "Cookies",
      price: 229,
      image: cakeImage,
      bg: "#f3c8c8",
      badge: "Bestseller",
    },
    {
      id: 6,
      title: "French Pretzel",
      category: "Pretzel",
      price: 159,
      image: bakeryImage,
      bg: "#caa8e8",
      badge: "New",
    },
    {
      id: 7,
      title: "Fruit Pastry",
      category: "Pastries",
      price: 179,
      image: cakeImage,
      bg: "#e8e5df",
      badge: "Sweet",
    },
    {
      id: 8,
      title: "Almond Croissant",
      category: "Croissant",
      price: 169,
      image: croissantImage,
      bg: "#ffdf38",
      badge: "Popular",
    },
    {
      id: 9,
      title: "Blueberry Cake",
      category: "Cake",
      price: 549,
      image: cakeImage,
      bg: "#8edbe3",
      badge: "Special",
    },
  ];

  /* =======================================================
     STATES
  ======================================================= */

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [startCounter, setStartCounter] =
    useState(false);

  /* =======================================================
     REF
  ======================================================= */

  const counterAreaRef = useRef(null);

  /* =======================================================
     START COUNT WHEN SCROLLED INTO VIEW
  ======================================================= */

  useEffect(() => {
    const element = counterAreaRef.current;

    if (!element) return;

    // Browser fallback
    if (!("IntersectionObserver" in window)) {
      setStartCounter(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);

          // Animation only once
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =======================================================
     GET CATEGORY COUNT
  ======================================================= */

  const getCategoryCount = (categoryName) => {
    if (categoryName === "All") {
      return products.length;
    }

    return products.filter(
      (product) =>
        product.category === categoryName
    ).length;
  };

  /* =======================================================
     FILTER PRODUCTS
  ======================================================= */

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    return products.filter(
      (product) =>
        product.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#fff9f1]
        py-20
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
          -left-20
          bottom-20
          h-[250px]
          w-[250px]
          rounded-full
          bg-[#8edbe3]/15
          blur-[90px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          top-20
          h-[250px]
          w-[250px]
          rounded-full
          bg-[#ffdf38]/20
          blur-[90px]
        "
      />

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          md:px-8
          lg:px-10
        "
      >
        {/* =================================================
            HEADER + COUNTER TRIGGER
        ================================================= */}

        <div ref={counterAreaRef}>
          <div
            className="
              grid
              grid-cols-1
              gap-10
              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-end
            "
          >
            {/* LEFT CONTENT */}

            <div>
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="
                    h-[7px]
                    w-[7px]
                    rounded-full
                    bg-[#f26d3d]
                  "
                />

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-[#f26d3d]
                  "
                >
                  Baked With Love
                </p>
              </div>

              <h2
                className="
                  text-[39px]
                  font-extrabold
                  uppercase
                  leading-[0.95]
                  tracking-[-1.5px]
                  text-[#351714]
                  sm:text-[46px]
                  md:text-[54px]
                  lg:text-[60px]
                "
              >
                Product We
                <br />
                Bake Here
                <br />
                Daily
                <span className="text-[#f26d3d]">
                  .
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-[470px]
                  text-[12px]
                  font-medium
                  leading-6
                  text-[#725c56]
                  md:text-[13px]
                  md:leading-7
                "
              >
                Fresh breads, pastries, cakes and
                sweet treats prepared every day with
                carefully selected ingredients.
              </p>
            </div>

            {/* =================================================
                CATEGORY BUTTONS
            ================================================= */}

            <div
              className="
                flex
                flex-wrap
                gap-3
                lg:justify-end
              "
            >
              {categories.map((category) => {
                const categoryCount =
                  getCategoryCount(category.name);

                const isActive =
                  activeCategory ===
                  category.name;

                return (
                  <button
                    type="button"
                    key={category.id}
                    onClick={() =>
                      setActiveCategory(
                        category.name
                      )
                    }
                    style={{
                      backgroundColor:
                        category.bg,
                    }}
                    className={`
                      flex
                      items-center
                      gap-2.5
                      rounded-full
                      border
                      border-[#351714]
                      px-5
                      py-2.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.5px]
                      text-[#351714]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[3px_3px_0_#351714]

                      ${
                        isActive
                          ? "-translate-y-0.5 shadow-[3px_3px_0_#351714]"
                          : ""
                      }
                    `}
                  >
                    <span>
                      {category.name}
                    </span>

                    {/* COUNT */}

                    <span
                      className="
                        flex
                        h-6
                        min-w-6
                        items-center
                        justify-center
                        rounded-full
                        bg-[#351714]
                        px-1.5
                        text-[9px]
                        font-bold
                        text-white
                      "
                    >
                      <Counter
                        end={categoryCount}
                        start={startCounter}
                        duration={1200}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="my-11 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#351714]/15" />

          <div className="flex items-center gap-2">
            <span className="h-[7px] w-[7px] rounded-full bg-[#f26d3d]" />
            <span className="h-[7px] w-[7px] rounded-full bg-[#ffdf38]" />
            <span className="h-[7px] w-[7px] rounded-full bg-[#8edbe3]" />
          </div>

          <div className="h-px flex-1 bg-[#351714]/15" />
        </div>

        {/* =================================================
            CURRENT CATEGORY
        ================================================= */}

        <div
          className="
            mb-8
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[1.8px]
                text-[#f26d3d]
              "
            >
              Showing
            </p>

            <h3
              className="
                mt-1
                text-[23px]
                font-extrabold
                uppercase
                text-[#351714]
              "
            >
              {activeCategory}
            </h3>
          </div>

          {/* FILTERED PRODUCT COUNT */}

          <div
            className="
              w-fit
              rounded-full
              border
              border-[#351714]
              bg-white
              px-5
              py-2.5
              text-[10px]
              font-bold
              uppercase
              text-[#351714]
              shadow-[3px_3px_0_#351714]
            "
          >
            <Counter
              end={filteredProducts.length}
              start={startCounter}
              duration={700}
              resetKey={activeCategory}
            />{" "}
            {filteredProducts.length === 1
              ? "Product"
              : "Products"}
          </div>
        </div>

        {/* =================================================
            PRODUCTS GRID
        ================================================= */}

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
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group block"
              >
                <div
                  style={{
                    backgroundColor:
                      product.bg,
                  }}
                  className="
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
                  {/* IMAGE AREA */}

                  <div className="relative p-3.5">
                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-[20px]
                        bg-white
                      "
                    >
                      <img
                        src={product.image}
                        alt={product.title}
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

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#351714]/20
                          via-transparent
                          to-transparent
                        "
                      />
                    </div>

                    {/* BADGE */}

                    <span
                      className="
                        absolute
                        left-6
                        top-6
                        rounded-full
                        border
                        border-[#351714]
                        bg-[#ffdf38]
                        px-3.5
                        py-1.5
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.5px]
                        text-[#351714]
                        shadow-[2px_2px_0_#351714]
                      "
                    >
                      {product.badge}
                    </span>

                    {/* ARROW */}

                    <div
                      className="
                        absolute
                        right-6
                        top-6
                        flex
                        h-10
                        w-10
                        -translate-y-1
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#351714]
                        bg-white
                        text-[#351714]
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-y-0
                        group-hover:rotate-45
                        group-hover:opacity-100
                      "
                    >
                      <ArrowUpRight
                        size={16}
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  {/* PRODUCT CONTENT */}

                  <div className="px-6 pb-6 pt-2">
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[1.2px]
                        text-[#351714]/55
                      "
                    >
                      {product.category}
                    </p>

                    <div
                      className="
                        mt-2.5
                        flex
                        items-end
                        justify-between
                        gap-4
                      "
                    >
                      <h3
                        className="
                          max-w-[260px]
                          text-[19px]
                          font-extrabold
                          uppercase
                          leading-[1.1]
                          text-[#351714]
                          md:text-[21px]
                        "
                      >
                        {product.title}
                      </h3>

                      <p
                        className="
                          shrink-0
                          text-[18px]
                          font-extrabold
                          text-[#351714]
                          md:text-[19px]
                        "
                      >
                        ₹{product.price}
                      </p>
                    </div>

                    <div className="mt-5 h-px w-full bg-[#351714]/10" />

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[1px]
                          text-[#351714]/45
                        "
                      >
                        Freshly Baked
                      </span>

                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          text-[#351714]
                        "
                      >
                        View Product
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* =================================================
              EMPTY STATE
          ================================================= */

          <div
            className="
              rounded-[24px]
              border
              border-dashed
              border-[#351714]/30
              bg-white/40
              px-6
              py-16
              text-center
            "
          >
            <h3
              className="
                text-[21px]
                font-extrabold
                uppercase
                text-[#351714]
              "
            >
              No Products Found
            </h3>

            <p
              className="
                mt-2
                text-[11px]
                leading-5
                text-[#725c56]
              "
            >
              No products are currently available
              in this category.
            </p>
          </div>
        )}

        {/* =================================================
            BOTTOM AREA
        ================================================= */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-start
            justify-between
            gap-5
            border-t
            border-dashed
            border-[#351714]/20
            pt-7
            sm:flex-row
            sm:items-center
          "
        >
          {/* TOTAL PRODUCTS */}

          <div>
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[1.5px]
                text-[#f26d3d]
              "
            >
              Total Products
            </p>

            <div className="mt-1 flex items-baseline gap-2">
              <p
                className="
                  text-[28px]
                  font-extrabold
                  text-[#351714]
                "
              >
                <Counter
                  end={products.length}
                  start={startCounter}
                  duration={1200}
                />
              </p>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  text-[#351714]/45
                "
              >
                Fresh Items
              </span>
            </div>
          </div>

          {/* BUTTON */}

          <Link
            to="/bakery"
            className="
              group
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-[#351714]
              bg-[#ffdf38]
              px-6
              py-3.5
              text-[9px]
              font-bold
              uppercase
              tracking-[1px]
              text-[#351714]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#f49a65]
              hover:shadow-[4px_4px_0_#351714]
            "
          >
            Explore All Products

            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductCategoriesSection;