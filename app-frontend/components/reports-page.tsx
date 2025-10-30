"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronRight, Edit, Trash2, Filter } from "lucide-react";
import { Label } from "@/components/ui/label";

// 1. IMPORTS ADICIONADOS
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
// Assuma que OnboardingForm.tsx está na mesma pasta
import OnboardingForm from "./multistep-form"; 

export function ReportsPage() {
  const [activeTab, setActiveTab] = useState("controle");
  const [filters, setFilters] = useState({
    nomeProduto: "",
    lote: "",
    cliente: "",
    dataRange: "01-08-2025 a 30-08-2025",
  });
  const [expandedMonths, setExpandedMonths] = useState<string[]>(["Jul-2025"]);

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleMonth = (month: string) => {
    setExpandedMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };

  const handleExportPDF = () => {
    console.log("Exporting PDF...");
    // Implement PDF export logic
  };

  const handleExportExcel = () => {
    console.log("Exporting Excel...");
    // Implement Excel export logic
  };

  return (
    <div className="space-y-6">
      {/* Header with New Record Button */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-900">Relatórios</div>

        {/* ===== 2. IMPLEMENTAÇÃO DO DIALOG ===== */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6">
              + Novo Registro
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg p-0">
            {/* p-0 é adicionado para remover o padding padrão do Dialog,
              pois o OnboardingForm já tem seu próprio padding (py-8).
              max-w-lg é para corresponder ao estilo do formulário.
              O DialogContent já tem scroll automático.
            */}
            <OnboardingForm />
          </DialogContent>
        </Dialog>
        {/* ===== FIM DA IMPLEMENTAÇÃO ===== */}

      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger
            value="controle"
            className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
          >
            Controle de expedição
          </TabsTrigger>
          <TabsTrigger
            value="dipova"
            className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
          >
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
            <Label
              htmlFor="filtro-nome-produto"
              className="text-sm text-gray-700"
            >
              Nome do produto
            </Label>
            <Input
              id="filtro-nome-produto"
              placeholder="Nome do Produto"
              value={filters.nomeProduto}
              onChange={(e) =>
                handleFilterChange("nomeProduto", e.target.value)
              }
              className="h-10 border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="filtro-cliente" className="text-sm text-gray-700">
              Cliente
            </Label>
            <Input
              id="filtro-cliente"
              placeholder="Cliente"
              value={filters.cliente}
              onChange={(e) => handleFilterChange("cliente", e.target.value)}
              className="h-10 border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="filtro-data" className="text-sm text-gray-700">
              Data
            </Label>
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
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Data Expe.
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Nº da NF
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Produto
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Quantidade
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Data Prod/Lote
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Cliente
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Destino
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-900">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200"></tbody>
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
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Mês
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Total Expedições
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Total (kg)
                      </th>
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
                  <tbody className="divide-y divide-gray-200"></tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}