import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center">
      Made with by&nbsp;
      <Link className=" underline" href="/">
        Yavuz Yalçınkaya
      </Link>
    </footer>
  );
};

export default Footer;
