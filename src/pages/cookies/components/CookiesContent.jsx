import React from "react";
import {
  Cookie,
  Settings,
  ShieldCheck,
  BarChart3,
  ExternalLink,
  Info,
  Sparkles,
  Check,
} from "lucide-react";

function CookiesContent() {
  const sections = [
    {
      id: "01",
      title: "What Are Cookies?",
      icon: Cookie,
      color: "#ffdf38",
      content: (
        <>
          <p>
            Cookies are small text files that are stored on your
            device when you visit a website. They help websites
            remember information about your visit and provide a
            smoother browsing experience.
          </p>

          <p className="mt-3">
            Cookies may remember things such as your preferences,
            website settings or how you interact with different
            pages.
          </p>
        </>
      ),
    },

    {
      id: "02",
      title: "Why We Use Cookies",
      icon: Settings,
      color: "#8edbe3",
      content: (
        <>
          <p>
            We may use cookies to make sure our website works
            correctly and to understand how visitors interact
            with our pages.
          </p>

          <div className="mt-4 space-y-2">
            {[
              "Keep important website features working",
              "Remember certain website preferences",
              "Understand how visitors use our website",
              "Improve website performance and usability",
              "Provide a better browsing experience",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2"
              >
                <Check
                  size={12}
                  strokeWidth={3}
                  className="mt-1 shrink-0 text-[#351714]"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </>
      ),
    },

    {
      id: "03",
      title: "Analytics & Performance",
      icon: BarChart3,
      color: "#f3a7bd",
      content: (
        <>
          <p>
            Analytics cookies can help us understand how people
            use our website, such as which pages are visited and
            how visitors move through the site.
          </p>

          <p className="mt-3">
            This information can help us identify areas that need
            improvement. Where applicable, analytics information
            should be handled according to the settings and
            services used by the website.
          </p>
        </>
      ),
    },

    {
      id: "04",
      title: "Third-Party Cookies",
      icon: ExternalLink,
      color: "#f49a65",
      content: (
        <>
          <p>
            Some features on our website may be provided by
            third-party services. Those services may place or
            access their own cookies when their features are
            used.
          </p>

          <p className="mt-3">
            For example, embedded maps, videos, analytics or
            social features may use technologies controlled by
            their respective providers.
          </p>
        </>
      ),
    },

    {
      id: "05",
      title: "Managing Your Cookies",
      icon: ShieldCheck,
      color: "#b8d69b",
      content: (
        <>
          <p>
            You can control or delete cookies through your
            browser settings. Most browsers allow you to view,
            block or remove stored cookies.
          </p>

          <p className="mt-3">
            Please remember that disabling certain cookies may
            cause some website features to work differently or
            become unavailable.
          </p>
        </>
      ),
    },
  ];

  return (
    <section
      id="cookies-content"
      className="relative overflow-hidden bg-[#fff9f1] px-5 py-20 md:px-8 md:py-28"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute -left-40 top-[20%] h-[350px] w-[350px] rounded-full bg-[#8edbe3]/15 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[10%] h-[350px] w-[350px] rounded-full bg-[#f3a7bd]/15 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1250px]">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="mx-auto max-w-[700px] text-center">
          <div className="flex items-center justify-center gap-2">
            <Sparkles
              size={14}
              className="text-[#f26d3d]"
            />

            <p className="text-[9px] font-extrabold uppercase tracking-[2px] text-[#f26d3d]">
              Understanding Cookies
            </p>
          </div>

          <h2 className="mt-4 text-[40px] font-black uppercase leading-[0.95] tracking-[-1.5px] text-[#351714] sm:text-[46px] md:text-[54px] lg:text-[60px]">
            How Cookies Work
            <br />

            <span className="text-[#f26d3d]">
              On Our Website.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[580px] text-[11px] font-medium leading-6 text-[#725c56] md:text-[12px] md:leading-7">
            Here's a simple explanation of cookies, why they
            may be used and the choices you have when browsing
            our website.
          </p>
        </div>

        {/* =====================================
            IMPORTANT NOTICE
        ===================================== */}

        <div className="mt-12 rounded-[24px] border border-[#351714] bg-[#ffdf38] p-5 shadow-[5px_5px_0_#351714] md:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#351714] bg-[#fff9f1]">
              <Info
                size={17}
                className="text-[#351714]"
              />
            </div>

            <div>
              <p className="text-[8px] font-extrabold uppercase tracking-[1.5px] text-[#351714]/55">
                Good To Know
              </p>

              <h3 className="mt-1 text-[15px] font-black uppercase text-[#351714]">
                Cookies Don't All Serve The Same Purpose
              </h3>

              <p className="mt-2 max-w-[850px] text-[10px] font-medium leading-5 text-[#351714]/65">
                Some cookies may be necessary for website
                functionality, while others may support
                analytics, preferences or third-party
                features. The exact cookies used should match
                the services actually enabled on this website.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================
            POLICY CONTENT
        ===================================== */}

        <div className="mt-10 space-y-5">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                key={section.id}
                className="group relative overflow-hidden rounded-[26px] border border-[#351714]/15 bg-white p-5 transition-all duration-300 hover:border-[#351714] hover:shadow-[5px_5px_0_#351714] md:p-7"
              >
                {/* LARGE NUMBER */}

                <span className="pointer-events-none absolute -bottom-8 -right-2 text-[120px] font-black leading-none text-[#351714]/[0.025]">
                  {section.id}
                </span>

                <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-[80px_1fr] md:gap-7">

                  {/* ICON */}

                  <div>
                    <div
                      style={{
                        backgroundColor: section.color,
                      }}
                      className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] border border-[#351714] text-[#351714] shadow-[3px_3px_0_#351714] transition-transform duration-300 group-hover:rotate-3"
                    >
                      <Icon
                        size={21}
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[8px] font-black text-[#f26d3d]">
                        {section.id}
                      </span>

                      <div className="h-px w-8 bg-[#351714]/20" />

                      <p className="text-[7px] font-bold uppercase tracking-[1.2px] text-[#725c56]">
                        Cookie Policy
                      </p>
                    </div>

                    <h3 className="mt-3 text-[20px] font-black uppercase leading-tight text-[#351714] md:text-[23px]">
                      {section.title}
                    </h3>

                    <div className="mt-4 max-w-[850px] text-[10px] font-medium leading-6 text-[#725c56] md:text-[11px]">
                      {section.content}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================
            USER CHOICE
        ===================================== */}

        <div className="mt-10 overflow-hidden rounded-[28px] border border-[#351714] bg-[#351714]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:items-center">

            <div className="p-6 md:p-8">
              <p className="text-[8px] font-extrabold uppercase tracking-[1.5px] text-[#ffdf38]">
                Your Choice
              </p>

              <h3 className="mt-2 text-[20px] font-black uppercase text-white md:text-[24px]">
                You're In Control Of Your Cookies.
              </h3>

              <p className="mt-3 max-w-[700px] text-[10px] font-medium leading-6 text-white/50">
                You can use your browser settings to manage
                stored cookies. If this website provides a
                cookie preference tool, you can also use that
                tool to manage optional cookie categories.
              </p>
            </div>

            <div className="border-t border-white/10 p-6 lg:border-l lg:border-t-0 lg:p-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-[#f3a7bd] text-[#351714]">
                <ShieldCheck
                  size={30}
                  strokeWidth={1.8}
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            POLICY UPDATE NOTE
        ===================================== */}

        <div className="mt-8 border-l-2 border-[#f26d3d] pl-4">
          <p className="text-[8px] font-black uppercase tracking-[1px] text-[#351714]">
            Changes To This Cookie Policy
          </p>

          <p className="mt-2 max-w-[850px] text-[9px] font-medium leading-5 text-[#725c56]">
            We may update this Cookie Policy when our website,
            technologies or practices change. When appropriate,
            the “Last Updated” date displayed on this page
            should also be updated.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CookiesContent;