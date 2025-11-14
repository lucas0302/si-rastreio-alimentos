"use client";

import { useEffect, useState, Fragment, useCallback } from "react";
import axios from "axios";
import { Pencil, Trash2, Eye, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AdminListCard } from "./list-card";
import { TAB_CONFIG } from "./config";
import { useToast } from "@/hooks/use-toast";

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

type ApiResponse = {
  data: ApiClient[];
  limit: number;
  offset: number;
  total?: number;
};

interface ClientsListProps {
  onAdd: () => void;
}

export function ClientsList({ onAdd }: ClientsListProps) {
  const [clients, setClients] = useState<ApiClient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [deletingCode, setDeletingCode] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<{ code: number; label: string } | null>(null);
  const limit = 10;
  const { toast } = useToast();

  const loadClients = useCallback(
    async (pageToLoad: number) => {
      const offset = pageToLoad * limit;

      try {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem("token");
        const res = await axios.get<ApiResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/customers?limit=${limit}&offset=${offset}`,
          token ? { headers: { Authorization: `Bearer ${token}` } } : undefined
        );

        const list = Array.isArray(res.data?.data) ? res.data.data : [];
        setClients(list);
        setExpandedRow(null);

        const total = res.data?.total;
        const computedHasNext =
          typeof total === "number"
            ? offset + list.length < total
            : list.length === limit;
        setHasNext(computedHasNext);
        return list.length;
      } catch (e: any) {
        console.error(e);
        setError(
          e?.response?.status === 401
            ? "Nao autorizado: verifique seu login."
            : "Erro ao carregar clientes."
        );
        return 0;
      } finally {
        setLoading(false);
      }
    },
    [limit]
  );

  useEffect(() => {
    loadClients(page);
  }, [page, loadClients]);

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

  const handleDeleteClient = async (code: number) => {
    try {
      setDeletingCode(code);
      const token = localStorage.getItem("token");
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/customers/${code}`,
        token ? { headers: { Authorization: `Bearer ${token}` } } : undefined
      );

      toast({
        title: "Cliente deletado",
        description: "O cliente foi removido com sucesso.",
      });

      const items = await loadClients(page);
      if (items === 0 && page > 0) {
        setPage((current) => Math.max(current - 1, 0));
      }
    } catch (e: any) {
      console.error(e);
      const status = e?.response?.status;
      const message =
        e?.response?.data?.message ?? "Erro ao deletar cliente.";

      if (status === 409) {
        toast({
          title: "Ação não permitida",
          description: message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Falha ao deletar",
          description: message,
        });
      }
    } finally {
      setDeletingCode(null);
      setConfirmDelete(null);
    }
  };

  const confirmDeleteClient = () => {
    if (!confirmDelete || deletingCode !== null) return;
    void handleDeleteClient(confirmDelete.code);
  };

  const handleDialogChange = (open: boolean) => {
    if (!open && deletingCode === null) {
      setConfirmDelete(null);
    }
  };

  if (loading) {
    return (
      <AdminListCard meta={TAB_CONFIG.clientes} onAdd={onAdd} actionPlacement="footer">
        <div className="p-4 text-gray-500">Carregando clientes.</div>
      </AdminListCard>
    );
  }

  if (error) {
    return (
      <AdminListCard meta={TAB_CONFIG.clientes} onAdd={onAdd} actionPlacement="footer">
        <div className="p-4 text-red-600">{error}</div>
      </AdminListCard>
    );
  }

  if (clients.length === 0) {
    return (
      <AdminListCard meta={TAB_CONFIG.clientes} onAdd={onAdd} actionPlacement="footer">
        <div className="p-4 text-gray-500">Nenhum cliente encontrado.</div>
      </AdminListCard>
    );
  }

  return (
    <AdminListCard meta={TAB_CONFIG.clientes} onAdd={onAdd} actionPlacement="footer">
      <Table className="w-full text-[13px] table-auto">
        <TableHeader>
          <TableRow className="text-gray-500 text-xs">
            <TableHead className="w-[70px] py-1.5">Cod.</TableHead>
            <TableHead className="py-1.5">Razao social</TableHead>
            <TableHead className="py-1.5">Nome fantasia</TableHead>
            <TableHead className="py-1.5">CNPJ/CPF</TableHead>
            <TableHead className="py-1.5">Inscricao estadual</TableHead>
            <TableHead className="py-1.5">Ultima venda</TableHead>
            <TableHead className="w-[90px] text-right py-1.5">Acoes</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {clients.map((client) => {
            const isExpanded = expandedRow === client.code;

            return (
              <Fragment key={client.code}>
                <TableRow className="text-gray-700 text-[14px] h-auto">
                  <TableCell className="font-semibold text-gray-900 py-2">
                    {client.code}
                  </TableCell>
                  <TableCell className="py-2 whitespace-normal break-words">
                    {client.legal_name}
                  </TableCell>
                  <TableCell className="py-2 whitespace-normal break-words">
                    {client.fantasy_name}
                  </TableCell>
                  <TableCell className="py-2 whitespace-normal break-words">
                    {client.cnpj_cpf}
                  </TableCell>
                  <TableCell className="py-2 whitespace-normal break-words">
                    {client.state_subscrition}
                  </TableCell>
                  <TableCell className="py-2 whitespace-normal break-words">
                    {formatDate(client.last_sale_date)}
                  </TableCell>
                  <TableCell className="py-2">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900"
                        onClick={() => handleToggleRow(client.code)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900"
                        onClick={() =>
                          setConfirmDelete({
                            code: client.code,
                            label:
                              client.legal_name ||
                              client.fantasy_name ||
                              `Cliente ${client.code}`,
                          })
                        }
                        disabled={deletingCode === client.code}
                      >
                        {deletingCode === client.code ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                {isExpanded && (
                  <TableRow className="bg-gray-50 hover:bg-gray-50">
                    <TableCell colSpan={7} className="p-0">
                      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 text-[13px]">
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">
                            Endereco
                          </h4>
                          <p className="text-gray-600 text-[12px]">
                            {client.address || "-"}
                          </p>
                          <p className="text-gray-600 text-[12px]">
                            {client.neighborhood || "-"}
                          </p>
                          <p className="text-gray-600 text-[12px]">
                            {client.cep} - {client.state}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">
                            Rede
                          </h4>
                          <p className="text-gray-600 text-[12px]">
                            {client.corporate_network || "-"}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">
                            Forma de pagamento
                          </h4>
                          <p className="text-gray-600 text-[12px]">
                            {client.payment_method || "-"}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm">
                            Contatos
                          </h4>
                          <p className="text-gray-600 text-[12px]">
                            {client.email || "Email nao informado"}
                          </p>
                          <p className="text-gray-600 text-[12px]">
                            {client.phone || "Telefone nao informado"}
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

      <div className="flex items-center justify-between p-4">
        <Button
          variant="outline"
          disabled={page === 0}
          onClick={() => setPage((current) => Math.max(current - 1, 0))}
        >
          Anterior
        </Button>
        <span className="text-sm text-gray-600">Pagina {page + 1}</span>
        <Button
          variant="outline"
          disabled={!hasNext}
          onClick={() => setPage((current) => current + 1)}
        >
          Proximo
        </Button>
      </div>

      <AlertDialog open={!!confirmDelete} onOpenChange={handleDialogChange}>
        <AlertDialogContent className="w-[90vw] max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Remover cliente?</AlertDialogTitle>
            <AlertDialogDescription>
              {confirmDelete
                ? `Deseja realmente remover o cliente "${confirmDelete.label}"? Essa acao nao pode ser desfeita.`
                : ""}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deletingCode !== null}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={confirmDeleteClient}
              disabled={deletingCode !== null}
            >
              {deletingCode !== null ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Deletar"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminListCard>
  );
}
