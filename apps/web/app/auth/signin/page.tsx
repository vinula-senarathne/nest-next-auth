import React from "react";
import SignInForm from "./signInForm";
import Link from "next/link";
import { BACKEND_URL } from "@/lib/constant";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl font-bold mb-4">Sign In Page</h1>
      <div className="w-full">
        <SignInForm />
      </div>
      <div className="flex justify-between text-sm mt-2">
        <p className="mr-1">Don't have an account?</p>
        <Link href={"/auth/signup"} className="underline">
          Sign Up
        </Link>
      </div>
      <hr className="w-full my-3" />
      <Button asChild className="w-full">
        <a href={`${BACKEND_URL}/auth/google/login`}>Sign In With Google</a>
      </Button>
    </div>
  );
};

export default SignInPage;
