"use client"

import type React from "react"

import axios from 'axios'; // 1. Importar axios

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react";

type FormDataType = {
  code: number | null;
  name: string;
  price: string;
  weight: string;
  unit: string;
  expiration: string;
  expiration_unit: string;
  informacoesAdicionais: string;
};

export function ProductForm() {
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState<FormDataType>({
    code: null,
    name: "",
    price: "",
    weight: "",
    unit: "",
    expiration: "",
    expiration_unit: "",
    informacoesAdicionais: "",
  })

  type FormField = keyof FormDataType;

  const handleInputChange = (field: FormField, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "code" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/produtos/cadastrar-produto`,
        formData
      );

      setIsSuccess(true)
      return response.data;
    } catch (err) {
      // 4. Tratamento de erro aprimorado para o axios
      // Axios lança um erro para status 4xx/5xx, que é capturado aqui.
      // A mensagem de erro da API geralmente está em err.response.data.message
      let errorMessage = 'Erro ao cadastrar produto';
      if (axios.isAxiosError(err) && err.response) {
        errorMessage = err.response.data.message || 'Falha no cadastro do produto';
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      setError(errorMessage);
    }
  };

  const handleCancel = () => {
    setFormData({
      code: null,
      name: "",
      price: "",
      weight: "",
      unit: "",
      expiration: "",
      expiration_unit: "",
      informacoesAdicionais: "",
    })
  }

  const handleRegisterAnother = () => {
    setIsSuccess(false) // Volta para a tela do formulário
    handleCancel()
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
              O produto foi adicionado com sucesso!
            </p>
          </div>
          <Button
            onClick={handleRegisterAnother}
            className="w-full h-11 bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
          >
            Cadastrar Outro Produto
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-full h-250 mx-auto">
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
                value={formData.code ?? ""}
                onChange={(e) => handleInputChange("code", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <Input
                placeholder="Descrição"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <Input
                placeholder="Preço (R$)"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Peso"
                value={formData.weight}
                onChange={(e) => handleInputChange("weight", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <Select value={formData.unit} onValueChange={(value) => handleInputChange("unit", value)}>
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
                value={formData.expiration}
                onChange={(e) => handleInputChange("expiration", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <Select value={formData.expiration_unit} onValueChange={(value) => handleInputChange("expiration_unit", value)}>
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
