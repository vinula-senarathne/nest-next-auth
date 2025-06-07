import Link from "next/link";
import React from "react";
import SignInButton from "../signInButton";

const AppBar = () => {
  return (
    <div className="p-2 shadow flex gap-3 bg-gradient-to-br from-blue-400 to-cyan-600 text-white">
      <Link href={"/"}>Home</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <SignInButton />
    </div>
  );
};

export default AppBar;
