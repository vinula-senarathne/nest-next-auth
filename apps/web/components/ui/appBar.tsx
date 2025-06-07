import Link from "next/link";
import React from "react";
import SignInButton from "../signInButton";

const AppBar = () => {
  return (
    <div className="py-4 px-10 shadow flex gap-3 bg-black text-white">
      <Link href={"/"}>Home</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/profile"}>Profile</Link>
      <SignInButton />
    </div>
  );
};

export default AppBar;
