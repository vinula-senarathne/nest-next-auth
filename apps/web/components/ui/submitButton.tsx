"use client";

import React, { PropsWithChildren } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "./button";

const SubmitButton = ({ children }: PropsWithChildren) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} className="w-full">
      {pending ? "Submitting..." : children}
    </Button>
  );
};

export default SubmitButton;
