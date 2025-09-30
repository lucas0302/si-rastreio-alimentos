"use client";

import type React from "react";
import Logo from "@/public/truck-logo.png";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const baseURL = process.env.NEXT_PUBLIC_API_URL;
      if (!baseURL) throw new Error("NEXT_PUBLIC_API_URL não definido.");

      const response = await axios.post(
        `${baseURL}/auth`,
        { username, password },
        {
          timeout: 10000,
        }
      );

      const data = response.data;

      // Se vier JWT no body, guarde (opcional se você usar cookie HttpOnly)
      if (data?.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: data.id,
            name: data.name,
            username: data.username,
            role: data.role,
          })
        );
      }

      document.cookie = "isAuthenticated=true; path=/; max-age=86400; samesite=lax";

      // Agora pode redirecionar
      router.push("/dashboard");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.code === "ECONNABORTED") {
          setError("Tempo de conexão esgotado. Tente novamente.");
        } else if (err.code === "ERR_NETWORK") {
          setError("Não foi possível conectar ao servidor.");
        } else {
          setError(err.response?.data?.message || "Falha na autenticação.");
        }
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro inesperado ao fazer login.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-0">
      <CardContent className="p-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo (LCP) */}
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white">
            <div className="w-48 h-48 relative">
              <Image src={Logo} alt="Logo" fill className="object-contain" priority />
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col space-y-1">
                <label htmlFor="username" className="text-sm font-medium text-gray-700">
                  Usuário
                </label>
                <Input
                  id="username"
                  type="text"
                  placeholder="EX: julia.silva"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Senha
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="***********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            <Button
              type="submit"
              className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-base rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}