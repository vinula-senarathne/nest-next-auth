import React from "react";
import SignInForm from "./signInForm";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl font-bold mb-4">Sign In Page</h1>
      <div className="w-full">
        <SignInForm />
      </div>
      <div className="flex justify-between text-sm mt-5">
        <p className="mr-1">Don't have an account?</p>
        <Link href={"/auth/signup"} className="underline">
          Sign Up
        </Link>
      </div>{" "}
    </div>
  );
};

export default SignInPage;
