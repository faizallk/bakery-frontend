import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock3,
  Heart,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Our Menu", path: "/bakery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const categories = [
    "Cookies",
    "Cakes",
    "Pastries",
    "Croissants",
    "Bagels",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#351714] text-white">

      {/* =========================================
          TOP NEWSLETTER
      ========================================= */}
      <div className="relative border-b-2 border-white/10">

        {/* decorative circle */}
        <div
          className="
            pointer-events-none
            absolute
            -left-[120px]
            -top-[150px]
            h-[350px]
            w-[350px]
            rounded-full
            border-[70px]
            border-[#ffdf38]/10
          "
        />

        <div
          className="
            mx-auto
            grid
            max-w-[1450px]
            grid-cols-1
            gap-10
            px-5
            py-14

            md:px-8
            lg:grid-cols-[1fr_0.8fr]
            lg:items-center
            lg:px-12
            lg:py-16
          "
        >
          {/* LEFT */}
          <div className="relative z-10">

            <div className="flex items-center gap-3">
              <span className="h-[8px] w-[8px] rounded-full bg-[#ffdf38]" />

              <p
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[2px]
                  text-[#f49a65]
                "
              >
                Stay Fresh With Us
              </p>
            </div>

            <h2
              className="
                mt-4
                max-w-[700px]
                text-[38px]
                font-black
                uppercase
                leading-[0.95]
                tracking-[-1.5px]

                sm:text-[45px]
                md:text-[55px]
              "
            >
              Fresh News &
              <br />

              <span className="text-[#ffdf38]">
                Sweet Offers.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-[520px]
                text-[11px]
                font-medium
                leading-6
                text-white/55
              "
            >
              Join our bakery family and be the first to hear about fresh
              products, seasonal treats and special offers.
            </p>
          </div>

          {/* =========================================
              NEWSLETTER FORM
          ========================================= */}
          <div className="relative z-10">

            <form
              onSubmit={(e) => e.preventDefault()}
              className="
                rounded-[30px]
                border-2
                border-[#fff9f1]
                bg-[#fff9f1]
                p-2
                shadow-[7px_7px_0_#ffdf38]
              "
            >
              <div className="flex flex-col gap-2 sm:flex-row">

                <div className="flex flex-1 items-center gap-3 px-4">

                  <Mail
                    size={17}
                    className="shrink-0 text-[#351714]"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="
                      w-full
                      bg-transparent
                      py-3
                      text-[11px]
                      font-semibold
                      text-[#351714]
                      outline-none
                      placeholder:text-[#351714]/45
                    "
                  />

                </div>

                <button
                  type="submit"
                  className="
                    group
                    flex
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border-2
                    border-[#351714]
                    bg-[#ffdf38]
                    px-7
                    py-3.5
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[1px]
                    text-[#351714]
                    transition-all
                    duration-300

                    hover:bg-[#8edbe3]
                  "
                >
                  Subscribe

                  <ArrowRight
                    size={14}
                    strokeWidth={3}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>

              </div>
            </form>

            <p className="mt-4 text-[9px] font-medium text-white/35">
              No spam. Only fresh bakery news & sweet updates.
            </p>

          </div>

        </div>
      </div>


      {/* =========================================
          MAIN FOOTER
      ========================================= */}
      <div
        className="
          relative
          mx-auto
          max-w-[1450px]
          px-5
          py-16

          md:px-8
          md:py-20
          lg:px-12
        "
      >

        {/* decorative dots */}
        <div
          className="
            absolute
            right-12
            top-12
            hidden
            grid-cols-4
            gap-2
            lg:grid
          "
        >
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="h-[4px] w-[4px] rounded-full bg-[#ffdf38]/40"
            />
          ))}
        </div>


        <div
          className="
            grid
            grid-cols-1
            gap-12

            sm:grid-cols-2
            lg:grid-cols-[1.3fr_0.7fr_0.8fr_1fr]
            lg:gap-10
          "
        >

          {/* =====================================
              BRAND
          ===================================== */}
          <div>

            <Link to="/" className="inline-block">

              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Sweet Crumbs" className="h-14 w-auto object-contain" />

                <h2
                  className="
                    text-[32px]
                    font-black
                    uppercase
                    tracking-[-1px]
                    text-white

                    md:text-[38px]
                  "
                >
                  Sweet Crumbs
                  <span className="text-[#f26d3d]">.</span>
                </h2>
              </div>

              <p
                className="
                  mt-1
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[3px]
                  text-[#ffdf38]
                "
              >
                Boulangerie & Pâtisserie
              </p>

            </Link>


            <p
              className="
                mt-6
                max-w-[330px]
                text-[11px]
                font-medium
                leading-6
                text-white/50
              "
            >
              Fresh artisan breads, buttery pastries, delicious cakes and
              sweet creations handcrafted every day with passion and care.
            </p>


            {/* SOCIAL ICONS */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white/20
                  bg-[#f3c8c8]
                  text-[#351714]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:rotate-6
                  hover:shadow-[3px_3px_0_#ffdf38]
                "
              >
                <FaInstagram size={17} />
              </a>


              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white/20
                  bg-[#8edbe3]
                  text-[#351714]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:-rotate-6
                  hover:shadow-[3px_3px_0_#ffdf38]
                "
              >
                <FaFacebookF size={15} />
              </a>


              <a
                href="#"
                aria-label="WhatsApp"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white/20
                  bg-[#ffdf38]
                  text-[#351714]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:rotate-6
                  hover:shadow-[3px_3px_0_#8edbe3]
                "
              >
                <FaWhatsapp size={17} />
              </a>

            </div>

          </div>


          {/* =====================================
              QUICK LINKS
          ===================================== */}
          <div>

            <FooterHeading>
              Quick Links
            </FooterHeading>

            <ul className="mt-7 space-y-4">

              {quickLinks.map((item) => (
                <li key={item.path}>

                  <Link
                    to={item.path}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.5px]
                      text-white/50
                      transition-all
                      duration-300

                      hover:translate-x-1
                      hover:text-[#ffdf38]
                    "
                  >
                    <span
                      className="
                        h-[6px]
                        w-[6px]
                        rounded-full
                        bg-[#f26d3d]
                        transition-transform
                        group-hover:scale-150
                      "
                    />

                    {item.name}

                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* =====================================
              CATEGORIES
          ===================================== */}
          <div>

            <FooterHeading>
              Our Bakery
            </FooterHeading>

            <ul className="mt-7 space-y-4">

              {categories.map((category) => (
                <li key={category}>

                  <Link
                    to="/bakery"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.5px]
                      text-white/50
                      transition-all
                      duration-300

                      hover:translate-x-1
                      hover:text-[#8edbe3]
                    "
                  >
                    <span
                      className="
                        h-[6px]
                        w-[6px]
                        rounded-full
                        bg-[#8edbe3]
                        transition-transform
                        group-hover:scale-150
                      "
                    />

                    {category}

                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* =====================================
              CONTACT
          ===================================== */}
          <div>

            <FooterHeading>
              Visit Us
            </FooterHeading>

            <div className="mt-7 space-y-5">

              {/* ADDRESS */}
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
                  <MapPin size={15} strokeWidth={2.5} />
                </div>

                <p className="pt-1 text-[10px] font-medium leading-5 text-white/50">
                  123 Artisan Street,
                  <br />
                  Your City, India
                </p>

              </div>


              {/* PHONE */}
              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#8edbe3]
                    text-[#351714]
                  "
                >
                  <Phone size={14} strokeWidth={2.5} />
                </div>

                <a
                  href="tel:+919876543210"
                  className="
                    text-[10px]
                    font-medium
                    text-white/50
                    transition
                    hover:text-[#ffdf38]
                  "
                >
                  +91 98765 43210
                </a>

              </div>


              {/* EMAIL */}
              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f3c8c8]
                    text-[#351714]
                  "
                >
                  <Mail size={14} strokeWidth={2.5} />
                </div>

                <a
                  href="mailto:hello@lartisan.com"
                  className="
                    break-all
                    text-[10px]
                    font-medium
                    text-white/50
                    transition
                    hover:text-[#ffdf38]
                  "
                >
                  hello@lartisan.com
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            OPENING HOURS
        ========================================= */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            rounded-[30px]
            border-2
            border-white/10
            bg-white/[0.04]
            p-6

            md:grid-cols-[auto_1fr]
            md:items-center
            md:p-7
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border-2
                border-[#351714]
                bg-[#f49a65]
                text-[#351714]
              "
            >
              <Clock3 size={19} strokeWidth={2.5} />
            </div>

            <div>
              <p className="text-[8px] font-black uppercase tracking-[2px] text-[#f49a65]">
                Opening
              </p>

              <h3 className="mt-1 text-[18px] font-black uppercase">
                Bakery Hours
              </h3>
            </div>

          </div>


          <div
            className="
              grid
              grid-cols-1
              gap-3

              sm:grid-cols-3
              md:ml-auto
              md:w-full
              md:max-w-[700px]
            "
          >

            <HourCard
              day="Mon - Fri"
              time="8:00 - 20:00"
            />

            <HourCard
              day="Saturday"
              time="8:00 - 21:00"
            />

            <HourCard
              day="Sunday"
              time="9:00 - 18:00"
            />

          </div>

        </div>

      </div>


      {/* =========================================
          HUGE BRAND TEXT
      ========================================= */}
      <div
        className="
          pointer-events-none
          overflow-hidden
          border-t
          border-white/10
          py-3
          text-center
        "
      >
        <h2
          className="
            whitespace-nowrap
            text-[65px]
            font-black
            uppercase
            leading-none
            tracking-[-4px]
            text-white/[0.035]

            sm:text-[90px]
            md:text-[130px]
            lg:text-[170px]
          "
        >
          Sweet Crumbs BAKERY
        </h2>
      </div>


      {/* =========================================
          BOTTOM FOOTER
      ========================================= */}
      <div className="border-t border-white/10">

        <div
          className="
            mx-auto
            flex
            max-w-[1450px]
            flex-col
            items-center
            justify-between
            gap-4
            px-5
            py-6
            text-center

            md:flex-row
            md:px-8
            lg:px-12
          "
        >

          <p
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-1
              text-[9px]
              font-medium
              text-white/35
            "
          >
            © {currentYear} Sweet Crumbs. Made with

            <Heart
              size={11}
              fill="currentColor"
              className="text-[#f26d3d]"
            />

            for bakery lovers.
          </p>


          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
              text-[9px]
              font-medium
              text-white/35
            "
          >

            <Link
              to="/privacy-policy"
              className="transition hover:text-[#ffdf38]"
            >
              Privacy Policy
            </Link>

            <span className="h-3 w-px bg-white/15" />

            <Link
              to="/terms"
              className="transition hover:text-[#ffdf38]"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}


/* =============================================
   FOOTER HEADING
============================================= */

function FooterHeading({ children }) {
  return (
    <div>

      <h3
        className="
          text-[15px]
          font-black
          uppercase
          tracking-[0.5px]
          text-white
        "
      >
        {children}
      </h3>

      <div className="mt-3 flex items-center gap-1">

        <span className="h-[4px] w-7 rounded-full bg-[#ffdf38]" />

        <span className="h-[4px] w-[4px] rounded-full bg-[#f26d3d]" />

      </div>

    </div>
  );
}


/* =============================================
   OPENING HOUR CARD
============================================= */

function HourCard({ day, time }) {
  return (
    <div
      className="
        rounded-[18px]
        bg-white/[0.05]
        px-4
        py-3
        text-center
      "
    >

      <p
        className="
          text-[8px]
          font-black
          uppercase
          tracking-[1px]
          text-white/40
        "
      >
        {day}
      </p>

      <p
        className="
          mt-1
          text-[10px]
          font-black
          text-white
        "
      >
        {time}
      </p>

    </div>
  );
}

export default Footer;