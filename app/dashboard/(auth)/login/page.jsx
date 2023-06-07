"use client";
import { signIn } from "next-auth/react";
import React from "react";

console.log(process.env.NEXT_PUBLIC_NEXTAUTH_URL);
const Login = () => {
  return (
    <div className="h-full">
      <button onClick={() => signIn("google")}>Login with google</button>
    </div>
  );
};

export default Login;
