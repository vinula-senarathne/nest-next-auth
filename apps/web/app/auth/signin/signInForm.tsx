"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submitButton";
import { signIn } from "@/lib/auth";
import Link from "next/link";
import React, { useActionState } from "react";

const SignInForm = () => {
  const [state, action] = useActionState(signIn, undefined);
  return (
    <form action={action}>
      <div className="flex flex-col gap-5">
        {state?.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="john@gmail.com"
              type="email"
            ></Input>
          </div>

          {state?.error?.email && (
            <p className="text-sm text-red-500">{state.error.email}</p>
          )}
        </div>

        <div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password"></Input>
            </div>

            {state?.error?.password && (
              <p className="text-sm text-red-500">{state.error.password}</p>
            )}
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
