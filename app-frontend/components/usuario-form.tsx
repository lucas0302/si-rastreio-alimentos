"use client"

import type React from "react"
import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "../components/ui/use-toast"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function UsuarioForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    nome: "",
    username: "",
    perfil: "",
    senha: "",
    confirmarSenha: "",
  })
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.senha !== formData.confirmarSenha) {
      toast?.({
        title: "Erro",
        description: "As senhas não coincidem!",
      })
      return
    }

    try {
      const token = localStorage.getItem("token") // recupera o token salvo no login

      if (!token) {
        toast?.({
          title: "Token não encontrado",
          description: "Faça login novamente.",
        })
        return
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/usuarios/cadastro-usuario`,
        {
          name: formData.nome,
          username: formData.username,
          password: formData.senha,
          role: formData.perfil,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setIsSuccess(true)
      toast?.({
        title: "Sucesso",
        description: "Usuário cadastrado com sucesso!",
      })

      setFormData({
        nome: "",
        username: "",
        perfil: "",
        senha: "",
        confirmarSenha: "",
      })
    } catch (error: any) {
      console.error("Erro ao cadastrar usuário:", error.response?.data || error)
      const msg = error.response?.data?.message || "Erro ao cadastrar usuário"
      toast?.({
        title: "Erro",
        description: msg,
      })
    }
  }

  const handleCancel = () => {
    setFormData({
      nome: "",
      username: "",
      perfil: "",
      senha: "",
      confirmarSenha: "",
    })
  }

  const handleRegisterAnother = () => {
    setIsSuccess(false)
  }

  if (isSuccess) {
    return (
      <Card className="max-w-md mx-auto text-center animate-in fade-in-50">
        <CardHeader>
          <CheckCircle2
            className="mx-auto h-16 w-16 text-green-500"
            strokeWidth={1.5}
          />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold">Cadastro Realizado!</CardTitle>
            <p className="text-gray-600">Usuário adicionado com sucesso!</p>
          </div>
          <Button
            onClick={handleRegisterAnother}
            className="w-full h-11 bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
          >
            Cadastrar Outro Usuário
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full h-screen bg-gray-50">
      <Card className="w-full h-full rounded-none border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-900">Cadastrar Usuário</CardTitle>
        </CardHeader>
        <CardContent className="p-8 h-full flex flex-col justify-between">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 flex-grow flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <Label htmlFor="nome" className="mb-2">Nome</Label>
                <Input
                  id="nome"
                  placeholder="Digite seu nome"
                  value={formData.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <Label htmlFor="username" className="mb-2">Username</Label>
                <Input
                  id="username"
                  placeholder="Digite seu username"
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <Label htmlFor="perfil" className="mb-2">Cargo</Label>
                <Select
                  onValueChange={(value) => handleInputChange("perfil", value)}
                  value={formData.perfil}
                >
                  <SelectTrigger className="!h-12 w-full rounded-lg border border-gray-300 text-base flex items-center px-3 bg-white hover:border-gray-400">
                    <SelectValue placeholder="Selecione o Cargo" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border border-gray-300 bg-white shadow-md w-full ">
                    <SelectItem value="admin" className="px-4 py-2 hover:bg-gray-100 rounded-md">
                      Admin
                    </SelectItem>
                    <SelectItem value="user" className="px-4 py-2 hover:bg-gray-100 rounded-md">
                      User
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col">
                <Label htmlFor="senha" className="mb-2">Senha</Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={formData.senha}
                  onChange={(e) => handleInputChange("senha", e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <Label htmlFor="confirmarSenha" className="mb-2">Confirmar Senha</Label>
                <Input
                  id="confirmarSenha"
                  type="password"
                  placeholder="Confirme sua senha"
                  value={formData.confirmarSenha}
                  onChange={(e) => handleInputChange("confirmarSenha", e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="px-8 py-2 h-10 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="px-8 py-2 h-10 bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
              >
                Salvar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
