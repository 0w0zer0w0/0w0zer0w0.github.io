"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "About", "Projects", "Contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // middle of the viewport

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          // If the middle of the viewport is inside the section, set it as active
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section);
          }
          // If the scroll is above the section (for "Home" when scrolling up), set "Home" as active
          else if (scrollPosition < sectionTop && section === "Home") {
            setActiveSection("Home");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full px-10 py-3 flex justify-center border-b rounded-b-xl bg-bg2 top-0 border-Secondary items-center fixed z-50">
      <Link
        href="#Home"
        className={`text-4xl flex mr-auto justify-center w-full sm:w-auto`}
      >
        JM
      </Link>

      {/* Nav content */}
      <div className="hidden sm:flex gap-8 items-center w-full justify-center">
        <Link
          href="#Home"
          className={`text-lg hover:scale-110 duration-300 hover:text-Primary ${
            activeSection === "Home" ? "nav_active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="#About"
          className={`text-lg hover:scale-110 duration-300 hover:text-Primary ${
            activeSection === "About" ? "nav_active" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="#Projects"
          className={`text-lg hover:scale-110 duration-300 hover:text-Primary ${
            activeSection === "Projects" ? "nav_active" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="#Contact"
          className={`text-lg hover:scale-110 duration-300 hover:text-Primary ${
            activeSection === "Contact" ? "nav_active" : ""
          }`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
