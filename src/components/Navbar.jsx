import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingBag,
  ChevronDown,
  Sparkles,
  Mail,
} from "lucide-react";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Cake", path: "/cakes" },
    { name: "Bakery", path: "/bakery", },
    { name: "Cookies", path: "/cookies",  },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* ====
          TOP OFFER BAR
      ==== */}
      <div className={`bg-[#6321a5] text-white overflow-hidden transition-all duration-300 ${scrolled ? "max-h-0" : "max-h-[34px]"}`}>
        <div className="mx-auto flex h-[34px] max-w-[1500px] items-center justify-between px-4 md:px-8 lg:px-12">

          {/* Left */}
          <div className="flex items-center gap-2">
            <Sparkles size={12} className="text-[#ffe632]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.5px]">
              15% Off on ₹1000+ Purchase
            </span>
          </div>

          {/* Center */}
          <div className="hidden items-center gap-2 md:flex">
            <Mail size={12} className="text-[#ffe632]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.5px]">
              Subscribe & Save 15%
            </span>
          </div>

          {/* Right */}
          <div className="hidden items-center gap-2 lg:flex">
            <Sparkles size={12} className="text-[#ffe632]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.5px]">
              Freshly Baked Everyday
            </span>
          </div>

        </div>
      </div>


      {/* ====
          MAIN NAVBAR
      ==== */}
      <nav className="border-b border-[#3d1b18]/10 bg-[#fff9f1]">

        <div className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-5 md:px-8 lg:px-12">

          {/* 
              LOGO
           */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2"
          >
            <img src="/logo.png" alt="Sweet Crumbs" className="h-12 w-auto object-contain" />

            <h1
              className="
                text-[23px]
                font-black
                uppercase
                tracking-[-1px]
                text-[#351714]
                transition
                group-hover:text-[#6321a5]
                md:text-[26px]
              "
            >
              Sweet Crumbs
              <span className="text-[#f26d3d]">.</span>
            </h1>
          </Link>


          {/* 
              DESKTOP MENU
           */}
          <div className="hidden items-center gap-7 lg:flex">

            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `
                  group
                  relative
                  flex
                  items-center
                  gap-1
                  py-8
                  text-[11px]
                  font-black
                  uppercase
                  tracking-[0.4px]
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? "text-[#6321a5]"
                      : "text-[#351714] hover:text-[#6321a5]"
                  }
                  `
                }
              >
                {item.name}

                {item.dropdown && (
                  <ChevronDown
                    size={13}
                    strokeWidth={3}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                )}

                {/* Hover line */}
                <span
                  className="
                    absolute
                    bottom-[22px]
                    left-0
                    h-[2px]
                    w-0
                    bg-[#6321a5]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </NavLink>
            ))}

          </div>


          {/* 
              RIGHT SIDE
           */}
          <div className="hidden items-center gap-3 md:flex">

            {/* CTA */}
            <Link
              to="/bakery"
              className="
                rounded-full
                border-2
                border-[#351714]
                bg-[#ffe338]
                px-6
                py-[11px]
                text-[10px]
                font-black
                uppercase
                tracking-[0.5px]
                text-[#351714]
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:shadow-[4px_4px_0px_#351714]
              "
            >
              Order Now
            </Link>


            {/* Cart */}
            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="
                relative
                flex
                h-[43px]
                w-[43px]
                items-center
                justify-center
                rounded-full
                border-2
                border-[#351714]
                bg-white
                text-[#351714]
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:bg-[#8edbe3]
                hover:shadow-[3px_3px_0px_#351714]
              "
            >
              <ShoppingBag size={17} strokeWidth={2.5} />

              {/* Cart count */}
              <span
                className="
                  absolute
                  -right-1
                  -top-1
                  flex
                  h-[17px]
                  min-w-[17px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f26d3d]
                  px-1
                  text-[8px]
                  font-black
                  text-white
                "
              >
                0
              </span>
            </Link>

          </div>


          {/* 
              MOBILE BUTTON
           */}
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="
              flex
              h-[42px]
              w-[42px]
              items-center
              justify-center
              rounded-full
              border-2
              border-[#351714]
              bg-[#ffe338]
              text-[#351714]
              lg:hidden
            "
          >
            {mobileMenu ? (
              <X size={20} strokeWidth={3} />
            ) : (
              <Menu size={20} strokeWidth={3} />
            )}
          </button>

        </div>


        {/* ====
            MOBILE MENU
        ==== */}
        <div
          className={`
            overflow-hidden
            border-t
            border-[#351714]/10
            bg-[#fff9f1]
            transition-all
            duration-500
            lg:hidden
            ${
              mobileMenu
                ? "max-h-[600px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="px-5 py-6">

            <div className="flex flex-col">

              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#351714]/10
                    py-4
                    text-[13px]
                    font-black
                    uppercase
                    text-[#351714]
                    ${
                      isActive
                        ? "text-[#6321a5]"
                        : "hover:text-[#6321a5]"
                    }
                    `
                  }
                >
                  {item.name}

                  {item.dropdown && (
                    <ChevronDown size={15} strokeWidth={3} />
                  )}
                </NavLink>
              ))}

            </div>


            {/* Mobile Buttons */}
            <div className="mt-6 flex gap-3">

              <Link
                to="/bakery"
                onClick={() => setMobileMenu(false)}
                className="
                  flex-1
                  rounded-full
                  border-2
                  border-[#351714]
                  bg-[#ffe338]
                  px-5
                  py-3
                  text-center
                  text-[10px]
                  font-black
                  uppercase
                  text-[#351714]
                "
              >
                Order Now
              </Link>

              <Link
                to="/cart"
                onClick={() => setMobileMenu(false)}
                className="
                  flex
                  h-[43px]
                  w-[43px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-[#351714]
                  bg-[#8edbe3]
                  text-[#351714]
                "
              >
                <ShoppingBag size={17} strokeWidth={2.5} />
              </Link>

            </div>

          </div>
        </div>

      </nav>

    </header>
  );
}

export default Navbar;