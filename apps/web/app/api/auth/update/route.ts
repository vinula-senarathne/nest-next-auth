import { updateTokens } from "@/lib/session";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { accessToken, refreshToken } = body;

    console.log("accessToken: ", accessToken);
    console.log("refreshToken: ", refreshToken);

    if (!accessToken || !refreshToken)
      return new Response("Provide tokens", { status: 401 });

    await updateTokens({ accessToken, refreshToken });
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Failed to update tokens: ", error);
  }
}
