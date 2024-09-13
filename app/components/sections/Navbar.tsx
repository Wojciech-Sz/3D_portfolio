"use client";

import { useRef, useState } from "react";
import NavItems from "@/app/components/shared/NavItems";
import MenuIcon from "@/app/components/ui/MenuIcon";
import { useGSAP, gsap } from "@/lib/gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const topLine = useRef(null);
  const middleLine = useRef(null);
  const bottomLine = useRef(null);

  const { contextSafe } = useGSAP();

  const toggleMenu = contextSafe(() => {
    setIsOpen((prev) => !prev);

    if (!isOpen) {
      // Animate to X
      gsap.to(topLine.current, {
        attr: { y1: 4, y2: 20, x1: 1.2, x2: 22.8 },
        duration: 0.3,
      });
      gsap.to(middleLine.current, {
        attr: { opacity: 0 },
        duration: 0.3,
      });
      gsap.to(bottomLine.current, {
        attr: { y1: 20, y2: 4, x1: 1.2, x2: 22.8 },
        duration: 0.3,
      });
    } else {
      // Animate to hamburger
      gsap.to(topLine.current, {
        attr: { y1: 4, y2: 4, x1: 1.2, x2: 22.8 },
        duration: 0.3,
      });
      gsap.to(middleLine.current, {
        attr: {
          y1: 12,
          y2: 12,
          x1: 1.2,
          x2: 22.8,
          opacity: 1,
        },
        duration: 0.3,
      });
      gsap.to(bottomLine.current, {
        attr: { y1: 20, y2: 20, x1: 1.2, x2: 22.8 },
        duration: 0.3,
      });
    }
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Home
          </a>
          <button
            className="text-neutral-400 hover:text-white transition-colors focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
            onClick={() => toggleMenu()}
          >
            <MenuIcon
              topLine={topLine}
              middleLine={middleLine}
              bottomLine={bottomLine}
              className="size-6 text-white"
            />
          </button>

          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
