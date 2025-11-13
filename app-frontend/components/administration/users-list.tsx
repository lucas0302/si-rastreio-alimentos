"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Loader2, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

type ApiUser = {
  id: number;
  name: string;
  username: string;
  role: "admin" | "user";
  active: boolean;
};

type ApiResponse = {
  data: ApiUser[][];
  limit: number;
  offset: number;
};

type UserStatus = "Ativo" | "Desativado";

const STATUS_CLASS_MAP: Record<UserStatus, string> = {
  Ativo: "bg-green-100 text-green-700 hover:bg-green-100",
  Desativado: "bg-gray-200 text-gray-600 hover:bg-gray-200",
};

const ROLE_LABEL: Record<ApiUser["role"], string> = {
  admin: "Administrador",
  user: "Usuario Comum",
};

interface UsersListProps {
  onAdd: () => void;
}

const USERS_ROUTE = "/usuarios";

export function UsersList({ onAdd }: UsersListProps) {
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<{ id: number; label: string } | null>(null);

  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const limit = 13;
  const { toast } = useToast();

  const fetchUsers = useCallback(
    async (pageToLoad: number) => {
      const offset = pageToLoad * limit;
      try {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem("token");
        const res = await axios.get<ApiResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}${USERS_ROUTE}?limit=${limit}&offset=${offset}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const list = (res.data?.data ?? []).flat();
        setUsers(list);
        setHasNext(list.length === limit);
        return list.length;
      } catch (e: any) {
        console.error(e);
        setError(
          e?.response?.status === 401
            ? "Nao autorizado: verifique seu login/token."
            : "Erro ao carregar usuarios."
        );
        return 0;
      } finally {
        setLoading(false);
      }
    },
    [limit]
  );

  useEffect(() => {
    fetchUsers(page);
  }, [page, fetchUsers]);

  const handleDeleteUser = async (userId: number) => {
    try {
      setDeletingId(userId);
      const token = localStorage.getItem("token");
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}${USERS_ROUTE}/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast({
        title: "Usuario deletado",
        description: "O usuario foi removido com sucesso.",
      });

      const items = await fetchUsers(page);
      if (items === 0 && page > 0) {
        setPage((current) => Math.max(current - 1, 0));
      }
    } catch (e: any) {
      console.error(e);
      const message =
        e?.response?.data?.message ?? "Erro ao deletar usuario.";
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

  const handleConfirmDelete = () => {
    if (!confirmDelete || deletingId !== null) return;
    void handleDeleteUser(confirmDelete.id);
  };

  const handleDialogChange = (open: boolean) => {
    if (!open && deletingId === null) {
      setConfirmDelete(null);
    }
  };

  if (loading) {
    return (
      <AdminListCard
        meta={TAB_CONFIG.usuarios}
        onAdd={onAdd}
        showHeader
        actionPlacement="footer"
      >
        <div className="p-4 text-gray-500">Carregando usuarios...</div>
      </AdminListCard>
    );
  }

  if (error) {
    return (
      <AdminListCard
        meta={TAB_CONFIG.usuarios}
        onAdd={onAdd}
        showHeader
        actionPlacement="footer"
      >
        <div className="p-4 text-red-600">{error}</div>
      </AdminListCard>
    );
  }

  if (users.length === 0) {
    return (
      <AdminListCard
        meta={TAB_CONFIG.usuarios}
        onAdd={onAdd}
        showHeader
        actionPlacement="footer"
      >
        <div className="p-4 text-gray-500">Nenhum usuario encontrado.</div>
      </AdminListCard>
    );
  }

  return (
    <AdminListCard
      meta={TAB_CONFIG.usuarios}
      onAdd={onAdd}
      showHeader
      actionPlacement="footer"
    >
      <Table>
        <TableHeader>
          <TableRow className="text-gray-500">
            <TableHead>Nome</TableHead>
            <TableHead>Nome de usuario</TableHead>
            <TableHead>Perfil</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Acoes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            const statusLabel: UserStatus = user.active ? "Ativo" : "Desativado";
            const badgeClass = STATUS_CLASS_MAP[statusLabel];
            const roleLabel = ROLE_LABEL[user.role] ?? user.role;

            return (
              <TableRow key={user.id} className="text-gray-700">
                <TableCell className="font-medium text-gray-900">
                  {user.name}
                </TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{roleLabel}</TableCell>
                <TableCell className="text-center">
                  <Badge className={badgeClass}>{statusLabel}</Badge>
                </TableCell>
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
                          id: user.id,
                          label: user.name || user.username,
                        })
                      }
                      disabled={deletingId === user.id}
                    >
                      {deletingId === user.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between p-4">
        <Button
          variant="outline"
          disabled={page === 0}
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
        >
          Anterior
        </Button>
        <span className="text-sm text-gray-600">Pagina {page + 1}</span>
        <Button
          variant="outline"
          disabled={!hasNext}
          onClick={() => setPage((p) => p + 1)}
        >
          Proximo
        </Button>
      </div>

      <AlertDialog open={!!confirmDelete} onOpenChange={handleDialogChange}>
        <AlertDialogContent className="w-[90vw] max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Remover usuario?</AlertDialogTitle>
            <AlertDialogDescription>
              {confirmDelete
                ? `Deseja realmente remover o usuario "${confirmDelete.label}"? Essa acao nao pode ser desfeita.`
                : ""}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deletingId !== null}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={handleConfirmDelete}
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
