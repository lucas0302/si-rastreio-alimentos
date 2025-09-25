"use client";

import type React from "react";
import Logo from "@/public/truck-logo.png";

import { useState } from "react";
import axios from 'axios'; // 1. Importar axios
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
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth`,
        { username, password }
      );

      // 3. A resposta de sucesso já vem no campo 'data'
      const data = response.data;

      // Armazenar o token JWT
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({
        id: data.id,
        name: data.name,
        username: data.username,
        role: data.role
      }));

      // Código temporário que seta o cookie de autenticação
      document.cookie = "isAuthenticated=true; path=/";

      router.push("/dashboard")
      console.log("Comando executado")

    } catch (err) {
      // 4. Tratamento de erro aprimorado para o axios
      // Axios lança um erro para status 4xx/5xx, que é capturado aqui.
      // A mensagem de erro da API geralmente está em err.response.data.message
      let errorMessage = 'Erro ao fazer login';
      if (axios.isAxiosError(err) && err.response) {
        errorMessage = err.response.data.message || 'Falha na autenticação';
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-0">
      <CardContent className="p-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white">
            <div className="w-48 h-48 relative">
              <Image src={Logo} alt="Logo" fill className="object-contain" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
                required
              />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
                required
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}

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