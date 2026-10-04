import React, { useEffect, useRef, useState } from "react";
import {
  CakeSlice,
  Heart,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

function CountUp({
  end,
  suffix = "",
  duration = 1400,
  start = false,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Section visible nahi hai to count start nahi hoga
    if (!start) return;

    let animationFrame;
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentCount = Math.floor(
        easeOut * end
      );

      setCount(currentCount);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [start, end, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

function AboutStats() {
  const sectionRef = useRef(null);

  const [startCounting, setStartCounting] =
    useState(false);

  // ==========================================
  // SCROLL DETECTION
  // ==========================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !startCounting
        ) {
          setStartCounting(true);

          // Ek baar count hone ke baad
          // dobara start nahi hoga
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.25,

        // thoda section screen me aane ke baad
        // animation start hogi
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [startCounting]);

  // ==========================================
  // STATS
  // ==========================================

  const stats = [
    {
      id: 1,
      value: 10,
      suffix: "+",
      title: "Years Experience",
      description:
        "Years of passion, learning and baking.",
      icon: Sparkles,
      bg: "#ffdf38",
    },

    {
      id: 2,
      value: 50,
      suffix: "+",
      title: "Fresh Products",
      description:
        "Breads, pastries, cakes and sweet treats.",
      icon: CakeSlice,
      bg: "#8edbe3",
    },

    {
      id: 3,
      value: 5000,
      suffix: "+",
      title: "Happy Customers",
      description:
        "Happy moments shared through fresh baking.",
      icon: Heart,
      bg: "#f3a7bd",
    },

    {
      id: 4,
      value: 100,
      suffix: "%",
      title: "Freshly Baked",
      description:
        "Fresh batches prepared with care every day.",
      icon: ShoppingBag,
      bg: "#f49a65",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#f5efe7]
        px-5
        py-20
        md:px-8
        md:py-24
      "
    >
      {/* =====================================
          BACKGROUND DECORATION
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#ffdf38]/20
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#8edbe3]/20
          blur-[100px]
        "
      />

      {/* BIG BACKGROUND TEXT */}

      <p
        className="
          pointer-events-none
          absolute
          bottom-[-20px]
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          text-[100px]
          font-black
          uppercase
          leading-none
          text-[#351714]/[0.025]
          md:text-[150px]
        "
      >
        Numbers
      </p>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
        "
      >
        {/* =====================================
            HEADING
        ===================================== */}

        <div className="mx-auto max-w-[700px] text-center">
          <div
            className="
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <Sparkles
              size={14}
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
              A Little About Us
            </p>
          </div>

          <h2
            className="
              mt-4
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
            Our Journey
            <br />

            <span className="text-[#f26d3d]">
              In Numbers.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[540px]
              text-[11px]
              font-medium
              leading-6
              text-[#725c56]
              md:text-[12px]
            "
          >
            Every number represents the time,
            passion and people that have become
            part of our bakery journey.
          </p>
        </div>

        {/* =====================================
            STATS GRID
        ===================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-[#351714]
                  bg-[#fff9f1]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[6px_6px_0_#351714]
                  md:p-7
                "
              >
                {/* BACKGROUND NUMBER */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -bottom-8
                    -right-3
                    text-[120px]
                    font-black
                    leading-none
                    text-[#351714]/[0.035]
                  "
                >
                  0{index + 1}
                </span>

                {/* =================================
                    ICON
                ================================= */}

                <div
                  style={{
                    backgroundColor: stat.bg,
                  }}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#351714]
                    text-[#351714]
                    shadow-[3px_3px_0_#351714]
                    transition-transform
                    duration-300
                    group-hover:rotate-6
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={2}
                  />
                </div>

                {/* =================================
                    NUMBER
                ================================= */}

                <h3
                  className="
                    mt-9
                    text-[44px]
                    font-black
                    leading-none
                    tracking-[-2px]
                    text-[#351714]
                    sm:text-[48px]
                    lg:text-[52px]
                  "
                >
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={1500}
                    start={startCounting}
                  />
                </h3>

                {/* =================================
                    TITLE
                ================================= */}

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-black
                    uppercase
                    tracking-[0.5px]
                    text-[#351714]
                  "
                >
                  {stat.title}
                </p>

                {/* LINE */}

                <div
                  className="
                    my-4
                    h-px
                    w-full
                    bg-[#351714]/10
                  "
                />

                {/* DESCRIPTION */}

                <p
                  className="
                    relative
                    z-10
                    max-w-[220px]
                    text-[9px]
                    font-medium
                    leading-5
                    text-[#725c56]
                  "
                >
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* =====================================
            BOTTOM MESSAGE
        ===================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-[24px]
            border
            border-[#351714]
            bg-[#351714]
            px-6
            py-6
            text-center
            sm:flex-row
            sm:text-left
            md:px-8
          "
        >
          <div>
            <p
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[1.5px]
                text-[#ffdf38]
              "
            >
              And We're Just Getting Started
            </p>

            <h3
              className="
                mt-1
                text-[16px]
                font-black
                uppercase
                text-white
                md:text-[19px]
              "
            >
              More Baking. More Memories.
            </h3>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-white/[0.05]
              px-4
              py-2.5
            "
          >
            <Heart
              size={13}
              fill="currentColor"
              className="text-[#f3a7bd]"
            />

            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[1px]
                text-white/60
              "
            >
              Thank You For Being Part Of Our Story
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStats;