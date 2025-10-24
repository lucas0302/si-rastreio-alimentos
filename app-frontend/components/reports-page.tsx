"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronRight, Edit, Trash2, Filter } from "lucide-react"
import { Label } from "@/components/ui/label"
// Mock data for the reports
const mockExpedicaoData = [
  {
    id: 1,
    dataExp: "01-jul",
    nf: "6423432",
    produto: "Linguiça Suína",
    quantidade: "25",
    dataProdLote: "11/07/2025 - 11072025",
    cliente: "Dia a Dia",
    destino: "Goiás",
    entrega: "Placa do veículo",
    condicoes: "Condições sanitárias",
    temperatura: "Temperatura",
    responsavel: "Responsável pelo preenchimento",
    nome: "Luiz Fernando",
  },
  {
    id: 2,
    dataExp: "02-jul",
    nf: "1255363",
    produto: "Linguiça bandeija",
    quantidade: "12",
    dataProdLote: "12/07/2025 -12072025",
    cliente: "Carrefour",
    destino: "Brasilia",
    entrega: "Placa do veículo",
    condicoes: "Condições sanitárias",
    temperatura: "Temperatura",
    responsavel: "Responsável pelo preenchimento",
    nome: "Luiz Fernando",
  },
  // Add more mock data as needed
]

const mockDipovaData = [
  {
    mes: "Jul-2025",
    totalExpedicoes: 42,
    totalKg: "1.235 kg",
    expanded: true,
    items: [
      {
        produto: "Linguiça Suína",
        dataProd: "jul-25l",
        dataExpedi: "jul-25",
        quantidade: "100kg",
        cliente: "cliente 1",
        estado: "Goiás",
        temp: "0°",
        entregador: "Próprio",
      },
      {
        produto: "Linguiça Suína",
        dataProd: "jul-25l",
        dataExpedi: "jul-25",
        quantidade: "96 kg",
        cliente: "cliente 2",
        estado: "Goiás",
        temp: "0°",
        entregador: "Próprio",
      },
      {
        produto: "Linguiça Suína",
        dataProd: "jul-25l",
        dataExpedi: "jul-25",
        quantidade: "45kg",
        cliente: "cliente 3",
        estado: "DF",
        temp: "0°",
        entregador: "Próprio",
      },
      {
        produto: "Linguiça Suína",
        dataProd: "jul-25l",
        dataExpedi: "jul-25",
        quantidade: "120kg",
        cliente: "cliente 3",
        estado: "DF",
        temp: "0°",
        entregador: "Próprio",
      },
      {
        produto: "Linguiça Suína",
        dataProd: "jul-25l",
        dataExpedi: "jul-25",
        quantidade: "72kg",
        cliente: "cliente 4",
        estado: "Goiás",
        temp: "0°",
        entregador: "Próprio",
      },
      {
        produto: "Linguiça Suína",
        dataProd: "jul-25l",
        dataExpedi: "jul-25",
        quantidade: "203kg",
        cliente: "cliente 4",
        estado: "Goiás",
        temp: "0°",
        entregador: "Próprio",
      },
    ],
  },
  {
    mes: "Jun-2025",
    totalExpedicoes: 38,
    totalKg: "1.100 kg",
    expanded: false,
    items: [],
  },
]

