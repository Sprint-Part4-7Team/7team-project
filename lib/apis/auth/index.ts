import { LoginInputValue } from "@/app/(auth)/login/_components/login-form";
import { SignUpInputValue } from "@/app/(auth)/signup/_components/signup-form";

import { myFetch } from "../myFetch";
import {
  PostTeamIdAuthSigninResponse,
  PostTeamIdAuthSignupResponse,
} from "../type";

// NOTE - 로그인
export async function login(
  data: LoginInputValue,
): Promise<
  | PostTeamIdAuthSigninResponse
  | { details: Record<string, { message: string }> }
> {
  try {
    const response = await myFetch<PostTeamIdAuthSigninResponse>(
      `${process.env.NEXT_PUBLIC_KKOM_KKOM_URL}/auth/signIn`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        withCredentials: true,
      },
    );

    return response;
  } catch (error) {
    throw error;
  }
}

// NOTE - 회원가입
export async function signUp(
  data: SignUpInputValue,
): Promise<PostTeamIdAuthSignupResponse | string> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_KKOM_KKOM_URL}/auth/signUp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      if (response.status === 400) {
        return errorData.message;
      }
      throw new Error("회원가입을 다시 시도해 주세요");
    }
    const result: PostTeamIdAuthSignupResponse = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return "회원가입을 다시 시도해 주세요";
  }
}
