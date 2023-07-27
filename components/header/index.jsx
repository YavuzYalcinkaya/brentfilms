"use client";
import React, { useState } from "react";
import { FaPlayCircle, FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-20 items-center z-10 bg-red-400 justify-between w-full p-4 text-black">
      <div className="flex  gap-10 items-center">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold text-black"
        >
          <FaPlayCircle /> BRENTFILMS
        </Link>
        <div className="hidden md:flex gap-5">
          <Link href="/movie" className="font-semibold">
            Movies
          </Link>
          <Link href="/series" className="font-semibold">
            Series
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-5 cursor-pointer mr-16">
        <AiOutlineSearch size={25} />
        <GrNotification size={25} />
        <FaUserCircle size={25} />
      </div>

      {/* // Mobile Menu */}

      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer duration-300 z-50 pr-4 md:hidden"
      >
        {open ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {open && (
        <ul className="flex flex-col justify-center items-center uppercase absolute top-0 left-0 w-full h-screen bg-white text-black font-semibold">
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
      )}
    </div>
  );
}
