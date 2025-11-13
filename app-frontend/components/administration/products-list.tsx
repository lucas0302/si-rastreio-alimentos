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

interface ApiProduct {
  code: number;
  description: string;
  group: string;
  company: string;
  last_buying_date: string | null;
  last_sale_date: string | null;
}

type ApiResponse = {
  data: ApiProduct[];
  limit: number;
  offset: number;
  total?: number;
};

interface ProductsListProps {
  onAdd: () => void;
}

export function ProductsList({ onAdd }: ProductsListProps) {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [deletingCode, setDeletingCode] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<{ code: number; label: string } | null>(null);
  const limit = 10;
  const { toast } = useToast();

  const loadProducts = useCallback(
    async (pageToLoad: number) => {
      const offset = pageToLoad * limit;

      try {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem("token");
        const res = await axios.get<ApiResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/products?limit=${limit}&offset=${offset}`,
          token ? { headers: { Authorization: `Bearer ${token}` } } : undefined
        );

        const list = Array.isArray(res.data?.data) ? res.data.data : [];
        setProducts(list);

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
            : "Erro ao carregar produtos."
        );
        return 0;
      } finally {
        setLoading(false);
      }
    },
    [limit]
  );

  useEffect(() => {
    loadProducts(page);
  }, [page, loadProducts]);

  const handleDeleteProduct = async (code: number) => {
    try {
      setDeletingCode(code);
      const token = localStorage.getItem("token");
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${code}`,
        token ? { headers: { Authorization: `Bearer ${token}` } } : undefined
      );

      toast({
        title: "Produto deletado",
        description: "O produto foi removido com sucesso.",
      });

      const items = await loadProducts(page);
      if (items === 0 && page > 0) {
        setPage((current) => Math.max(current - 1, 0));
      }
    } catch (e: any) {
      console.error(e);
      const message =
        e?.response?.data?.message ?? "Erro ao deletar produto.";
      toast({
        variant: "destructive",
        title: "Falha ao deletar",
        description: message,
      });
    } finally {
      setDeletingCode(null);
      setConfirmDelete(null);
    }
  };

  const handleConfirmDelete = () => {
    if (!confirmDelete || deletingCode !== null) return;
    void handleDeleteProduct(confirmDelete.code);
  };

  const handleDialogChange = (open: boolean) => {
    if (!open && deletingCode === null) {
      setConfirmDelete(null);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString || dateString.trim() === "") return "-";

    const onlyDate = dateString.split("T")[0];
    if (onlyDate === "0000-01-01") return "-";

    const [year, month, day] = onlyDate.split("-");
    if (!year || !month || !day) {
      return "-";
    }

    const yearNumber = Number(year);
    const monthNumber = Number(month);
    const dayNumber = Number(day);
    if (
      Number.isNaN(yearNumber) ||
      Number.isNaN(monthNumber) ||
      Number.isNaN(dayNumber)
    ) {
      return "-";
    }

    return `${day}/${month}/${year}`;
  };

  if (loading) {
    return (
      <AdminListCard
        meta={TAB_CONFIG.produtos}
        onAdd={onAdd}
        showHeader={true}
        actionPlacement="footer"
      >
        <div className="p-4 text-gray-500">Carregando produtos.</div>
      </AdminListCard>
    );
  }

  if (error) {
    return (
      <AdminListCard
        meta={TAB_CONFIG.produtos}
        onAdd={onAdd}
        showHeader={true}
        actionPlacement="footer"
      >
        <div className="p-4 text-red-600">{error}</div>
      </AdminListCard>
    );
  }

  if (products.length === 0) {
    return (
      <AdminListCard
        meta={TAB_CONFIG.produtos}
        onAdd={onAdd}
        showHeader={true}
        actionPlacement="footer"
      >
        <div className="p-4 text-gray-500">Nenhum produto encontrado.</div>
      </AdminListCard>
    );
  }

  return (
    <AdminListCard
      meta={TAB_CONFIG.produtos}
      onAdd={onAdd}
      showHeader={true}
      actionPlacement="footer"
    >
      <div className="w-full overflow-x-auto">
        <Table className="min-w-max">
          <TableHeader>
            <TableRow className="text-gray-500">
              <TableHead className="w-[90px]">Cod.</TableHead>
              <TableHead>Descricao</TableHead>
              <TableHead>Grupo</TableHead>
              <TableHead>Marca</TableHead>
              <TableHead>Dt. Ultima Compra</TableHead>
              <TableHead>Dt. Ultima Venda</TableHead>
              <TableHead className="text-end">Acoes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.code} className="text-gray-700">
                <TableCell className="font-medium text-gray-900">
                  {product.code}
                </TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.group}</TableCell>
                <TableCell>{product.company}</TableCell>
                <TableCell>{formatDate(product.last_buying_date)}</TableCell>
                <TableCell>{formatDate(product.last_sale_date)}</TableCell>
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
                          code: product.code,
                          label: product.description || `Produto ${product.code}`,
                        })
                      }
                      disabled={deletingCode === product.code}
                    >
                      {deletingCode === product.code ? (
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
      </div>

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
            <AlertDialogTitle>Remover produto?</AlertDialogTitle>
            <AlertDialogDescription>
              {confirmDelete
                ? `Deseja realmente remover o produto "${confirmDelete.label}"? Essa acao nao pode ser desfeita.`
                : ""}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deletingCode !== null}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={handleConfirmDelete}
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
