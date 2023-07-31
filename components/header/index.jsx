"use client";
import React, { useState, useEffect } from "react";
import { FaPlayCircle, FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Menü açıkken scroll'u engelle
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      // Menü kapalıysa scroll'u aktifleştir
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className="flex h-20 items-center z-10 bg-gray-900 justify-between w-full p-4 text-white border-b border-solid border-white">
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold text-white"
        >
          <FaPlayCircle color="white" /> BRENTFILMS
        </Link>
      </div>
      <div className="hidden md:flex gap-5">
        <Link href="/movie" className="font-semibold hover:opacity-75">
          Movies
        </Link>
        <Link href="/series" className="font-semibold hover:opacity-75">
          Series
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-5 cursor-pointer mr-16">
        <AiOutlineSearch color="white" size={28} className="hover:scale-110" />
        <IoNotificationsOutline size={28} className="hover:scale-110" />
        <FaUserCircle color="white" size={28} className="hover:scale-110" />
      </div>

      {/* // Mobile Menu */}

      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer duration-300 z-50 md:hidden"
      >
        {open ? (
          <FaTimes size={40} color="white" />
        ) : (
          <FaBars size={40} color="white" />
        )}
      </div>
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed top-0 right-0 left-0 w-screen h-screen z-40"
          >
            <ul className="flex flex-col justify-center items-center uppercase absolute top-0 left-0 w-full h-screen bg-gray-900 text-white font-semibold">
              <Link
                href="/movies"
                className="px-4 cursor-pointer  py-6 text-4xl"
                onClick={() => setOpen(!open)}
              >
                Movies
              </Link>
              <Link
                href="/series"
                className="px-4 cursor-pointer  py-6 text-4xl"
                onClick={() => setOpen(!open)}
              >
                Series
              </Link>
              <Link
                href="/"
                className="px-4 cursor-pointer  py-6 text-4xl"
                onClick={() => setOpen(!open)}
              >
                Notifications
              </Link>
              <Link
                href="/"
                className="px-4 cursor-pointer  py-6 text-4xl"
                onClick={() => setOpen(!open)}
              >
                User
              </Link>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
