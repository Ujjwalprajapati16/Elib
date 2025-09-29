"use client";

import { useMutation } from "@tanstack/react-query";
import {User} from "@/types/index.ts";

const LOGIN_URL = `${process.env.NEXT_PUBLIC_API_URL}users/login`;
const SIGNUP_URL = `${process.env.NEXT_PUBLIC_API_URL}users/register`;


type AuthResponse = {
  token: string;
  user: { id: string; username: string; email: string; role: string };
};

export function useAuth() {
  // Login mutation
  const loginMutation = useMutation<AuthResponse, Error, User>(
    async (data: User) => {
      const res = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Login failed");
      }
      return res.json();
    }
  );

  // Signup mutation
  const signupMutation = useMutation<AuthResponse, Error, User>(
    async (data: User) => {
      const res = await fetch(SIGNUP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Signup failed");
      }
      return res.json();
    }
  );

  return {
    loginMutation,
    signupMutation,
  };
}
