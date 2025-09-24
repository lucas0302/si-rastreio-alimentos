"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ClientForm() {
  const [formData, setFormData] = useState({
    codigo: "",
    nome: "",
    razaoSocial: "",
    cnpjCpf: "",
    inscEstadual: "",
    telefone: "",
    email: "",
    cep: "",
    logadouro: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
    formaPagamento: "",
    prazoPagamento: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Client data:", formData)
    // Handle form submission
  }

  const handleCancel = () => {
    setFormData({
      codigo: "",
      nome: "",
      razaoSocial: "",
      cnpjCpf: "",
      inscEstadual: "",
      telefone: "",
      email: "",
      cep: "",
      logadouro: "",
      numero: "",
      complemento: "",
      cidade: "",
      estado: "",
      formaPagamento: "",
      prazoPagamento: "",
    })
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-900">Cadastrar Cliente</CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
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
                placeholder="Nome"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <Input
                placeholder="Razão Social"
                value={formData.razaoSocial}
                onChange={(e) => handleInputChange("razaoSocial", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="CNPJ/CPF"
                value={formData.cnpjCpf}
                onChange={(e) => handleInputChange("cnpjCpf", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <Input
                placeholder="Insc. Estadual"
                value={formData.inscEstadual}
                onChange={(e) => handleInputChange("inscEstadual", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contato</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={(e) => handleInputChange("telefone", e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Endereço</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Input
                    placeholder="CEP"
                    value={formData.cep}
                    onChange={(e) => handleInputChange("cep", e.target.value)}
                    className="h-12 text-base border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Logadouro"
                    value={formData.logadouro}
                    onChange={(e) => handleInputChange("logadouro", e.target.value)}
                    className="h-12 text-base border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Número"
                    value={formData.numero}
                    onChange={(e) => handleInputChange("numero", e.target.value)}
                    className="h-12 text-base border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Input
                    placeholder="Complemento"
                    value={formData.complemento}
                    onChange={(e) => handleInputChange("complemento", e.target.value)}
                    className="h-12 text-base border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Cidade"
                    value={formData.cidade}
                    onChange={(e) => handleInputChange("cidade", e.target.value)}
                    className="h-12 text-base border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Estado"
                    value={formData.estado}
                    onChange={(e) => handleInputChange("estado", e.target.value)}
                    className="h-12 text-base border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Pagamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="Forma de pagamento"
                  value={formData.formaPagamento}
                  onChange={(e) => handleInputChange("formaPagamento", e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <Input
                  placeholder="Prazo de pagamento"
                  value={formData.prazoPagamento}
                  onChange={(e) => handleInputChange("prazoPagamento", e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                />
              </div>
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
            <Button type="submit" className="px-8 py-2 h-10 bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
              Salvar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
