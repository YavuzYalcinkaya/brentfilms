import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import "./style.css";

const Header = () => {
  return (
    <header className="header h-full w-full container fluid">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold text-slate-100"
        >
          <FaPlayCircle /> BRENTFILMS
        </Link>
        <nav className="flex gap-12  text-white font-bold uppercase">
          <Link href="/">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/">Kids</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
