import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgePercent,
  Check,
  Gift,
  LockKeyhole,
  ShoppingBag,
  Sparkles,
  Tag,
  Truck,
  X,
} from "lucide-react";

function OrderSummary({ cartItems = [] }) {
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponError, setCouponError] = useState("");

  // ==========================================
  // SUBTOTAL
  // ==========================================

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ==========================================
  // DELIVERY
  // Free delivery above ₹1000
  // ==========================================

  const FREE_DELIVERY_LIMIT = 1000;

  const deliveryCharge =
    subtotal === 0
      ? 0
      : subtotal >= FREE_DELIVERY_LIMIT
      ? 0
      : 60;

  // ==========================================
  // DISCOUNT
  // BAKE10 = 10% OFF
  // Maximum discount ₹200
  // ==========================================

  let discount = 0;

  if (appliedCoupon === "BAKE10") {
    discount = Math.min(subtotal * 0.1, 200);
  }

  // ==========================================
  // GRAND TOTAL
  // ==========================================

  const grandTotal = Math.max(
    subtotal + deliveryCharge - discount,
    0
  );

  // ==========================================
  // FREE DELIVERY PROGRESS
  // ==========================================

  const amountForFreeDelivery = Math.max(
    FREE_DELIVERY_LIMIT - subtotal,
    0
  );

  const deliveryProgress = Math.min(
    (subtotal / FREE_DELIVERY_LIMIT) * 100,
    100
  );

  // ==========================================
  // APPLY COUPON
  // ==========================================

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();

    setCouponError("");

    if (!code) {
      setCouponError("Please enter a coupon code.");
      return;
    }

    if (code === "BAKE10") {
      setAppliedCoupon(code);
      setCouponCode("");
      return;
    }

    setCouponError("Invalid coupon code.");
  };

  // ==========================================
  // REMOVE COUPON
  // ==========================================

  const removeCoupon = () => {
    setAppliedCoupon("");
    setCouponCode("");
    setCouponError("");
  };

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div
        className="
          overflow-hidden
          rounded-[28px]
          border
          border-[#351714]
          bg-[#fff9f1]
          shadow-[6px_6px_0_#351714]
        "
      >
        {/* =====================================
            HEADER
        ===================================== */}

        <div className="border-b border-[#351714] bg-[#f3a7bd] px-6 py-5">
          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#351714]
                bg-[#fff9f1]
                text-[#351714]
              "
            >
              <ShoppingBag size={17} />
            </div>

            <div>
              <p
                className="
                  text-[7px]
                  font-extrabold
                  uppercase
                  tracking-[1.5px]
                  text-[#351714]/50
                "
              >
                Your Order
              </p>

              <h2
                className="
                  mt-1
                  text-[18px]
                  font-black
                  uppercase
                  text-[#351714]
                "
              >
                Order Summary
              </h2>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">

          {/* =====================================
              FREE DELIVERY
          ===================================== */}

          <div
            className="
              rounded-[18px]
              border
              border-[#351714]/15
              bg-[#ffdf38]/40
              p-4
            "
          >
            <div className="flex items-start gap-3">

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#ffdf38]
                  text-[#351714]
                "
              >
                <Truck size={15} />
              </div>

              <div className="flex-1">

                {subtotal >= FREE_DELIVERY_LIMIT ? (
                  <>
                    <p
                      className="
                        text-[9px]
                        font-black
                        uppercase
                        text-[#351714]
                      "
                    >
                      You've Got Free Delivery!
                    </p>

                    <p
                      className="
                        mt-1
                        text-[8px]
                        font-medium
                        text-[#725c56]
                      "
                    >
                      Your order qualifies for free delivery.
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      className="
                        text-[9px]
                        font-black
                        uppercase
                        text-[#351714]
                      "
                    >
                      ₹
                      {amountForFreeDelivery.toLocaleString(
                        "en-IN"
                      )}{" "}
                      Away From Free Delivery
                    </p>

                    <p
                      className="
                        mt-1
                        text-[8px]
                        font-medium
                        text-[#725c56]
                      "
                    >
                      Add a little more to your cart.
                    </p>
                  </>
                )}

                {/* PROGRESS */}

                <div
                  className="
                    mt-3
                    h-[6px]
                    overflow-hidden
                    rounded-full
                    bg-[#351714]/10
                  "
                >
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-[#351714]
                      transition-all
                      duration-500
                    "
                    style={{
                      width: `${deliveryProgress}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =====================================
              COUPON
          ===================================== */}

          <div className="mt-6">
            <div className="mb-2 flex items-center gap-2">

              <Tag
                size={12}
                className="text-[#f26d3d]"
              />

              <p
                className="
                  text-[8px]
                  font-extrabold
                  uppercase
                  tracking-[1px]
                  text-[#351714]
                "
              >
                Coupon Code
              </p>
            </div>

            {!appliedCoupon ? (
              <>
                <div
                  className="
                    flex
                    overflow-hidden
                    rounded-[14px]
                    border
                    border-[#351714]/20
                    bg-white
                    focus-within:border-[#351714]
                  "
                >
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => {
                      setCouponCode(e.target.value);
                      setCouponError("");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleApplyCoupon();
                      }
                    }}
                    placeholder="Enter coupon"
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      px-4
                      py-3
                      text-[10px]
                      font-bold
                      uppercase
                      text-[#351714]
                      outline-none
                      placeholder:font-medium
                      placeholder:normal-case
                      placeholder:text-[#725c56]/40
                    "
                  />

                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="
                      border-l
                      border-[#351714]
                      bg-[#351714]
                      px-5
                      text-[7px]
                      font-extrabold
                      uppercase
                      tracking-[1px]
                      text-white
                      transition-colors
                      hover:bg-[#f26d3d]
                    "
                  >
                    Apply
                  </button>
                </div>

                {couponError && (
                  <p
                    className="
                      mt-2
                      text-[8px]
                      font-semibold
                      text-red-600
                    "
                  >
                    {couponError}
                  </p>
                )}

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                  "
                >
                  <Sparkles
                    size={10}
                    className="text-[#f26d3d]"
                  />

                  <p
                    className="
                      text-[7px]
                      font-medium
                      text-[#725c56]
                    "
                  >
                    Try{" "}
                    <button
                      type="button"
                      onClick={() =>
                        setCouponCode("BAKE10")
                      }
                      className="
                        font-black
                        text-[#f26d3d]
                        hover:underline
                      "
                    >
                      BAKE10
                    </button>{" "}
                    for 10% off.
                  </p>
                </div>
              </>
            ) : (
              /* APPLIED COUPON */

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                  rounded-[15px]
                  border
                  border-[#351714]
                  bg-[#b8d69b]
                  p-3.5
                "
              >
                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#351714]
                      text-white
                    "
                  >
                    <Check size={13} />
                  </div>

                  <div>
                    <p
                      className="
                        text-[8px]
                        font-black
                        uppercase
                        text-[#351714]
                      "
                    >
                      {appliedCoupon} Applied
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[7px]
                        font-medium
                        text-[#351714]/60
                      "
                    >
                      You saved ₹
                      {discount.toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={removeCoupon}
                  aria-label="Remove coupon"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#351714]/20
                    transition-colors
                    hover:bg-[#351714]
                    hover:text-white
                  "
                >
                  <X size={12} />
                </button>
              </div>
            )}
          </div>

          {/* =====================================
              PRICE DETAILS
          ===================================== */}

          <div
            className="
              mt-6
              border-y
              border-dashed
              border-[#351714]/20
              py-5
            "
          >
            <div className="space-y-4">

              {/* SUBTOTAL */}

              <PriceRow
                label="Subtotal"
                value={`₹${subtotal.toLocaleString(
                  "en-IN"
                )}`}
              />

              {/* DELIVERY */}

              <PriceRow
                label="Delivery"
                value={
                  deliveryCharge === 0
                    ? "FREE"
                    : `₹${deliveryCharge}`
                }
                highlight={deliveryCharge === 0}
              />

              {/* DISCOUNT */}

              {discount > 0 && (
                <PriceRow
                  label="Discount"
                  value={`- ₹${discount.toLocaleString(
                    "en-IN",
                    {
                      maximumFractionDigits: 2,
                    }
                  )}`}
                  highlight
                />
              )}
            </div>
          </div>

          {/* =====================================
              GRAND TOTAL
          ===================================== */}

          <div
            className="
              flex
              items-end
              justify-between
              gap-4
              py-5
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  font-extrabold
                  uppercase
                  tracking-[1px]
                  text-[#725c56]
                "
              >
                Grand Total
              </p>

              <p
                className="
                  mt-1
                  text-[7px]
                  font-medium
                  text-[#725c56]/60
                "
              >
                Including applicable charges
              </p>
            </div>

            <p
              className="
                text-[25px]
                font-black
                leading-none
                text-[#351714]
              "
            >
              ₹
              {grandTotal.toLocaleString("en-IN", {
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          {/* =====================================
              CHECKOUT
          ===================================== */}

          <Link
            to="/checkout"
            className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#351714]
              bg-[#351714]
              px-6
              py-4
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
            Proceed To Checkout

            <ArrowRight
              size={14}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          {/* SECURITY */}

          <div
            className="
              mt-4
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <LockKeyhole
              size={11}
              className="text-[#725c56]"
            />

            <span
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.5px]
                text-[#725c56]
              "
            >
              Secure Checkout
            </span>
          </div>

          {/* =====================================
              GIFT NOTE
          ===================================== */}

          <div
            className="
              mt-5
              flex
              items-center
              gap-3
              rounded-[16px]
              bg-[#8edbe3]/35
              p-4
            "
          >
            <Gift
              size={17}
              className="shrink-0 text-[#351714]"
            />

            <div>
              <p
                className="
                  text-[8px]
                  font-black
                  uppercase
                  text-[#351714]
                "
              >
                Sending A Gift?
              </p>

              <p
                className="
                  mt-1
                  text-[7px]
                  font-medium
                  leading-4
                  text-[#725c56]
                "
              >
                You can add delivery details and a special
                message during checkout.
              </p>
            </div>
          </div>

          {/* COUPON OFFER */}

          <div
            className="
              mt-3
              flex
              items-center
              gap-3
              rounded-[16px]
              bg-[#f3a7bd]/40
              p-4
            "
          >
            <BadgePercent
              size={17}
              className="shrink-0 text-[#351714]"
            />

            <p
              className="
                text-[7px]
                font-medium
                leading-4
                text-[#725c56]
              "
            >
              Use{" "}
              <span className="font-black text-[#351714]">
                BAKE10
              </span>{" "}
              and get 10% off up to ₹200.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ==========================================
   PRICE ROW
========================================== */



function PriceRow({
  label,
  value,
  highlight = false,
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      
      {/* LABEL */}
      <span className="text-[9px] font-medium text-[#725c56]">
        {label}
      </span>

      {/* PRICE / VALUE */}
      <span
        className={`text-[10px] font-black ${
          highlight
            ? "text-[#3f7a42]"
            : "text-[#351714]"
        }`}
      >
        {value}
      </span>

    </div>
  );
}

export default OrderSummary;