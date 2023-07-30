"use client";
import React, { useState } from "react";
import { BiGridAlt } from "react-icons/bi";
import { BsX } from "react-icons/bs";
import Banner from "@/components/Banner";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Aboutme from "@/components/Aboutme";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const styles = {
  navLinks: "cursor-pointer ml-10 border-b border-white hover:border-[#F6B519] text-sm",
};

function Page() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <main className="w-full bg-white text-gray-900 px-12">
      <div className="">
        <header>
          <nav className="w-full h-20 shadow-xl bg-white">
            {/* Desktop Menu */}
            <div className="flex items-center justify-between h-full px-4 w-full">
              <h1 className="font-bold cursor-pointer">Danendra</h1>
              <div className="hidden sm:flex">
                <ul className="hidden sm:flex">
                  <li className={styles.navLinks}>
                    <a href="/Aboutme">AboutMe</a>
                  </li>
                  <li className={styles.navLinks}>
                    <a href="/Skills">Skills</a>
                  </li>
                  <li className={styles.navLinks}>
                    <a href="/Experience">Experience</a>
                  </li>
                  <li className={styles.navLinks}>
                    <a href="/Contact">Contact</a>
                  </li>
                </ul>
              </div>
              {/* Mobile Menu */}
              <div className="sm:hidden cursor-pointer pl-24" onClick={toggleMenu}>
                <BiGridAlt className="h8 w-8 text-black" />
              </div>
            </div>
            <div
              className={
                isMenuOpen
                  ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-white p-10 ease-in-out duration-500"
                  : "fixed left-[-100%] top-0 p-10 case-in-out duration-500"
              }
            >
              <div className="flex w-full items-center justify-end">
                <div className="cursor-pointer" onClick={toggleMenu}>
                  <BsX className="h8 w-8" />
                </div>
              </div>
              {/* Mobile Menu Links */}
              <div className="flex-col py-4">
                <ul>
                  <li className="py-4 hover:underline">
                    <a href="/Aboutme">Aboutme</a>
                  </li>
                  <li className="py-4 hover:underline">
                    <a href="/Skills">Skills</a>
                  </li>
                  <li className="py-4 hover:underline">
                    <a href="/Experience">Experience</a>
                  </li>
                  <li className="py-4 hover:underline">
                    <a href="/Contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Banner/>
        <Aboutme/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}

export default Page;
