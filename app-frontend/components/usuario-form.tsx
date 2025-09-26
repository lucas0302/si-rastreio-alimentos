"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UsuarioForm() {
  const [formData, setFormData] = useState({
    nome: "",
    username: "",
    perfil: "",
    senha: "",
    confirmarSenha: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("User data:", formData)
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

  return (
    <div className="w-full h-screen bg-gray-50">
      <Card className="w-full h-full rounded-none border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-900">
            Cadastrar Usuário
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 h-full flex flex-col justify-between">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 flex-grow flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  placeholder="Digite seu nome"
                  value={formData.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex flex-col">
                <Label htmlFor="username">Username</Label>
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
                <Label htmlFor="perfil">Perfil</Label>
                <Select
                  onValueChange={(value) => handleInputChange("perfil", value)}
                  value={formData.perfil}
                >
                  <SelectTrigger className="h-12 rounded-lg border border-gray-300 text-base flex items-center px-3 bg-white hover:border-gray-400">
                    <SelectValue placeholder="Selecione o perfil" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border border-gray-300 bg-white shadow-md">
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
                <Label htmlFor="senha">Senha</Label>
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
                <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
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
