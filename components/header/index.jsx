"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaPlayCircle, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex h-20 items-center justify-around mx-auto py-8">
      <Link
        href="/"
        className="flex items-center gap-3 text-2xl font-bold text-slate-100"
      >
        <FaPlayCircle /> BRENTFILMS
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden ">
          <div
            className="HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <FaBars className=" text-xl cursor-pointer" />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <FaTimes className="cursor-pointer w-6 h-6" />
            </div>
            <ul className="flex flex-col  gap-12 text-white text-2xl font-bold uppercase">
              <Link
                href="/"
                className="hover:opacity-50 border-b-2 border-white"
              >
                Movies
              </Link>

              <Link
                href="/series"
                className="hover:opacity-50 border-b-2 border-white"
              >
                Series
              </Link>

              <Link
                href="/"
                className="hover:opacity-50 border-b-2 border-white"
              >
                Dashboard
              </Link>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex font-bold text-xl uppercase">
          <Link href="/" className="hover:opacity-50">
            Movies
          </Link>

          <Link href="/series" className="hover:opacity-50">
            Series
          </Link>

          <Link href="/dashboard" className="hover:opacity-50">
            Dashboard
          </Link>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #000;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

// import React, { useState } from "react";
// import Link from "next/link";
// import { FaPlayCircle, FaTimes, FaBars } from "react-icons/fa";

// import { Transition } from "@headlessui/react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="">
//       <div className="flex h-20 items-center justify-around ">
//         <Link
//           href="/"
//           className="flex items-center gap-3 text-2xl font-bold text-slate-100"
//         >
//           <FaPlayCircle /> BRENTFILMS
//         </Link>

//         <div className="hidden md:block ">
//           <ul className="flex gap-4 text-white text-xl font-bold uppercase">
//             <Link href="/" className="hover:opacity-50">
//               Movies
//             </Link>

//             <Link href="/" className="hover:opacity-50">
//               Series
//             </Link>

//             <Link href="/" className="hover:opacity-50">
//               Kids
//             </Link>
//           </ul>
//         </div>
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setIsOpen(!isOpen)} type="button" className="">
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>
//       <Transition
//         show={isOpen}
//         enter="transition ease-out duration-100 transform"
//         enterFrom="opacity-0 scale-95"
//         enterTo="opacity-100 scale-100"
//         leave="transition ease-in duration-75 transform"
//         leaveFrom="opacity-100 scale-100"
//         leaveTo="opacity-0 scale-95"
//       >
//         <div className="flex md:hidden relative">
//           <ul className="bg-red-500 h-full justify-center items-center w-full flex flex-col right-0 absolute gap-2 text-white text-xl font-bold uppercase space-y-1">
//             <Link href="/">Movies</Link>

//             <Link href="/">Series</Link>

//             <Link href="/">Kids</Link>
//           </ul>
//         </div>
//       </Transition>
//     </nav>
//   );
// };

// export default Header;
