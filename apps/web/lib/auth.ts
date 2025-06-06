"use server";

import { redirect } from "next/navigation";
import { BACKEND_URL } from "./constant";
import { FormState, SignUpFormSchema } from "./type";

export async function signUp(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validationFields = SignUpFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors,
    };
  }

  const respone = await fetch(`${BACKEND_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validationFields.data),
  });

  if (respone.ok) {
    redirect("/auth/signin");
  } else {
    return {
      message:
        respone.status === 409
          ? "The user is already existed!"
          : respone.statusText,
    };
  }
}