export function ReportsPage() {
  const [activeTab, setActiveTab] = useState("controle")
  const [filters, setFilters] = useState({
    nomeProduto: "",
    lote: "",
    cliente: "",
    dataRange: "01-08-2025 a 30-08-2025",
  })
  const [expandedMonths, setExpandedMonths] = useState<string[]>(["Jul-2025"])

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const toggleMonth = (month: string) => {
    setExpandedMonths((prev) => (prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]))
  }

  const handleExportPDF = () => {
    console.log("Exporting PDF...")
    // Implement PDF export logic
  }

  const handleExportExcel = () => {
    console.log("Exporting Excel...")
    // Implement Excel export logic
  }

  return (
    <div className="space-y-6">
      {/* Header with New Record Button */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-900">Relatórios</div>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6">+ Novo Registro</Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="controle" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
            Controle de expedição
          </TabsTrigger>
          <TabsTrigger value="dipova" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
            DIPOVA
          </TabsTrigger>
        </TabsList>

        {/* Filters */}
        <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
          <Filter className="h-4 w-4 text-gray-500" />
          <span>Filtros</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="filtro-nome-produto" className="text-sm text-gray-700">Nome do produto</Label>
            <Input
              id="filtro-nome-produto"
              placeholder="Nome do Produto"
              value={filters.nomeProduto}
              onChange={(e) => handleFilterChange("nomeProduto", e.target.value)}
              className="h-10 border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="filtro-cliente" className="text-sm text-gray-700">Cliente</Label>
            <Input
              id="filtro-cliente"
              placeholder="Cliente"
              value={filters.cliente}
              onChange={(e) => handleFilterChange("cliente", e.target.value)}
              className="h-10 border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="filtro-data" className="text-sm text-gray-700">Data</Label>
            <Input
              id="filtro-data"
              placeholder="01-08-2025 a 30-08-2025"
              value={filters.dataRange}
              onChange={(e) => handleFilterChange("dataRange", e.target.value)}
              className="h-10 border-gray-300"
            />
          </div>
        </div>

        {/* Controle de Expedição Tab */}
        <TabsContent value="controle" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Data Expe.</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Nº da NF</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Produto</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Quantidade</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Data Prod/Lote</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Cliente</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Destino</th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-900">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mockExpedicaoData.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{item.dataExp}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.nf}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.produto}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.quantidade}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.dataProdLote}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.cliente}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.destino}</td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex justify-center space-x-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* DIPOVA Tab */}
        <TabsContent value="dipova" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Mês</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Total Expedições</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Total (kg)</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">
                        <div className="flex justify-end space-x-2">
                          <Button
                            onClick={handleExportPDF}
                            variant="outline"
                            size="sm"
                            className="h-8 px-3 text-xs bg-transparent"
                          >
                            Gerar PDF
                          </Button>
                          <Button
                            onClick={handleExportExcel}
                            variant="outline"
                            size="sm"
                            className="h-8 px-3 text-xs bg-transparent"
                          >
                            Gerar Excel
                          </Button>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mockDipovaData.map((monthData) => (
                      <tr key={monthData.mes}>
                        <td colSpan={4} className="p-0">
                          <div className="bg-gray-50">
                            <button
                              onClick={() => toggleMonth(monthData.mes)}
                              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-100"
                            >
                              <div className="flex items-center space-x-3">
                                {expandedMonths.includes(monthData.mes) ? (
                                  <ChevronDown className="h-4 w-4" />
                                ) : (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                                <span className="font-medium text-gray-900">{monthData.mes}</span>
                                <span className="text-sm text-gray-600">{monthData.totalExpedicoes}</span>
                                <span className="text-sm text-gray-600">{monthData.totalKg}</span>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </button>
                          </div>
                          {expandedMonths.includes(monthData.mes) && monthData.items.length > 0 && (
                            <div className="bg-white">
                              <table className="w-full">
                                <thead className="bg-gray-50 border-b">
                                  <tr>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700">Produto</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700">
                                      Data Prod.
                                    </th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700">
                                      Data Expedi.
                                    </th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700">
                                      Quantidade (kg)
                                    </th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700">Cliente</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700">Estado</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700">Temp.</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700">
                                      Entregador
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                  {monthData.items.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                      <td className="px-4 py-2 text-xs text-gray-900">{item.produto}</td>
                                      <td className="px-4 py-2 text-xs text-gray-900">{item.dataProd}</td>
                                      <td className="px-4 py-2 text-xs text-gray-900">{item.dataExpedi}</td>
                                      <td className="px-4 py-2 text-xs text-gray-900">{item.quantidade}</td>
                                      <td className="px-4 py-2 text-xs text-gray-900">{item.cliente}</td>
                                      <td className="px-4 py-2 text-xs text-gray-900">{item.estado}</td>
                                      <td className="px-4 py-2 text-xs text-gray-900">{item.temp}</td>
                                      <td className="px-4 py-2 text-xs text-gray-900">{item.entregador}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
