import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex h-5 mt-4 text-xl hover:text-red-800 cursor-pointer items-center justify-center">
      Made with by&nbsp;
      <Link className=" underline" href="/">
        Yavuz Yalçınkaya
      </Link>
    </footer>
  );
};

export default Footer;
