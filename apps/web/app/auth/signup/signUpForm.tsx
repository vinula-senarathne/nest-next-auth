"use client";

import React, { useActionState } from "react";

import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/submitButton";
import { signUp } from "@/lib/auth";
import { Label } from "@/components/ui/label";

const SignUpForm = () => {
  const [state, action] = useActionState(signUp, undefined);

  return (
    <form action={action}>
      <div className="flex flex-col gap-5">
        {state?.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-3">
            <Label>Name</Label>
            <Input id="name" name="name" placeholder="John Doe"></Input>
          </div>
          {state?.error?.name && (
            <p className="text-sm text-red-500">{state.error.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-3">
            <Label>Email</Label>
            <Input id="email" name="email" placeholder="john@gmail.com"></Input>
          </div>
          {state?.error?.email && (
            <p className="text-sm text-red-500">{state.error.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-3">
            <Label>Password</Label>
            <Input type="password" id="password" name="password"></Input>
          </div>
          {state?.error?.password && (
            <div className="text-sm text-red-500">
              <p>Password must:</p>
              <ul>
                {state.error.password.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <SubmitButton>Sign Up</SubmitButton>
      </div>
    </form>
  );
};

export default SignUpForm;
