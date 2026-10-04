import React, { useState } from "react";
import {
  Plus,
  Minus,
  Sparkles,
  HelpCircle,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Do you make custom cakes?",
      answer:
        "Yes! We create custom cakes for birthdays, anniversaries, weddings and other special occasions. Share your preferred flavour, size, theme and design with our team.",
    },
    {
      question: "How early should I place my cake order?",
      answer:
        "For regular custom cakes, we recommend ordering at least 2–3 days in advance. For larger or detailed celebration cakes, please contact us earlier so we have enough time to prepare everything perfectly.",
    },
    {
      question: "Do you offer home delivery?",
      answer:
        "Delivery availability depends on your location and order size. Contact our bakery team with your address and order details, and we'll let you know the available delivery options.",
    },
    {
      question: "Can I order bakery products online?",
      answer:
        "You can contact us to place an order for cakes, pastries, breads and other bakery items. Online ordering functionality can also be added to the website later.",
    },
    {
      question: "Do you accept bulk orders?",
      answer:
        "Yes. We accept bulk orders for parties, offices, events and celebrations. For larger quantities, please contact us in advance so our bakery team can plan your order.",
    },
    {
      question: "Can I choose my cake flavour and design?",
      answer:
        "Absolutely. You can discuss your preferred flavour, filling, colour, message and overall design with our team. We'll help you choose the best option for your occasion.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f5efe7] px-5 py-20 md:px-8 md:py-28"
    >
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-[350px] w-[350px] rounded-full bg-[#ffdf38]/20 blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[350px] w-[350px] rounded-full bg-[#f3a7bd]/20 blur-[110px]" />

      <p className="pointer-events-none absolute bottom-[-30px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[100px] font-black uppercase leading-none text-[#351714]/[0.025] md:text-[160px]">
        Questions
      </p>

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* ==============================
            TOP HEADING
        ============================== */}

        <div className="mx-auto max-w-[750px] text-center">
          <div className="flex items-center justify-center gap-2">
            <Sparkles
              size={14}
              className="text-[#f26d3d]"
            />

            <p className="text-[9px] font-extrabold uppercase tracking-[2px] text-[#f26d3d]">
              Frequently Asked Questions
            </p>
          </div>

          <h2 className="mt-4 text-[40px] font-black uppercase leading-[0.95] tracking-[-1.5px] text-[#351714] sm:text-[46px] md:text-[54px] lg:text-[60px]">
            Got Questions?
            <br />

            <span className="text-[#f26d3d]">
              We've Got Answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[570px] text-[11px] font-medium leading-6 text-[#725c56] md:text-[12px] md:leading-7">
            Find quick answers about custom cakes, orders,
            delivery and our bakery services. If you still
            need help, our team is always happy to talk.
          </p>
        </div>

        {/* ==============================
            FAQ AREA
        ============================== */}

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-14">

          {/* ==============================
              LEFT CARD
          ============================== */}

          <div>
            <div className="relative">
              {/* BACK SHAPE */}

              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[30px] border border-[#351714] bg-[#8edbe3]" />

              {/* CARD */}

              <div className="relative z-10 rounded-[30px] border border-[#351714] bg-[#351714] p-7 shadow-[6px_6px_0_#351714] md:p-8">

                {/* ICON */}

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#351714] bg-[#ffdf38] text-[#351714]">
                  <HelpCircle
                    size={22}
                    strokeWidth={2}
                  />
                </div>

                <p className="mt-8 text-[8px] font-extrabold uppercase tracking-[1.5px] text-[#ffdf38]">
                  Need More Help?
                </p>

                <h3 className="mt-2 text-[25px] font-black uppercase leading-[1] text-white md:text-[30px]">
                  Can't Find
                  <br />
                  Your Answer?
                </h3>

                <p className="mt-5 max-w-[320px] text-[10px] font-medium leading-6 text-white/50">
                  Our bakery team is happy to answer your
                  questions and help with cakes, special
                  orders and bakery products.
                </p>

                {/* CONTACT BUTTON */}

                <a
                  href="#contact-form"
                  className="group mt-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-[8px] font-extrabold uppercase tracking-[1px] text-white transition-all duration-300 hover:border-[#ffdf38] hover:bg-[#ffdf38] hover:text-[#351714]"
                >
                  <MessageCircle size={13} />

                  Ask Us Anything

                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                {/* DECORATION */}

                <div className="mt-9 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />

                  <span className="h-2 w-2 rounded-full bg-[#f3a7bd]" />

                  <span className="h-2 w-2 rounded-full bg-[#8edbe3]" />

                  <span className="h-2 w-2 rounded-full bg-[#ffdf38]" />
                </div>

                {/* RESPONSE */}

                <div className="mt-6 rounded-[18px] border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-[7px] font-bold uppercase tracking-[1px] text-white/35">
                    Usually We Respond
                  </p>

                  <p className="mt-1 text-[12px] font-black uppercase text-white">
                    As Soon As Possible
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ==============================
              RIGHT ACCORDION
          ============================== */}

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    overflow-hidden
                    rounded-[20px]
                    border
                    transition-all
                    duration-300

                    ${
                      isOpen
                        ? "border-[#351714] bg-[#fff9f1] shadow-[4px_4px_0_#351714]"
                        : "border-[#351714]/15 bg-white hover:border-[#351714]/40"
                    }
                  `}
                >
                  {/* QUESTION */}

                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                  >
                    <div className="flex items-center gap-4">

                      {/* NUMBER */}

                      <span
                        className={`
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          text-[7px]
                          font-black
                          transition-all
                          duration-300

                          ${
                            isOpen
                              ? "bg-[#ffdf38] text-[#351714]"
                              : "bg-[#351714]/5 text-[#351714]/40"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* QUESTION TEXT */}

                      <h3 className="text-[11px] font-black uppercase leading-5 text-[#351714] md:text-[12px]">
                        {faq.question}
                      </h3>
                    </div>

                    {/* PLUS / MINUS */}

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#351714]
                        transition-all
                        duration-300

                        ${
                          isOpen
                            ? "rotate-180 bg-[#351714] text-white"
                            : "bg-[#fff9f1] text-[#351714]"
                        }
                      `}
                    >
                      {isOpen ? (
                        <Minus
                          size={14}
                          strokeWidth={2.5}
                        />
                      ) : (
                        <Plus
                          size={14}
                          strokeWidth={2.5}
                        />
                      )}
                    </span>
                  </button>

                  {/* ==========================
                      ANSWER WITH ANIMATION
                  ========================== */}

                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out

                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 md:px-6">

                        <div className="ml-12 border-t border-[#351714]/10 pt-4">

                          <p className="max-w-[650px] text-[10px] font-medium leading-6 text-[#725c56] md:text-[11px]">
                            {faq.answer}
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==============================
            BOTTOM BAR
        ============================== */}

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[22px] border border-[#351714] bg-[#f3a7bd] px-6 py-5 text-center sm:flex-row sm:text-left md:px-8">

          <div>
            <p className="text-[7px] font-extrabold uppercase tracking-[1.5px] text-[#351714]/50">
              Still Have A Question?
            </p>

            <h3 className="mt-1 text-[14px] font-black uppercase text-[#351714] md:text-[16px]">
              We're Just A Message Away.
            </h3>
          </div>

          <a
            href="#contact-form"
            className="group inline-flex items-center gap-3 rounded-full border border-[#351714] bg-[#351714] px-5 py-3 text-[8px] font-extrabold uppercase tracking-[1px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff9f1] hover:text-[#351714]"
          >
            Contact Us

            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;