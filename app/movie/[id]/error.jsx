"use client";
import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <div className="flex h-full items-center flex-col text-white justify-center">
      <h1>We couldn&apos;t find the movie you looking for!</h1>
      <Link className="underline text-xl mt-2" href="/">
        Go home
      </Link>
    </div>
  );
};

export default Error;
