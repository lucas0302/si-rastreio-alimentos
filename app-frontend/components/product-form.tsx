"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductFormProps {
  onCancel?: () => void
  onSuccess?: () => void
}

export function ProductForm({ onCancel, onSuccess }: ProductFormProps = {}) {
  const [formData, setFormData] = useState({
    codigo: "",
    descricao: "",
    preco: "",
    peso: "",
    unidade: "",
    validade: "",
    unidadeTempo: "",
    informacoesAdicionais: "",
  })

  const resetForm = () => {
    setFormData({
      codigo: "",
      descricao: "",
      preco: "",
      peso: "",
      unidade: "",
      validade: "",
      unidadeTempo: "",
      informacoesAdicionais: "",
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
    console.log("Product data:", formData)
    // Handle form submission
    resetForm()
    onSuccess?.()
  }

  const handleCancel = () => {
    resetForm()
    onCancel?.()
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-900">Cadastrar Produto</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Input
                placeholder="Código"
                value={formData.codigo}
                onChange={(e) => handleInputChange("codigo", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <Input
                placeholder="Descrição"
                value={formData.descricao}
                onChange={(e) => handleInputChange("descricao", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <Select value={formData.preco} onValueChange={(value) => handleInputChange("preco", value)}>
                <SelectTrigger className="h-12 text-base border-gray-300 rounded-lg">
                  <SelectValue placeholder="Preço (R$)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50">R$ 0 - 50</SelectItem>
                  <SelectItem value="50-100">R$ 50 - 100</SelectItem>
                  <SelectItem value="100-200">R$ 100 - 200</SelectItem>
                  <SelectItem value="200+">R$ 200+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Peso"
                value={formData.peso}
                onChange={(e) => handleInputChange("peso", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <Select value={formData.unidade} onValueChange={(value) => handleInputChange("unidade", value)}>
                <SelectTrigger className="h-12 text-base border-gray-300 rounded-lg">
                  <SelectValue placeholder="Unidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">Quilograma (kg)</SelectItem>
                  <SelectItem value="g">Grama (g)</SelectItem>
                  <SelectItem value="l">Litro (l)</SelectItem>
                  <SelectItem value="ml">Mililitro (ml)</SelectItem>
                  <SelectItem value="un">Unidade</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Third row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Validade"
                value={formData.validade}
                onChange={(e) => handleInputChange("validade", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <Select value={formData.unidadeTempo} onValueChange={(value) => handleInputChange("unidadeTempo", value)}>
                <SelectTrigger className="h-12 text-base border-gray-300 rounded-lg">
                  <SelectValue placeholder="Unidade de tempo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dias">Dias</SelectItem>
                  <SelectItem value="semanas">Semanas</SelectItem>
                  <SelectItem value="meses">Meses</SelectItem>
                  <SelectItem value="anos">Anos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Additional information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Informações adicionais</label>
            <Textarea
              placeholder="Digite informações adicionais sobre o produto..."
              value={formData.informacoesAdicionais}
              onChange={(e) => handleInputChange("informacoesAdicionais", e.target.value)}
              className="min-h-[120px] text-base border-gray-300 rounded-lg resize-none"
            />
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
