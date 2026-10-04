import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

import bakeryImage from "../../../assets/bakery.jpg";
import croissantImage from "../../../assets/croissant.jpg";

function FeaturedSection() {
  return (
    <section className="relative overflow-hidden bg-[#fff9f1] py-20 md:py-28">

      {/* Background decoration */}
      <div className="absolute -left-24 top-20 h-[280px] w-[280px] rounded-full bg-[#8edbe3]/20 blur-[80px]" />

      <div className="absolute -right-24 bottom-10 h-[300px] w-[300px] rounded-full bg-[#ffdf38]/20 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* =====================================
              LEFT IMAGE
          ===================================== */}
          <div className="relative">

            {/* Main blue box */}
            <div
              className="
                relative
                mx-auto
                max-w-[580px]
                overflow-hidden
                rounded-[35px]
                border-2
                border-[#351714]
                bg-[#8edbe3]
                p-5
                shadow-[8px_8px_0_#351714]
                md:p-7
              "
            >
              <div className="overflow-hidden rounded-[25px]">
                <img
                  src={bakeryImage}
                  alt="Fresh artisan bakery"
                  className="
                    h-[430px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                    md:h-[560px]
                  "
                />
              </div>

              {/* Decorative dots */}
              <div className="absolute right-5 top-5 grid grid-cols-3 gap-1.5">
                {[...Array(9)].map((_, index) => (
                  <span
                    key={index}
                    className="h-[4px] w-[4px] rounded-full bg-[#351714]"
                  />
                ))}
              </div>
            </div>

            {/* =====================================
                ROUND STICKER
            ===================================== */}
            <div
              className="
                absolute
                -left-2
                -top-8
                flex
                h-[110px]
                w-[110px]
                -rotate-12
                items-center
                justify-center
                rounded-full
                border-2
                border-[#351714]
                bg-[#ffdf38]
                text-center
                shadow-[4px_4px_0_#351714]
                md:-left-6
                md:h-[125px]
                md:w-[125px]
              "
            >
              <p className="text-[9px] font-black uppercase leading-4 tracking-[1px] text-[#351714]">
                Fun For
                <br />
                The Whole
                <br />
                Family!
              </p>
            </div>

            {/* Bottom label */}
            <div
              className="
                absolute
                -bottom-6
                right-[-5px]
                rotate-3
                rounded-full
                border-2
                border-[#351714]
                bg-[#f49a65]
                px-6
                py-3
                shadow-[4px_4px_0_#351714]
                md:right-[-15px]
              "
            >
              <p className="text-[9px] font-black uppercase tracking-[1.5px] text-[#351714]">
                Fresh Everyday
              </p>
            </div>

          </div>

          {/* =====================================
              RIGHT CONTENT
          ===================================== */}
          <div>

            {/* Small title */}
            <div className="flex items-center gap-3">
              <Sparkles
                size={18}
                className="text-[#f26d3d]"
                strokeWidth={2.5}
              />

              <p className="text-[10px] font-black uppercase tracking-[2px] text-[#351714]">
                Featured Item
              </p>
            </div>

            {/* Main heading */}
            <h2
              className="
                mt-5
                max-w-[650px]
                text-[50px]
                font-black
                uppercase
                leading-[0.95]
                tracking-[-2px]
                text-[#351714]
                sm:text-[60px]
                md:text-[75px]
                lg:text-[82px]
              "
            >
              Your Only
              <br />
              Dose of
              <span className="relative ml-3 inline-block">

                Delight

                {/* underline */}
                <span className="absolute -bottom-2 left-0 h-[7px] w-full -rotate-1 rounded-full bg-[#ffdf38]" />

              </span>
            </h2>

            {/* =====================================
                FEATURED PRODUCT
            ===================================== */}
            <div
              className="
                mt-10
                max-w-[620px]
                rounded-[28px]
                border-2
                border-[#351714]
                bg-white
                p-5
                shadow-[6px_6px_0_#351714]
                md:p-6
              "
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                {/* Product image */}
                <div
                  className="
                    h-[120px]
                    w-full
                    shrink-0
                    overflow-hidden
                    rounded-[20px]
                    bg-[#f5e9dd]
                    sm:w-[150px]
                  "
                >
                  <img
                    src={croissantImage}
                    alt="Fresh croissant"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Product information */}
                <div className="flex flex-1 items-start justify-between gap-5">

                  <div>
                    <span
                      className="
                        inline-block
                        rounded-full
                        bg-[#8edbe3]
                        px-3
                        py-1
                        text-[8px]
                        font-black
                        uppercase
                        text-[#351714]
                      "
                    >
                      Bestseller
                    </span>

                    <h3 className="mt-3 text-[22px] font-black uppercase text-[#351714]">
                      Butter Croissant
                    </h3>

                    <p className="mt-1 text-[11px] font-semibold text-[#7a615b]">
                      Classic French pastry
                    </p>
                  </div>

                  {/* Price */}
                  <p className="shrink-0 text-[25px] font-black text-[#351714]">
                    ₹149
                  </p>

                </div>

              </div>

              {/* Divider */}
              <div className="my-5 border-t-2 border-dashed border-[#351714]/20" />

              <p className="text-[12px] font-medium leading-6 text-[#68514c]">
                Golden, flaky and beautifully layered. Our classic butter
                croissant is freshly baked every morning for the perfect
                crisp outside and soft, buttery centre.
              </p>

              {/* Bottom */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

                <div className="flex gap-2">

                  <span className="rounded-full bg-[#f6c5cf] px-3 py-2 text-[8px] font-black uppercase text-[#351714]">
                    Fresh
                  </span>

                  <span className="rounded-full bg-[#ffdf38] px-3 py-2 text-[8px] font-black uppercase text-[#351714]">
                    Handmade
                  </span>

                </div>

                <Link
                  to="/bakery"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[1px]
                    text-[#351714]
                  "
                >
                  View Product

                  <ArrowRight
                    size={14}
                    strokeWidth={3}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </div>

            {/* =====================================
                BOTTOM CTA
            ===================================== */}
            <div className="mt-9 flex flex-wrap items-center gap-6">

              <Link
                to="/bakery"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border-2
                  border-[#351714]
                  bg-[#ffdf38]
                  px-7
                  py-4
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[1px]
                  text-[#351714]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[5px_5px_0_#351714]
                "
              >
                Shop Now

                <ArrowRight size={15} strokeWidth={3} />
              </Link>

              <p className="max-w-[200px] text-[10px] font-semibold leading-5 text-[#806a64]">
                Freshly baked every morning and ready to make your day better.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedSection;