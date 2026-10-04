import React from "react";
import {
  ShieldCheck,
  SlidersHorizontal,
  BarChart3,
  Globe2,
  Check,
  Sparkles,
  LockKeyhole,
} from "lucide-react";

function CookieTypes() {
  const cookieTypes = [
    {
      id: "01",
      title: "Essential Cookies",
      subtitle: "Required",
      icon: ShieldCheck,
      color: "#ffdf38",
      badgeColor: "#351714",
      badgeText: "#ffffff",
      description:
        "These cookies help core parts of the website function correctly and cannot always be disabled through website preferences.",
      examples: [
        "Website functionality",
        "Security features",
        "Session preferences",
      ],
    },
    {
      id: "02",
      title: "Preference Cookies",
      subtitle: "Optional",
      icon: SlidersHorizontal,
      color: "#8edbe3",
      badgeColor: "#ffffff",
      badgeText: "#351714",
      description:
        "Preference cookies can remember choices you make so the website can provide a more personalized experience.",
      examples: [
        "Language preferences",
        "Display settings",
        "Remembered choices",
      ],
    },
    {
      id: "03",
      title: "Analytics Cookies",
      subtitle: "Optional",
      icon: BarChart3,
      color: "#f3a7bd",
      badgeColor: "#ffffff",
      badgeText: "#351714",
      description:
        "Analytics cookies may help us understand how visitors interact with pages so we can improve website performance.",
      examples: [
        "Page visits",
        "Website performance",
        "Visitor interactions",
      ],
    },
    {
      id: "04",
      title: "Third-Party Cookies",
      subtitle: "Depends On Services",
      icon: Globe2,
      color: "#f49a65",
      badgeColor: "#ffffff",
      badgeText: "#351714",
      description:
        "Third-party services embedded on the website may use their own cookies according to their individual policies.",
      examples: [
        "Embedded maps",
        "External media",
        "Third-party services",
      ],
    },
  ];

  return (
    <section
      id="cookie-types"
      className="relative overflow-hidden bg-[#f5efe7] px-5 py-20 md:px-8 md:py-28"
    >
      {/* BACKGROUND DECORATIONS */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#ffdf38]/15 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#8edbe3]/20 blur-[110px]" />

      <p className="pointer-events-none absolute bottom-[-25px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[90px] font-black uppercase leading-none text-[#351714]/[0.025] md:text-[150px]">
        Cookies
      </p>

      <div className="relative z-10 mx-auto max-w-[1400px]">

        {/* =====================================
            HEADING
        ===================================== */}

        <div className="mx-auto max-w-[720px] text-center">
          <div className="flex items-center justify-center gap-2">
            <Sparkles
              size={14}
              className="text-[#f26d3d]"
            />

            <p className="text-[9px] font-extrabold uppercase tracking-[2px] text-[#f26d3d]">
              Cookie Categories
            </p>
          </div>

          <h2 className="mt-4 text-[40px] font-black uppercase leading-[0.95] tracking-[-1.5px] text-[#351714] sm:text-[46px] md:text-[54px] lg:text-[60px]">
            Different Cookies,
            <br />

            <span className="text-[#f26d3d]">
              Different Purposes.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-[11px] font-medium leading-6 text-[#725c56] md:text-[12px] md:leading-7">
            Not every cookie does the same job. Here's a simple
            overview of the main cookie categories that may be
            used on a website.
          </p>
        </div>

        {/* =====================================
            COOKIE CARDS
        ===================================== */}

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cookieTypes.map((cookie) => {
            const Icon = cookie.icon;

            return (
              <article
                key={cookie.id}
                style={{
                  backgroundColor: cookie.color,
                }}
                className="
                  group
                  relative
                  min-h-[420px]
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#351714]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[7px_7px_0_#351714]
                "
              >
                {/* BIG NUMBER */}

                <span className="pointer-events-none absolute -bottom-7 -right-2 text-[125px] font-black leading-none text-[#351714]/[0.05]">
                  {cookie.id}
                </span>

                {/* TOP */}

                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-[#351714] bg-[#fff9f1] text-[#351714] shadow-[3px_3px_0_#351714] transition-transform duration-300 group-hover:rotate-6">
                    <Icon
                      size={21}
                      strokeWidth={2}
                    />
                  </div>

                  <span className="text-[8px] font-black text-[#351714]/40">
                    {cookie.id}
                  </span>
                </div>

                {/* CONTENT */}

                <div className="relative z-10 mt-8">
                  {/* BADGE */}

                  <span
                    style={{
                      backgroundColor: cookie.badgeColor,
                      color: cookie.badgeText,
                    }}
                    className="inline-flex rounded-full border border-[#351714] px-3 py-1.5 text-[6px] font-black uppercase tracking-[1px]"
                  >
                    {cookie.subtitle}
                  </span>

                  {/* TITLE */}

                  <h3 className="mt-4 text-[22px] font-black uppercase leading-[1] text-[#351714]">
                    {cookie.title}
                  </h3>

                  <div className="my-4 h-px w-10 bg-[#351714]/30" />

                  {/* DESCRIPTION */}

                  <p className="text-[9px] font-medium leading-5 text-[#351714]/65">
                    {cookie.description}
                  </p>

                  {/* EXAMPLES */}

                  <div className="mt-6 space-y-2.5">
                    {cookie.examples.map((example) => (
                      <div
                        key={example}
                        className="flex items-center gap-2.5"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#351714]/30 bg-white/40">
                          <Check
                            size={10}
                            strokeWidth={3}
                            className="text-[#351714]"
                          />
                        </span>

                        <span className="text-[8px] font-bold uppercase tracking-[0.3px] text-[#351714]/70">
                          {example}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================
            IMPORTANT BOX
        ===================================== */}

        <div className="mt-10 overflow-hidden rounded-[28px] border border-[#351714] bg-[#351714]">
          <div className="grid grid-cols-1 items-center md:grid-cols-[auto_1fr_auto]">

            {/* ICON */}

            <div className="flex items-center justify-center p-6 md:p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-[#ffdf38] text-[#351714]">
                <LockKeyhole
                  size={24}
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* CONTENT */}

            <div className="border-y border-white/10 px-6 py-6 text-center md:border-x md:border-y-0 md:text-left">
              <p className="text-[7px] font-extrabold uppercase tracking-[1.5px] text-[#ffdf38]">
                Important
              </p>

              <h3 className="mt-2 text-[16px] font-black uppercase text-white md:text-[19px]">
                Essential Cookies May Be Necessary
              </h3>

              <p className="mt-2 max-w-[700px] text-[9px] font-medium leading-5 text-white/50">
                Cookies required for core website functionality
                may need to remain active. Optional cookie
                categories should only be described as active
                when those technologies are actually used by
                your website.
              </p>
            </div>

            {/* STATUS */}

            <div className="flex justify-center p-6 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#b8d69b]" />

                <span className="text-[7px] font-black uppercase tracking-[1px] text-white">
                  Privacy First
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            SMALL NOTE
        ===================================== */}

        <p className="mx-auto mt-6 max-w-[800px] text-center text-[8px] font-medium leading-5 text-[#725c56]">
          The exact cookies and categories listed in your final
          policy should match the cookies, analytics tools and
          third-party services actually used by your website.
        </p>
      </div>
    </section>
  );
}

export default CookieTypes;