"use client"

import type React from "react"
import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface VehicleFormProps {
  onCancel?: () => void
  onSuccess?: () => void
}

export function VehicleForm({ onCancel, onSuccess }: VehicleFormProps = {}) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    nome: "",
    placa: "",
    categoria: "",
    marca: "",
  })

  const resetForm = () => {
    setFormData({
      nome: "",
      placa: "",
      categoria: "",
      marca: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null

      const payload = {
        model: formData.nome,
        plate: formData.placa,
        category: formData.categoria,
        brand: formData.marca,
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/veiculos/cadastrar-veiculo`,
        payload,
        token
          ? {
            headers: { Authorization: `Bearer ${token}` },
          }
          : undefined,
      )

      resetForm()
      toast?.({ description: "cadastro realizado com sucesso!", variant: "success" })
      onSuccess?.()
    } catch (error: any) {
      const msg = error?.response?.data?.message || "Erro ao cadastrar veículo"
      toast?.({ description: String(msg) })
    }
  }

  const handleCancel = () => {
    resetForm()
    onCancel?.()
  }

  // Renderização padrão do formulário
  return (
    <Card className=" max-w-full h-250 mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-900">
          Cadastrar Veículo
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="modelo" className="text-sm font-medium text-gray-700">Modelo</Label>
              <Input
                id="modelo"
                placeholder="Ex.: Volvo FH 540"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col space-y-1">
              <Label htmlFor="placa" className="text-sm font-medium text-gray-700">Placa</Label>
              <Input
                id="placa"
                placeholder="Ex.: ABC-1234"
                value={formData.placa}
                onChange={(e) => handleInputChange("placa", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="categoria" className="text-sm font-medium text-gray-700">Categoria</Label>
              <Input
                id="categoria"
                placeholder="Ex.: Caminhão"
                value={formData.categoria}
                onChange={(e) => handleInputChange("categoria", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col space-y-1">
              <Label htmlFor="marca" className="text-sm font-medium text-gray-700">Marca</Label>
              <Input
                id="marca"
                placeholder="Ex.: Volvo"
                value={formData.marca}
                onChange={(e) => handleInputChange("marca", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="px-8 py-2 h-10 border-yellow-300 text-gray-700 hover:bg-gray-50 bg-transparent"
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