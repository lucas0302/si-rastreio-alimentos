"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Copy, Maximize2, Pencil, Trash2 } from "lucide-react";
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
  const limit = 10;

  useEffect(() => {
    const load = async () => {
      const offset = page * limit;

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
      } catch (e: any) {
        console.error(e);
        setError(
          e?.response?.status === 401
            ? "Nao autorizado: verifique seu login."
            : "Erro ao carregar produtos."
        );
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page, limit]);

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
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900"
                    >
                      <Copy className="h-4 w-4" />
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
                    >
                      <Trash2 className="h-4 w-4" />
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
    </AdminListCard>
  );
}
