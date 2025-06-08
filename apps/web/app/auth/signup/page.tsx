import Link from "next/link";
import React from "react";
import SignUpForm from "./signUpForm";
import { Button } from "@/components/ui/button";
import { BACKEND_URL } from "@/lib/constant";

const SignUpPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl font-bold mb-4">Sign In Page</h1>
      <div className="w-full">
        <SignUpForm />
      </div>
      <div className="flex justify-between text-sm mt-2">
        <p className="mr-1">Already have an account?</p>
        <Link href={"/auth/signin"} className="underline">
          Sign In
        </Link>
      </div>
      <hr className="w-full my-3" />
      <Button asChild className="w-full">
        <a href={`${BACKEND_URL}/auth/google/login`}>Sign In With Google</a>
      </Button>
    </div>
  );
};

export default SignUpPage;
