import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import Link from "next/link";
import React from "react";

const SignInForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="john@gmail.com"
            type="email"
          ></Input>
        </div>

        <div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password"></Input>
          </div>

          <div className="text-sm underline mt-2">
            <Link href="#">Forgot your password?</Link>
          </div>
        </div>

        <SubmitButton>Sign In</SubmitButton>
      </div>
    </form>
  );
};

export default SignInForm;
