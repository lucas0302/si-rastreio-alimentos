"use client"

import type React from "react"
import { useState } from "react"
import InputMask from "react-input-mask"
import axios from "axios"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ClientFormProps {
  onCancel?: () => void
  onSuccess?: () => void
}

export function ClientForm({ onCancel, onSuccess }: ClientFormProps = {}) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    codigo: "#",
    nome: "",
    razaoSocial: "",
    cnpj: "",
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

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const resetForm = () => {
    setFormData({
      codigo: "#",
      nome: "",
      razaoSocial: "",
      cnpj: "",
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
    setErrors({})
  }

  const toDigits = (value: string) => value.replace(/\D/g, "")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    // Limpa o erro ao digitar
    setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const fullAddress = `${formData.logadouro}, ${formData.numero}${formData.complemento ? `, ${formData.complemento}` : ""} - CEP: ${formData.cep}`

    const payload = {
      name: formData.nome,
      email: formData.email,
      cnpj: toDigits(formData.cnpj),
      address: fullAddress,
      phone: toDigits(formData.telefone),
      identificationCode: formData.codigo,
      paymentMethod: formData.formaPagamento,
      paymentTern: formData.prazoPagamento,
      city: formData.cidade,
      state: formData.estado,
      legalName: formData.razaoSocial,
      stateRegistration: formData.inscEstadual,
    }

    try {
      const token = localStorage.getItem("token")
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/clientes/cadastro-cliente`, payload, { headers: { Authorization: `Bearer ${token}` } })
      toast?.({ description: "cadastro realizado com sucesso!", variant: "success" })
      resetForm()
      onSuccess?.()
    } catch (error: any) {
      const errMessages: { [key: string]: string } = {}

      const msg = error.response?.data?.message

      if (Array.isArray(msg)) {
        msg.forEach((m: string) => {
          if (m.includes("CNPJ")) errMessages.cnpj = m
          else if (m.includes("Email")) errMessages.email = m
          else if (m.includes("Telefone")) errMessages.telefone = m
          else if (m.includes("CÃƒÂ³digo")) errMessages.codigo = m
        })
      } else if (typeof msg === "string") {
        // Aqui pega a mensagem do back e coloca como erro geral
        errMessages.geral = msg
      } else {
        errMessages.geral = "Ocorreu um erro ao cadastrar o cliente."
      }

      setErrors(errMessages)
    }
  }

  const handleCancel = () => {
    resetForm()
    onCancel?.()
  }


  const showError = (field: string) => {
    return errors[field] ? (
      <span className="text-red-600 text-sm mt-1">{errors[field]}</span>
    ) : null
  }

  return (
    <Card className="max-w-full h-250 mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-gray-900">
          Cadastrar Cliente
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8 overflow-y-auto h-[calc(100vh-80px)]">
        {errors.geral && (
          <div className="mb-4 text-red-600 font-medium">{errors.geral}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col space-y-1">
              <label htmlFor="codigo" className="text-sm font-medium text-gray-700">
                Codigo Do Cliente
              </label>
              <Input
                id="codigo"
                placeholder="#12345"
                value={formData.codigo}
                onChange={(e) => handleInputChange("codigo", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
              {showError("codigo")}
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="nome" className="text-sm font-medium text-gray-700">
                Nome
              </label>
              <Input
                id="nome"
                placeholder="Pedro Antonio de sousa"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
              {showError("nome")}
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="razaoSocial" className="text-sm font-medium text-gray-700">
                Razão Social
              </label>
              <Input
                id="razaoSocial"
                placeholder="Digite a Razão Social"
                value={formData.razaoSocial}
                onChange={(e) => handleInputChange("razaoSocial", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
              {showError("razaoSocial")}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-1">
              <label htmlFor="cnpj" className="text-sm font-medium text-gray-700">
                CNPJ
              </label>
              <InputMask
                mask="99.999.999/9999-99"
                maskPlaceholder={null}
                value={formData.cnpj}
                onChange={(e) => handleInputChange("cnpj", e.target.value)}
              >
                {(inputProps: React.ComponentProps<"input">) => (
                  <Input
                    {...inputProps}
                    id="cnpj"
                    placeholder="Digite o CNPJ"
                    className="h-12 text-base border-gray-300 rounded-lg"
                  />
                )}
              </InputMask>
              {showError("cnpj")}
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="inscEstadual" className="text-sm font-medium text-gray-700">
                Inscrisão Estadual
              </label>
              <Input
                id="inscEstadual"
                placeholder="Digite a Insc. Estadual"
                value={formData.inscEstadual}
                onChange={(e) => handleInputChange("inscEstadual", e.target.value)}
                className="h-12 text-base border-gray-300 rounded-lg"
              />
              {showError("inscEstadual")}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contato</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-1">
                <label htmlFor="telefone" className="text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <InputMask
                  mask="(99) 99999-9999"
                  maskPlaceholder={null}
                  value={formData.telefone}
                  onChange={(e) => handleInputChange("telefone", e.target.value)}
                >
                  {(inputProps: React.ComponentProps<"input">) => (
                    <Input
                      {...inputProps}
                      id="telefone"
                      placeholder="(99) 99999-9999"
                      className="h-12 text-base border-gray-300 rounded-lg"
                    />
                  )}
                </InputMask>
                {showError("telefone")}
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemplo.ae@outlook.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                />
                {showError("email")}
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Endereço</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="cep" className="text-sm font-medium text-gray-700">
                    CEP
                  </label>
                  <InputMask
                    mask="99999-999"
                    maskPlaceholder={null}
                    value={formData.cep}
                    onChange={(e) => handleInputChange("cep", e.target.value)}
                  >
                    {(inputProps: React.ComponentProps<"input">) => (
                      <Input
                        {...inputProps}
                        id="cep"
                        placeholder="Digite o CEP"
                        className="h-12 text-base border-gray-300 rounded-lg"
                      />
                    )}
                  </InputMask>
                  {showError("cep")}
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="logadouro" className="text-sm font-medium text-gray-700">
                    Logradouro
                  </label>
                  <Input
                    id="logadouro"
                    placeholder="Digite a Logradouro"
                    value={formData.logadouro}
                    onChange={(e) => handleInputChange("logadouro", e.target.value)}
                    className="h-12 text-base border-gray-300 rounded-lg"
                  />
                  {showError("logadouro")}
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="numero" className="text-sm font-medium text-gray-700">
                    Numero
                  </label>
                  <Input
                    id="numero"
                    placeholder="Digite o numero"
                    value={formData.numero}
                    onChange={(e) => handleInputChange("numero", e.target.value)}
                    className="h-12 text-base border-gray-300 rounded-lg"
                  />
                  {showError("numero")}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="complemento" className="text-sm font-medium text-gray-700">
                    Complemento
                  </label>
                  <Input
                    id="complemento"
                    placeholder="Digite um ponto de Complemento"
                    value={formData.complemento}
                    onChange={(e) => handleInputChange("complemento", e.target.value)}
                    className="h-12 text-base border-gray-300 rounded-lg"
                  />
                  {showError("complemento")}
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="cidade" className="text-sm font-medium text-gray-700">
                    Cidade
                  </label>
                  <Input
                    id="cidade"
                    placeholder="Digite a Cidade"
                    value={formData.cidade}
                    onChange={(e) => handleInputChange("cidade", e.target.value)}
                    className="h-12 text-base border-gray-300 rounded-lg"
                  />
                  {showError("cidade")}
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="estado" className="text-sm font-medium text-gray-700">
                    Estado
                  </label>
                  <Input
                    id="estado"
                    placeholder="Digite o Estado"
                    value={formData.estado}
                    onChange={(e) => handleInputChange("estado", e.target.value)}
                    className="h-12 text-base border-gray-300 rounded-lg"
                  />
                  {showError("estado")}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Pagamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-1">
                <label htmlFor="formaPagamento" className="text-sm font-medium text-gray-700">
                  Forma de pagamento
                </label>
                <Input
                  id="formaPagamento"
                  placeholder="Forma de pagamento"
                  value={formData.formaPagamento}
                  onChange={(e) => handleInputChange("formaPagamento", e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                />
                {showError("formaPagamento")}
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="prazoPagamento" className="text-sm font-medium text-gray-700">
                  Prazo de pagamento
                </label>
                <Input
                  id="prazoPagamento"
                  placeholder="Tempo de pagamento"
                  value={formData.prazoPagamento}
                  onChange={(e) => handleInputChange("prazoPagamento", e.target.value)}
                  className="h-12 text-base border-gray-300 rounded-lg"
                />
                {showError("prazoPagamento")}
              </div>
            </div>
          </div>

          {/* Actions */}
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
            >
              Salvar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
