"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      // Set cookie for authentication
      document.cookie = "isAuthenticated=true; path=/; max-age=86400" // 24 hours
      router.push("/dashboard")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-0">
      <CardContent className="p-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="w-24 h-24 rounded-full border-4 border-yellow-400 flex items-center justify-center bg-white">
            <div className="w-16 h-16 relative">
              <Image src="/truck-logo.png" alt="Logo" fill className="object-contain" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Usuário"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
                required
              />
              <Input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
                required
              />
            </div>

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
  )
}
