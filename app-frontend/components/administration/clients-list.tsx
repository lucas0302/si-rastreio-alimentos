"use client";

import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Pencil, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AdminListCard } from "./list-card";
import { TAB_CONFIG } from "./config";

interface ApiClient {
  code: number;
  legal_name: string;
  fantasy_name: string;
  cnpj_cpf: string;
  state_subscrition: string;
  email: string;
  phone: string;
  state: string;
  neighborhood: string;
  address: string;
  cep: string;
  corporate_network: string;
  payment_method: string;
  last_sale_date: string;
}

interface ClientsListProps {
  onAdd: () => void;
}

export function ClientsList({ onAdd }: ClientsListProps) {
  const [clients, setClients] = useState<ApiClient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setError(null);
        const token = localStorage.getItem("token");
        const res = await axios.get<ApiClient[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/customers`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setClients(res.data);
      } catch (e: any) {
        console.error(e);
        setError(
          e?.response?.status === 401
            ? "Não autorizado: verifique seu login."
            : "Erro ao carregar clientes."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  const handleToggleRow = (code: number) => {
    setExpandedRow((prev) => (prev === code ? null : code));
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "-";
    const onlyDate = dateString.split("T")[0];
    const [year, month, day] = onlyDate.split("-");
    if (!year || !month || !day) return "-";
    return `${day}/${month}/${year}`;
  };

  if (loading) {
    return (
      <AdminListCard meta={TAB_CONFIG.clientes} onAdd={onAdd}>
        <div className="p-4 text-gray-500">Carregando clientes…</div>
      </AdminListCard>
    );
  }

  if (error) {
    return (
      <AdminListCard meta={TAB_CONFIG.clientes} onAdd={onAdd}>
        <div className="p-4 text-red-600">{error}</div>
      </AdminListCard>
    );
  }

  return (
    <AdminListCard meta={TAB_CONFIG.clientes} onAdd={onAdd}>
      <Table className="text-[12px]"> {/* Reduzindo o tamanho da fonte da tabela */}
        <TableHeader>
          <TableRow className="text-gray-500 text-xs">
            {/* Reduzindo o padding vertical das TableHead */}
            <TableHead className="w-[80px] py-1.5">Cód.</TableHead> 
            <TableHead className="py-1.5">Razão social</TableHead>
            <TableHead className="py-1.5">Nome fantasia</TableHead>
            <TableHead className="py-1.5">CNPJ/CPF</TableHead>
            <TableHead className="py-1.5">Inscrição estadual</TableHead>
            <TableHead className="py-1.5">Última venda</TableHead>
            {/* Ajustando a largura e padding das ações */}
            <TableHead className="w-[90px] text-right py-1.5">Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {clients.map((client) => {
            const isExpanded = expandedRow === client.code;

            return (
              <Fragment key={client.code}>
                <TableRow className="text-gray-700 text-[12px] h-8"> {/* Reduzindo a altura da linha */}
                  {/* Reduzindo o padding vertical das TableCell */}
                  <TableCell className="font-medium text-gray-900 py-1.5"> 
                    {client.code}
                  </TableCell>
                  <TableCell className="py-1.5">{client.legal_name}</TableCell>
                  <TableCell className="py-1.5">{client.fantasy_name}</TableCell>
                  <TableCell className="py-1.5">{client.cnpj_cpf}</TableCell>
                  <TableCell className="py-1.5">
                    {client.state_subscrition}
                  </TableCell>
                  <TableCell className="py-1.5">
                    {formatDate(client.last_sale_date)}
                  </TableCell>
                  <TableCell className="py-1.5">
                    <div className="flex items-center justify-end gap-0.5"> {/* Reduzindo o gap entre os botões */}
                      <Button
                        variant="ghost"
                        size="icon"
                        // Reduzindo o tamanho dos botões
                        className="h-6 w-6 rounded-full text-gray-500 hover:text-gray-900" 
                        onClick={() => handleToggleRow(client.code)}
                      >
                        {/* Reduzindo o tamanho dos ícones */}
                        <Eye className="h-3 w-3" /> 
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 rounded-full text-gray-500 hover:text-gray-900"
                      >
                        <Pencil className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 rounded-full text-gray-500 hover:text-gray-900"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                {isExpanded && (
                  <TableRow className="bg-gray-50 hover:bg-gray-50">
                    {/* Mantendo colSpan 7 */}
                    <TableCell colSpan={7} className="p-0"> 
                      <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">
                            Endereço
                          </h4>
                          <p className="text-gray-600 text-[12px]"> {/* Ajustando a fonte */}
                            {client.address || "-"}
                          </p>
                          <p className="text-gray-600 text-[12px]"> {/* Ajustando a fonte */}
                            {client.neighborhood || "-"}
                          </p>
                          <p className="text-gray-600 text-[12px]"> {/* Ajustando a fonte */}
                            {client.cep} - {client.state}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">
                            Rede
                          </h4>
                          <p className="text-gray-600 text-[12px]"> {/* Ajustando a fonte */}
                            {client.corporate_network || "-"}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">
                            Forma de pagamento
                          </h4>
                          <p className="text-gray-600 text-[12px]"> {/* Ajustando a fonte */}
                            {client.payment_method || "-"}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">
                            Contatos
                          </h4>
                          <p className="text-gray-600 text-[12px]"> {/* Ajustando a fonte */}
                            {client.email || "Email não informado"}
                          </p>
                          <p className="text-gray-600 text-[12px]"> {/* Ajustando a fonte */}
                            {client.phone || "Telefone não informado"}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </AdminListCard>
  );
}