import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

function ContactInfo() {
  const contactItems = [
    {
      id: "01",
      icon: MapPin,
      title: "Visit Us",
      label: "Our Bakery",
      lines: [
        "123 Artisan Street",
        "Your City, India",
      ],
      bg: "#ffdf38",
      actionText: "Get Directions",
      href: "#bakery-location",
    },
    {
      id: "02",
      icon: Phone,
      title: "Call Us",
      label: "Let's Talk",
      lines: [
        "+91 98765 43210",
        "We're happy to help",
      ],
      bg: "#8edbe3",
      actionText: "Call Now",
      href: "tel:+919876543210",
    },
    {
      id: "03",
      icon: Mail,
      title: "Email Us",
      label: "Send A Message",
      lines: [
        "hello@lartisan.com",
        "We'll get back to you soon",
      ],
      bg: "#f3a7bd",
      actionText: "Send Email",
      href: "mailto:hello@lartisan.com",
    },
    {
      id: "04",
      icon: Clock3,
      title: "Opening Hours",
      label: "We're Open",
      lines: [
        "Mon - Sat: 8 AM - 8 PM",
        "Sunday: 9 AM - 6 PM",
      ],
      bg: "#f49a65",
      actionText: "View Hours",
      href: "#opening-hours",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fff9f1] px-5 py-20 md:px-8 md:py-28">
      {/* =========================================
          BACKGROUND DECORATIONS
      ========================================= */}

      <div className="pointer-events-none absolute -left-32 top-20 h-[300px] w-[300px] rounded-full bg-[#ffdf38]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full bg-[#f3a7bd]/15 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mx-auto max-w-[700px] text-center">
          {/* SMALL LABEL */}

          <div className="flex items-center justify-center gap-2">
            <Sparkles
              size={14}
              className="text-[#f26d3d]"
            />

            <p className="text-[9px] font-extrabold uppercase tracking-[2px] text-[#f26d3d]">
              Get In Touch
            </p>
          </div>

          {/* HEADING */}

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
              lg:text-[60px]
            "
          >
            We're Always
            <br />

            <span className="text-[#f26d3d]">
              Happy To Help.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[560px]
              text-[11px]
              font-medium
              leading-6
              text-[#725c56]

              md:text-[12px]
              md:leading-7
            "
          >
            Whether you have a question about our bakery,
            want to place a special order or simply want to
            say hello, choose the easiest way to reach us.
          </p>
        </div>

        {/* =========================================
            CONTACT CARDS
        ========================================= */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: item.bg,
                }}
                className="
                  group
                  relative
                  min-h-[320px]
                  overflow-hidden

                  rounded-[28px]

                  border
                  border-[#351714]

                  p-6

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:shadow-[7px_7px_0_#351714]

                  md:p-7
                "
              >
                {/* BIG BACKGROUND NUMBER */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -bottom-8
                    -right-3

                    text-[120px]
                    font-black
                    leading-none

                    text-[#351714]/[0.06]
                  "
                >
                  {item.id}
                </span>

                {/* =================================
                    TOP
                ================================= */}

                <div className="relative z-10 flex items-start justify-between">
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#351714]

                      bg-[#fff9f1]

                      text-[#351714]

                      shadow-[3px_3px_0_#351714]

                      transition-all
                      duration-300

                      group-hover:rotate-6
                      group-hover:scale-105
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={2}
                    />
                  </div>

                  {/* NUMBER */}

                  <span className="text-[9px] font-black text-[#351714]/40">
                    {item.id}
                  </span>
                </div>

                {/* =================================
                    CONTENT
                ================================= */}

                <div className="relative z-10 mt-12">
                  {/* SMALL LABEL */}

                  <p className="text-[7px] font-extrabold uppercase tracking-[1.5px] text-[#351714]/55">
                    {item.label}
                  </p>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-2
                      text-[23px]
                      font-black
                      uppercase
                      leading-none
                      text-[#351714]

                      md:text-[25px]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* LINE */}

                  <div className="my-4 h-px w-10 bg-[#351714]/40" />

                  {/* DETAILS */}

                  <div className="space-y-1">
                    {item.lines.map((line, index) => (
                      <p
                        key={index}
                        className={`
                          ${
                            index === 0
                              ? "font-bold text-[#351714]"
                              : "font-medium text-[#351714]/60"
                          }

                          text-[10px]
                          leading-5
                        `}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* =================================
                    ACTION BUTTON
                ================================= */}

                <a
                  href={item.href}
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                    z-20

                    flex
                    items-center
                    justify-between

                    rounded-full

                    border
                    border-[#351714]/30

                    bg-[#fff9f1]/60

                    px-4
                    py-2.5

                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[0.8px]

                    text-[#351714]

                    transition-all
                    duration-300

                    hover:border-[#351714]
                    hover:bg-[#351714]
                    hover:text-white
                  "
                >
                  {item.actionText}

                  <ArrowUpRight
                    size={13}
                    strokeWidth={2.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </a>
              </div>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM CONTACT BAR
        ========================================= */}

        <div
          className="
            mt-10

            flex
            flex-col
            gap-5

            rounded-[25px]

            border
            border-[#351714]

            bg-[#351714]

            px-6
            py-6

            md:flex-row
            md:items-center
            md:justify-between
            md:px-8
          "
        >
          {/* LEFT */}

          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center

                rounded-full

                bg-[#ffdf38]

                text-[#351714]
              "
            >
              <Phone
                size={18}
                strokeWidth={2}
              />
            </div>

            <div>
              <p className="text-[7px] font-extrabold uppercase tracking-[1.5px] text-[#ffdf38]">
                Need Help?
              </p>

              <h3
                className="
                  mt-1
                  text-[14px]
                  font-black
                  uppercase
                  text-[#fff9f1]

                  md:text-[16px]
                "
              >
                Talk To Our Bakery Team
              </h3>
            </div>
          </div>

          {/* RIGHT */}

          <a
            href="tel:+919876543210"
            className="
              inline-flex
              items-center
              justify-center
              gap-3

              rounded-full

              border
              border-white/20

              bg-white/[0.06]

              px-5
              py-3

              text-[9px]
              font-extrabold
              uppercase
              tracking-[1px]

              text-white

              transition-all
              duration-300

              hover:border-[#ffdf38]
              hover:bg-[#ffdf38]
              hover:text-[#351714]
            "
          >
            <Phone size={13} />

            +91 98765 43210
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;