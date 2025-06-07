"use server";

import { redirect } from "next/navigation";
import { BACKEND_URL } from "./constant";
import { FormState, LoginFormSchema, SignUpFormSchema } from "./type";
import { createSession, getSession, updateTokens } from "./session";

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

export async function signIn(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validationFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationFields.success)
    return {
      error: validationFields.error.flatten().fieldErrors,
    };

  const response = await fetch(`${BACKEND_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(validationFields.data),
  });

  if (response.ok) {
    const result = await response.json();
    await createSession({
      user: {
        id: result.id,
        name: result.name,
      },
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });

    redirect("/");
  } else {
    return {
      message:
        response.status === 401 ? "Invalid Credentials" : response.statusText,
    };
  }
}

export const refreshToken = async (oldRefreshToken: string) => {
  try {
    const session = await getSession();

    const response = await fetch(`${BACKEND_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.accessToken}`,
      },
      body: JSON.stringify({
        refresh: oldRefreshToken,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to refresh token.");
    }

    const { accessToken, refreshToken } = await response.json();
    // Updating the session with new tokens
    const updateRes = await fetch("http://localhost:3000/api/auth/update", {
      method: "POST",
      body: JSON.stringify({
        accessToken,
        refreshToken,
      }),
    });

    if (!updateRes.ok) throw new Error("Failed to update tokens");

    return accessToken;
  } catch (error) {
    console.error("Refresh token failed: ", error);
    return null;
  }
};
