"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Loader2, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { AdminListCard } from "./list-card";
import { TAB_CONFIG } from "./config";
import { useToast } from "@/hooks/use-toast";

interface ApiVehicle {
  id: number;
  model: string;
  plate: string;
  phone: string;
  maximumLoad: number | null;
  description: string | null;
}

type ApiResponse = {
  data: ApiVehicle[];
  limit: number;
  offset: number;
  total?: number;
};

interface VehiclesListProps {
  onAdd: () => void;
}

export function VehiclesList({ onAdd }: VehiclesListProps) {
  const [vehicles, setVehicles] = useState<ApiVehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<{ id: number; label: string } | null>(null);
  const limit = 13;
  const { toast } = useToast();

  const loadVehicles = useCallback(
    async (pageToLoad: number) => {
      const offset = pageToLoad * limit;

      try {
        setError(null);
        setLoading(true);
        const token =
          typeof window !== "undefined" ? localStorage.getItem("token") : null;
        const res = await axios.get<ApiResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/vehicles?limit=${limit}&offset=${offset}`,
          token ? { headers: { Authorization: `Bearer ${token}` } } : undefined
        );

        const list = Array.isArray(res.data?.data) ? res.data.data : [];
        setVehicles(list);

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
            ? "Nao autorizado: verifique seu login/token."
            : "Erro ao carregar veiculos."
        );
        return 0;
      } finally {
        setLoading(false);
      }
    },
    [limit]
  );

  useEffect(() => {
    loadVehicles(page);
  }, [page, loadVehicles]);

  const handleDeleteVehicle = async (vehicleId: number) => {
    try {
      setDeletingId(vehicleId);
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/vehicles/${vehicleId}`,
        token ? { headers: { Authorization: `Bearer ${token}` } } : undefined
      );

      toast({
        title: "Veiculo deletado",
        description: "O veiculo foi removido com sucesso.",
      });

      const items = await loadVehicles(page);
      if (items === 0 && page > 0) {
        setPage((current) => Math.max(current - 1, 0));
      }
    } catch (e: any) {
      console.error(e);
      const message =
        e?.response?.data?.message ?? "Erro ao deletar veiculo.";
      toast({
        variant: "destructive",
        title: "Falha ao deletar",
        description: message,
      });
    } finally {
      setDeletingId(null);
      setConfirmDelete(null);
    }
  };

  const handleConfirmDeletion = () => {
    if (!confirmDelete || deletingId !== null) return;
    void handleDeleteVehicle(confirmDelete.id);
  };

  const handleDialogChange = (open: boolean) => {
    if (!open && deletingId === null) {
      setConfirmDelete(null);
    }
  };

  if (loading) {
    return (
      <AdminListCard
        meta={TAB_CONFIG.veiculos}
        onAdd={onAdd}
        actionPlacement="footer"
      >
        <div className="p-4 text-gray-500">Carregando veiculos.</div>
      </AdminListCard>
    );
  }

  if (error) {
    return (
      <AdminListCard
        meta={TAB_CONFIG.veiculos}
        onAdd={onAdd}
        actionPlacement="footer"
      >
        <div className="p-4 text-red-600">{error}</div>
      </AdminListCard>
    );
  }

  if (vehicles.length === 0) {
    return (
      <AdminListCard
        meta={TAB_CONFIG.veiculos}
        onAdd={onAdd}
        actionPlacement="footer"
      >
        <div className="p-4 text-gray-500">Nenhum veiculo cadastrado.</div>
      </AdminListCard>
    );
  }

  return (
    <AdminListCard
      meta={TAB_CONFIG.veiculos}
      onAdd={onAdd}
      actionPlacement="footer"
    >
      <Table>
        <TableHeader>
          <TableRow className="text-gray-500">
            <TableHead className="w-[90px]">Cod.</TableHead>
            <TableHead>Modelo</TableHead>
            <TableHead>Placa</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Carga Max.</TableHead>
            <TableHead>Observacoes</TableHead>
            <TableHead className="text-end">Acoes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.id} className="text-gray-700">
              <TableCell className="font-medium text-gray-900">
                {vehicle.id}
              </TableCell>
              <TableCell className="font-medium ">{vehicle.model}</TableCell>
              <TableCell>{vehicle.plate}</TableCell>
              <TableCell>{vehicle.phone}</TableCell>
              <TableCell>{vehicle.maximumLoad ?? "-"}</TableCell>
              <TableCell>{vehicle.description ?? "-"}</TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-2">
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
                        id: vehicle.id,
                        label: vehicle.model ?? `#${vehicle.id}`,
                      })
                    }
                    disabled={deletingId === vehicle.id}
                  >
                    {deletingId === vehicle.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
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
            <AlertDialogTitle>Remover veiculo?</AlertDialogTitle>
            <AlertDialogDescription>
              {confirmDelete
                ? `Tem certeza que deseja remover o veiculo "${confirmDelete.label}"? Essa acao nao pode ser desfeita.`
                : ""}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deletingId !== null}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={handleConfirmDeletion}
              disabled={deletingId !== null}
            >
              {deletingId !== null ? (
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
