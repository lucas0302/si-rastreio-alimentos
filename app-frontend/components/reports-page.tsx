"use client";

import { useEffect, useState } from "react";
import axios from "axios";
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

  // Estado para tabela de relatórios
  type ApiDailyReport = {
    id: number;
    invoiceNumber: number;
    customerCode: number | string; // pode vir como string se BigInt serializado
    products: Array<{ code: number | string; quantity: number; description?: string }>;
    shipmentDate: string; // ISO
    productionDate?: string; // ISO
  };

  type ApiCustomer = {
    code: number;
    legal_name: string | null;
    state: string | null;
  };

  type ApiProduct = {
    code: number | string;
    description: string | null;
  };

  type ReportRow = {
    invoiceNumber: number;
    clientName: string;
    productCode: string;
    productName: string;
    shipmentDate: string;
    productionDate: string;
    quantity: number;
    destination: string;
  };

  const [rows, setRows] = useState<ReportRow[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const formatDate = (input: any) => {
    if (!input) return "N/A";
    let iso: string | null = null;
    if (input instanceof Date) {
      iso = input.toISOString();
    } else if (typeof input === "string") {
      iso = input;
    } else if (typeof input === "number") {
      const d = new Date(input);
      if (!isNaN(d.getTime())) return d.toLocaleDateString("pt-BR");
      return String(input);
    } else if (typeof input === "object") {
      // Caso legado: objeto vazio vindo do backend
      return "N/A";
    }

    if (!iso) return "N/A";
    // Tenta parse padrão
    const d1 = new Date(iso);
    if (!isNaN(d1.getTime())) return d1.toLocaleDateString("pt-BR");

    // Fallback para formato YYYY-MM-DD
    const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (m) {
      const d2 = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
      if (!isNaN(d2.getTime())) return d2.toLocaleDateString("pt-BR");
    }

    // Último recurso: retorna string original
    return iso;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const baseURL = process.env.NEXT_PUBLIC_API_URL;
        if (!baseURL) throw new Error("NEXT_PUBLIC_API_URL não definido.");

        const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
        const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

        // Buscar relatórios, clientes e produtos em paralelo
        const [repRes, custRes, prodRes] = await Promise.all([
          axios.get<ApiDailyReport[]>(`${baseURL}/daily-report`, { headers }),
          axios.get<ApiCustomer[]>(`${baseURL}/customers`, { headers }),
          axios.get<ApiProduct[]>(`${baseURL}/products`, { headers }),
        ]);

        const customers = custRes.data || [];
        const products = prodRes.data || [];
        const reports = repRes.data || [];

        // Mapas auxiliares
        const customerByCode = new Map<number, ApiCustomer>();
        customers.forEach((c) => customerByCode.set(Number(c.code), c));

        const productByCode = new Map<number, ApiProduct>();
        products.forEach((p) => productByCode.set(Number(p.code), p));

        // Para cada relatório, criar uma linha por produto
        const builtRows: ReportRow[] = [];
        for (const r of reports) {
          const invoice = Number(r.invoiceNumber);
          const cust = customerByCode.get(Number(r.customerCode));
          const clientName = cust?.legal_name ?? "N/A";
          const destination = cust?.state ?? "N/A";
          const shipDate = formatDate(r.shipmentDate);
          const prodDate = formatDate(r.productionDate);

          const items = Array.isArray(r.products) ? r.products : [];
          for (const it of items) {
            const codeNum = Number((it as any)?.code);
            const prod = productByCode.get(codeNum);
            const prodName = prod?.description ?? it?.description ?? "N/A";
            const qty = Number((it as any)?.quantity) || 0;

            builtRows.push({
              invoiceNumber: invoice,
              clientName,
              productCode: String((it as any)?.code ?? ""),
              productName: prodName,
              shipmentDate: shipDate, // também usado como Data Prod/Lote conforme instrução
              productionDate: prodDate,
              quantity: qty,
              destination,
            });
          }
        }

        setRows(builtRows);
      } catch (e: any) {
        console.error(e);
        const msg = e?.response?.data?.message || e?.message || "Erro ao carregar relatórios.";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
                        Nº da NF
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Cliente
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Produto
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Data Expe.
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Quantidade
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Data Prod/Lote
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        Destino
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-900">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {loading && (
                      <tr>
                        <td className="px-4 py-3 text-sm" colSpan={8}>
                          Carregando...
                        </td>
                      </tr>
                    )}
                    {error && !loading && (
                      <tr>
                        <td className="px-4 py-3 text-sm text-red-600" colSpan={8}>
                          {error}
                        </td>
                      </tr>
                    )}
                    {!loading && !error && rows.length === 0 && (
                      <tr>
                        <td className="px-4 py-3 text-sm" colSpan={8}>
                          Nenhum relatório encontrado.
                        </td>
                      </tr>
                    )}

                    {!loading && !error && rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {row.invoiceNumber}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {row.clientName}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {row.productName}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {row.shipmentDate}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {row.quantity}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {row.productionDate}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {row.destination}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex justify-center space-x-2">
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2">
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