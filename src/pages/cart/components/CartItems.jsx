import React from "react";
import {
  Minus,
  Plus,
  Trash2,
  Sparkles,
} from "lucide-react";

function CartItems({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  if (!item) return null;
  const itemTotal = item.price * item.quantity;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-[#351714]/15
        bg-white
        p-4
        transition-all
        duration-300
        hover:border-[#351714]
        hover:shadow-[4px_4px_0_#351714]
        sm:p-5
      "
    >
      {/* TOP BADGE */}

      <div className="absolute right-4 top-4 z-10">
        <div
          className="
            flex
            items-center
            gap-1.5
            rounded-full
            bg-[#ffdf38]
            px-3
            py-1.5
          "
        >
          <Sparkles
            size={9}
            className="text-[#351714]"
          />

          <span className="text-[6px] font-black uppercase tracking-[1px] text-[#351714]">
            Fresh
          </span>
        </div>
      </div>

      <div
        className="
          flex
          flex-col
          gap-5
          sm:flex-row
          sm:items-center
        "
      >
        {/* ================================
            PRODUCT IMAGE
        ================================ */}

        <div
          className="
            h-[180px]
            w-full
            shrink-0
            overflow-hidden
            rounded-[20px]
            border
            border-[#351714]/10
            bg-[#f5efe7]
            sm:h-[145px]
            sm:w-[145px]
          "
        >
          <img
            src={item.image}
            alt={item.name}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* ================================
            PRODUCT DETAILS
        ================================ */}

        <div className="flex-1">

          {/* CATEGORY */}

          <p
            className="
              text-[7px]
              font-extrabold
              uppercase
              tracking-[1.5px]
              text-[#f26d3d]
            "
          >
            {item.category || "Fresh Bakery"}
          </p>

          {/* NAME */}

          <h3
            className="
              mt-2
              max-w-[350px]
              text-[18px]
              font-black
              uppercase
              leading-tight
              text-[#351714]
              md:text-[20px]
            "
          >
            {item.name}
          </h3>

          {/* DESCRIPTION */}

          {item.description && (
            <p
              className="
                mt-2
                max-w-[430px]
                text-[9px]
                font-medium
                leading-5
                text-[#725c56]
              "
            >
              {item.description}
            </p>
          )}

          {/* PRICE */}

          <div className="mt-4 flex items-center gap-2">
            <span
              className="
                text-[16px]
                font-black
                text-[#351714]
              "
            >
              ₹{item.price.toLocaleString("en-IN")}
            </span>

            <span
              className="
                text-[7px]
                font-bold
                uppercase
                text-[#725c56]/50
              "
            >
              Each
            </span>
          </div>

          {/* ================================
              MOBILE CONTROLS
          ================================ */}

          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
              lg:hidden
            "
          >
            <QuantityControls
              quantity={item.quantity}
              onIncrease={() => onIncrease(item.id)}
              onDecrease={() => onDecrease(item.id)}
            />

            <p className="text-[15px] font-black text-[#351714]">
              ₹{itemTotal.toLocaleString("en-IN")}
            </p>
          </div>
        </div>

        {/* ================================
            DESKTOP QUANTITY
        ================================ */}

        <div className="hidden lg:block">
          <p
            className="
              mb-2
              text-center
              text-[7px]
              font-bold
              uppercase
              tracking-[1px]
              text-[#725c56]
            "
          >
            Quantity
          </p>

          <QuantityControls
            quantity={item.quantity}
            onIncrease={() => onIncrease(item.id)}
            onDecrease={() => onDecrease(item.id)}
          />
        </div>

        {/* ================================
            DESKTOP TOTAL
        ================================ */}

        <div
          className="
            hidden
            min-w-[120px]
            text-right
            lg:block
          "
        >
          <p
            className="
              text-[7px]
              font-bold
              uppercase
              tracking-[1px]
              text-[#725c56]
            "
          >
            Total
          </p>

          <p
            className="
              mt-2
              text-[18px]
              font-black
              text-[#351714]
            "
          >
            ₹{itemTotal.toLocaleString("en-IN")}
          </p>
        </div>
      </div>

      {/* ================================
          REMOVE BUTTON
      ================================ */}

      <button
        type="button"
        onClick={() => onRemove(item.id)}
        className="
          mt-4
          inline-flex
          items-center
          gap-2
          text-[7px]
          font-extrabold
          uppercase
          tracking-[1px]
          text-[#a76252]
          transition-colors
          duration-300
          hover:text-red-600
          sm:ml-[165px]
          sm:mt-2
        "
      >
        <Trash2 size={12} />

        Remove Item
      </button>
    </div>
  );
}

/* =========================================
   QUANTITY COMPONENT
========================================= */

function QuantityControls({
  quantity,
  onIncrease,
  onDecrease,
}) {
  return (
    <div
      className="
        flex
        items-center
        overflow-hidden
        rounded-full
        border
        border-[#351714]
        bg-[#fff9f1]
      "
    >
      {/* MINUS */}

      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          text-[#351714]
          transition-colors
          hover:bg-[#f3a7bd]
          disabled:cursor-not-allowed
          disabled:opacity-30
        "
      >
        <Minus size={13} />
      </button>

      {/* QUANTITY */}

      <span
        className="
          flex
          h-9
          min-w-[38px]
          items-center
          justify-center
          border-x
          border-[#351714]
          bg-white
          text-[10px]
          font-black
          text-[#351714]
        "
      >
        {quantity}
      </span>

      {/* PLUS */}

      <button
        type="button"
        onClick={onIncrease}
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          text-[#351714]
          transition-colors
          hover:bg-[#ffdf38]
        "
      >
        <Plus size={13} />
      </button>
    </div>
  );
}

export default CartItems;