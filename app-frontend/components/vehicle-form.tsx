"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface VehicleFormProps {
  onCancel?: () => void
  onSuccess?: () => void
}

export function VehicleForm({ onCancel, onSuccess }: VehicleFormProps = {}) {
  const [formData, setFormData] = useState({
    nome: "",
    placa: "",
    categoria: "",
  })

  const resetForm = () => {
    setFormData({
      nome: "",
      placa: "",
      categoria: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Vehicle data:", formData)
    // Handle form submission
    resetForm()
    onSuccess?.()
  }

  const handleCancel = () => {
    resetForm()
    onCancel?.()
  }

  return (
    <Card className=" max-w-full h-250 mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-900">Cadastrar Veículo</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Nome"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <Input
                placeholder="Placa"
                value={formData.placa}
                onChange={(e) => handleInputChange("placa", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Categoria"
                value={formData.categoria}
                onChange={(e) => handleInputChange("categoria", e.target.value)}
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
            <Button type="submit" className="px-8 py-2 h-10 bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
              Salvar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
