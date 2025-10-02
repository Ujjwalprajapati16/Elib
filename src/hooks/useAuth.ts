"use client";

import { AxiosError } from "axios";
import { toast } from "sonner";
import api from "@/lib/axios"; 
import { ApiError, AuthResponse, User } from "@/types";

export function useAuth() {
  const login = async (data: User): Promise<AuthResponse> => {
    try {
      const res = await api.post<AuthResponse>("users/login", {
        email: data.email,
        password: data.password,
      });

      console.log(res.data);

      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Login successful!");
      return res.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError<ApiError>) {
        const message =
          error.response?.data?.message ||
          error.message ||
          "Login failed. Please try again.";
        toast.error(message);
        throw new Error(message);
      }

      toast.error("An unexpected error occurred during login.");
      throw new Error("Unexpected error");
    }
  };

  const signup = async (data: User): Promise<AuthResponse> => {
    try {
      const res = await api.post<AuthResponse>("users/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
      });

      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Signup successful!");
      return res.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError<ApiError>) {
        const message =
          error.response?.data?.message ||
          error.message ||
          "Signup failed. Please try again.";
        toast.error(message);
        throw new Error(message);
      }

      toast.error("An unexpected error occurred during signup.");
      throw new Error("Unexpected error");
    }
  };

  return { login, signup };
}
