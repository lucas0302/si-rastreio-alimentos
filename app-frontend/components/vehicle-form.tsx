"use client"

import type React from "react"
import { useState } from "react"
import axios from "axios"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function VehicleForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    model: "",
    plate: "",
    category: "",
    brand: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const token = localStorage.getItem("token")
      if (!token) {
        throw new Error("No authentication token found")
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/veiculos/cadastrar-veiculo`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      )

      // Em vez de apenas um toast, ativamos a tela de sucesso
      setIsSuccess(true)

      // Resetar o formulário para um próximo cadastro
      setFormData({
        model: "",
        plate: "",
        category: "",
        brand: "",
      })
    } catch (error) {
      console.error("Error creating vehicle:", error)
      toast({
        title: "Erro",
        description:
          "Não foi possível cadastrar o veículo. Por favor, tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegisterAnother = () => {
    setIsSuccess(false) // Volta para a tela do formulário
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
            <CardTitle className="text-2xl font-bold">
              Cadastro Realizado!
            </CardTitle>
            <p className="text-gray-600">
              O veículo foi adicionado com sucesso!
            </p>
          </div>
          <Button
            onClick={handleRegisterAnother}
            className="w-full h-11 bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
          >
            Cadastrar Outro Veículo
          </Button>
        </CardContent>
      </Card>
    )
  }

  // Renderização padrão do formulário
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-900">
          Cadastrar Veículo
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Modelo"
                value={formData.model}
                onChange={(e) => handleInputChange("model", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <Input
                placeholder="Placa"
                value={formData.plate}
                onChange={(e) => handleInputChange("plate", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Marca"
                value={formData.brand}
                onChange={(e) => handleInputChange("brand", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <Input
                placeholder="Categoria"
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setFormData({
                  model: "",
                  plate: "",
                  category: "",
                  brand: "",
                })
              }
              className="px-8 py-2 h-10 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="px-8 py-2 h-10 bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
              disabled={isLoading}
            >
              {isLoading ? "Salvando..." : "Salvar"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}