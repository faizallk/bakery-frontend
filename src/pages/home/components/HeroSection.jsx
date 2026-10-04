import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import heroImage from "../../../assets/hero.jpg";
import bakeryImage from "../../../assets/bakery.jpg";
import cakeImage from "../../../assets/cake.jpg";

const slides = [
  {
    id: 1,
    tag: "Fresh",
    smallTitle: "Premium Bread & Pastries",
    title1: "BAKE THE",
    title2: "GOODNESS",
    description:
      "Freshly baked breads and pastries made from carefully selected ingredients, every single day.",
    button: "Order Now",
    image: heroImage,
    bg: "#fff8ef",
    shape: "#ffdf38",
    sticker: "#55b7c8",
  },
  {
    id: 2,
    tag: "Tasty",
    smallTitle: "Handcrafted Every Morning",
    title1: "FRESHLY",
    title2: "BAKED",
    description:
      "Discover artisan breads made with patience, passion and traditional baking techniques.",
    button: "Explore Bakery",
    image: bakeryImage,
    bg: "#fff5ed",
    shape: "#8edbe3",
    sticker: "#ff7a4d",
  },
  {
    id: 3,
    tag: "Sweet",
    smallTitle: "Made For Happy Moments",
    title1: "SWEET",
    title2: "DELIGHTS",
    description:
      "Beautiful cakes and sweet creations handcrafted to make every celebration a little more special.",
    button: "View Collection",
    image: cakeImage,
    bg: "#fff7f2",
    shape: "#f6a0aa",
    sticker: "#7130a6",
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ================================
  // AUTO SLIDER
  // ================================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const slide = slides[currentSlide];

  return (
    <section
      className="relative overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: slide.bg }}
    >
      <div className="mx-auto max-w-[1500px] px-4 py-6 md:px-8 md:py-8 lg:px-12">

        {/* =========================================
            HERO BOX
        ========================================= */}
        <div
          className="
            relative
            min-h-[650px]
            overflow-hidden
            rounded-[28px]
            border-2
            border-[#351714]
            md:min-h-[680px]
            lg:min-h-[700px]
            lg:rounded-[45px]
          "
        >

          {/* Background decorative text */}
          <span
            className="
              pointer-events-none
              absolute
              -right-8
              -top-10
              select-none
              text-[150px]
              font-black
              leading-none
              text-[#351714]/[0.025]
              md:text-[250px]
            "
          >
            BAKED
          </span>

          {/* Yellow/colored shape */}
          <div
            className="
              absolute
              -right-[100px]
              bottom-[-170px]
              h-[550px]
              w-[550px]
              rounded-full
              transition-colors
              duration-700
              md:right-[-50px]
              lg:h-[680px]
              lg:w-[680px]
            "
            style={{ backgroundColor: slide.shape }}
          />

          {/* Small decorative dots */}
          <div className="absolute right-[12%] top-[16%] hidden rotate-12 lg:block">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, index) => (
                <span
                  key={index}
                  className="h-[5px] w-[5px] rounded-full bg-[#351714]"
                />
              ))}
            </div>
          </div>

          {/* =========================================
              MAIN GRID
          ========================================= */}
          <div
            className="
              relative
              z-10
              grid
              min-h-[650px]
              grid-cols-1
              items-center
              gap-10
              px-6
              py-14
              md:min-h-[680px]
              md:px-10
              lg:min-h-[700px]
              lg:grid-cols-[0.9fr_1.1fr]
              lg:px-14
              xl:px-16
            "
          >

            {/* =====================================
                LEFT CONTENT
            ===================================== */}
            <div className="relative z-20">

              {/* Small heading */}
              <div
                key={`small-${currentSlide}`}
                className="flex animate-[heroFadeUp_.6s_ease-out] items-center gap-3"
              >
                <span className="h-[9px] w-[9px] rounded-full bg-[#f26d3d]" />

                <p className="text-[10px] font-black uppercase tracking-[2px] text-[#351714]">
                  {slide.smallTitle}
                </p>
              </div>

              {/* Heading */}
              <div
                key={`heading-${currentSlide}`}
                className="mt-5 animate-[heroFadeUp_.7s_ease-out]"
              >
                <h1
                  className="
                    text-[55px]
                    font-black
                    uppercase
                    leading-[0.88]
                    tracking-[-3px]
                    text-[#351714]
                    sm:text-[70px]
                    md:text-[90px]
                    lg:text-[88px]
                    xl:text-[108px]
                  "
                >
                  {slide.title1}
                </h1>

                <div className="mt-1 flex flex-wrap items-center gap-3">

                  <h1
                    className="
                      text-[55px]
                      font-black
                      uppercase
                      leading-[0.88]
                      tracking-[-3px]
                      text-[#351714]
                      sm:text-[70px]
                      md:text-[90px]
                      lg:text-[88px]
                      xl:text-[108px]
                    "
                  >
                    {slide.title2}
                  </h1>

                  {/* Sticker */}
                  <span
                    className="
                      -rotate-6
                      rounded-full
                      border-2
                      border-[#351714]
                      px-4
                      py-2
                      text-[10px]
                      font-black
                      uppercase
                      text-white
                      shadow-[3px_3px_0_#351714]
                      md:text-[12px]
                    "
                    style={{ backgroundColor: slide.sticker }}
                  >
                    {slide.tag}
                  </span>

                </div>
              </div>

              {/* Description */}
              <p
                key={`description-${currentSlide}`}
                className="
                  mt-8
                  max-w-[440px]
                  animate-[heroFadeUp_.9s_ease-out]
                  text-[13px]
                  font-medium
                  leading-7
                  text-[#553a35]
                  md:text-[14px]
                "
              >
                {slide.description}
              </p>

              {/* Buttons */}
              <div
                key={`buttons-${currentSlide}`}
                className="mt-8 flex animate-[heroFadeUp_1s_ease-out] flex-wrap items-center gap-5"
              >
                <Link
                  to="/bakery"
                  className="
                    group
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
                  {slide.button}

                  <ArrowRight
                    size={15}
                    strokeWidth={3}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/about"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[1px]
                    text-[#351714]
                  "
                >
                  Our Story

                  <ArrowRight
                    size={14}
                    strokeWidth={3}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* Mini feature */}
              <div className="mt-10 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#351714] text-[#ffdf38]">
                  <Sparkles size={17} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase text-[#351714]">
                    Baked Fresh
                  </p>

                  <p className="mt-1 text-[9px] font-medium text-[#806a64]">
                    Every morning with love
                  </p>
                </div>
              </div>

            </div>

            {/* =====================================
                RIGHT IMAGE
            ===================================== */}
            <div className="relative flex min-h-[390px] items-center justify-center md:min-h-[480px] lg:min-h-[600px]">

              {/* Back card */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[330px]
                  w-[90%]
                  max-w-[590px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rotate-[-3deg]
                  rounded-[45px]
                  border-2
                  border-[#351714]
                  md:h-[440px]
                  lg:h-[480px]
                "
                style={{ backgroundColor: slide.shape }}
              />

              {/* Image */}
              <div
                key={`image-${currentSlide}`}
                className="
                  relative
                  z-10
                  h-[330px]
                  w-[88%]
                  max-w-[590px]
                  animate-[heroImageIn_.8s_ease-out]
                  overflow-hidden
                  rounded-[40px]
                  border-2
                  border-[#351714]
                  bg-white
                  shadow-[8px_8px_0_#351714]
                  md:h-[440px]
                  lg:h-[480px]
                "
              >
                <img
                  src={slide.image}
                  alt={slide.title1}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[5000ms]
                    hover:scale-110
                  "
                />
              </div>

              {/* Fresh sticker */}
              <div
                className="
                  absolute
                  bottom-[5%]
                  right-[2%]
                  z-20
                  flex
                  h-[85px]
                  w-[85px]
                  rotate-12
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-[#351714]
                  bg-[#ffdf38]
                  text-center
                  shadow-[4px_4px_0_#351714]
                  md:h-[100px]
                  md:w-[100px]
                "
              >
                <p className="text-[9px] font-black uppercase leading-4 text-[#351714]">
                  Fresh
                  <br />
                  From The
                  <br />
                  Oven
                </p>
              </div>

            </div>

          </div>

          {/* =========================================
              SLIDER CONTROLS
          ========================================= */}
          <div className="absolute bottom-6 left-6 z-30 flex items-center gap-3 md:left-10 lg:left-auto lg:right-10">

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border-2
                border-[#351714]
                bg-white
                text-[#351714]
                transition-all
                hover:-translate-y-1
                hover:bg-[#8edbe3]
                hover:shadow-[3px_3px_0_#351714]
              "
            >
              <ChevronLeft size={17} strokeWidth={3} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-[9px] rounded-full border border-[#351714] transition-all duration-300 ${
                    currentSlide === index
                      ? "w-7 bg-[#351714]"
                      : "w-[9px] bg-transparent"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border-2
                border-[#351714]
                bg-white
                text-[#351714]
                transition-all
                hover:-translate-y-1
                hover:bg-[#ffdf38]
                hover:shadow-[3px_3px_0_#351714]
              "
            >
              <ChevronRight size={17} strokeWidth={3} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;