import React, { useState } from "react";

// Components
import CartHero from "./components/CartHero";
import CartItems from "./components/CartItems";
import OrderSummary from "./components/OrderSummary";

// Images
import cakeImage from "../../assets/cake.jpg";
import croissantImage from "../../assets/croissant.jpg";
import bakeryImage from "../../assets/bakery.jpg";

function Cart() {
  // ==========================================
  // CART ITEMS
  // Baad me ye Context / API se aayega
  // ==========================================

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chocolate Truffle Cake",
      category: "Celebration Cake",
      description:
        "Rich chocolate cake layered with smooth chocolate ganache.",
      price: 799,
      quantity: 1,
      image: cakeImage,
    },

    {
      id: 2,
      name: "Butter Croissant",
      category: "French Pastry",
      description:
        "Flaky and buttery croissant freshly baked every morning.",
      price: 149,
      quantity: 2,
      image: croissantImage,
    },

    {
      id: 3,
      name: "Artisan Bread",
      category: "Fresh Bakery",
      description:
        "Traditional artisan bread slowly fermented and freshly baked.",
      price: 199,
      quantity: 1,
      image: bakeryImage,
    },
  ]);

  // ==========================================
  // INCREASE QUANTITY
  // ==========================================

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ==========================================
  // DECREASE QUANTITY
  // Minimum quantity = 1
  // ==========================================

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  // ==========================================
  // REMOVE ITEM
  // ==========================================

  const removeItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  // ==========================================
  // TOTAL ITEMS
  // quantity ko count karega
  //
  // Example:
  // Cake = 1
  // Croissant = 2
  // Bread = 1
  // Total = 4
  // ==========================================

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ==========================================
  // SUBTOTAL
  // ==========================================

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-[#fff9f1]">

      {/* ======================================
          CART HERO
      ====================================== */}

      <CartHero totalItems={totalItems} />

      {/* ======================================
          CART CONTENT
      ====================================== */}

      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1400px]">

          {/* ==================================
              CART HAS PRODUCTS
          ================================== */}

          {cartItems.length > 0 ? (
            <div
              className="
                grid
                grid-cols-1
                items-start
                gap-10
                lg:grid-cols-[minmax(0,1fr)_370px]
              "
            >
              {/* ==============================
                  LEFT SIDE - CART PRODUCTS
              ============================== */}

              <CartItems
                cartItems={cartItems}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeItem}
              />

              {/* ==============================
                  RIGHT SIDE - ORDER SUMMARY
              ============================== */}

              <OrderSummary
                cartItems={cartItems}
                subtotal={subtotal}
              />
            </div>
          ) : (
            /* =================================
               EMPTY CART
            ================================= */

            <div
              className="
                mx-auto
                max-w-[700px]
                rounded-[30px]
                border
                border-[#351714]
                bg-[#ffdf38]
                px-6
                py-16
                text-center
                shadow-[6px_6px_0_#351714]
              "
            >
              {/* ICON */}

              <div
                className="
                  mx-auto
                  flex
                  h-[80px]
                  w-[80px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#351714]
                  bg-[#fff9f1]
                  text-[32px]
                "
              >
                🛒
              </div>

              {/* TITLE */}

              <h2
                className="
                  mt-7
                  text-[30px]
                  font-black
                  uppercase
                  tracking-[-1px]
                  text-[#351714]
                  md:text-[40px]
                "
              >
                Your Cart Is Empty
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-[450px]
                  text-[11px]
                  font-medium
                  leading-6
                  text-[#351714]/60
                "
              >
                Looks like you haven't added anything delicious
                yet. Explore our freshly baked cakes, pastries
                and breads.
              </p>

              {/* BUTTON */}

              <a
                href="/"
                className="
                  mt-7
                  inline-flex
                  items-center
                  justify-center
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
                "
              >
                Continue Shopping
              </a>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

export default Cart;