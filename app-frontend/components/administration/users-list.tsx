"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AdminListCard } from "./list-card"
import { TAB_CONFIG } from "./config"

type ApiUser = {
  id: number
  name: string
  username: string
  role: "admin" | "user"
  active: boolean
}

type ApiResponse = {
  data: ApiUser[][]
  limit: number
  offset: number
}

interface UserRow {
  name: string
  username: string
  role: string
  status: "Ativo" | "Desativado"
}

const STATUS_CLASS_MAP: Record<UserRow["status"], string> = {
  Ativo: "bg-green-100 text-green-700 hover:bg-green-100",
  Desativado: "bg-gray-200 text-gray-600 hover:bg-gray-200",
}

const ROLE_LABEL: Record<ApiUser["role"], string> = {
  admin: "Administrador",
  user: "Usuário Comum",
}

interface UsersListProps {
  onAdd: () => void
}

const USERS_ROUTE = "/usuarios"

export function UsersList({ onAdd }: UsersListProps) {
  const [rows, setRows] = useState<UserRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // paginação
  const [page, setPage] = useState(0)
  const limit = 13
  const [hasNext, setHasNext] = useState(false)

  const fetchUsers = async (offset: number) => {
    try {
      setLoading(true)
      setError(null)
      const token = localStorage.getItem("token")
      const res = await axios.get<ApiResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}${USERS_ROUTE}?limit=${limit}&offset=${offset}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )

      const list = (res.data?.data ?? []).flat()
      const mapped: UserRow[] = list.map((u) => ({
        name: u.name,
        username: u.username,
        role: ROLE_LABEL[u.role] ?? u.role,
        status: u.active ? "Ativo" : "Desativado",
      }))

      setRows(mapped)

      // se o número de retornos == limit, assumimos que pode ter próxima
      setHasNext(list.length === limit)
    } catch (e: any) {
      console.error(e)
      setError(
        e?.response?.status === 401
          ? "Não autorizado: verifique seu login/token."
          : "Erro ao carregar usuários."
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers(page * limit)
  }, [page])

  if (loading) {
    return (
      <AdminListCard meta={TAB_CONFIG.usuarios} onAdd={onAdd} showHeader actionPlacement="footer">
        <div className="p-4 text-gray-500">Carregando usuários…</div>
      </AdminListCard>
    )
  }

  if (error) {
    return (
      <AdminListCard meta={TAB_CONFIG.usuarios} onAdd={onAdd} showHeader actionPlacement="footer">
        <div className="p-4 text-red-600">{error}</div>
      </AdminListCard>
    )
  }

  if (rows.length === 0) {
    return (
      <AdminListCard meta={TAB_CONFIG.usuarios} onAdd={onAdd} showHeader actionPlacement="footer">
        <div className="p-4 text-gray-500">Nenhum usuário encontrado.</div>
      </AdminListCard>
    )
  }

  return (
    <AdminListCard meta={TAB_CONFIG.usuarios} onAdd={onAdd} showHeader actionPlacement="footer">
      <Table>
        <TableHeader>
          <TableRow className="text-gray-500">
            <TableHead>Nome</TableHead>
            <TableHead>Nome de usuário</TableHead>
            <TableHead>Perfil</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((user, index) => (
            <TableRow key={`${user.username}-${index}`} className="text-gray-700">
              <TableCell className="font-medium text-gray-900">{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-center">
                <Badge className={STATUS_CLASS_MAP[user.status]}>{user.status}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* controles de paginação */}
      <div className="flex items-center justify-between p-4">
        <Button
          variant="outline"
          disabled={page === 0}
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
        >
          ← Anterior
        </Button>
        <span className="text-sm text-gray-600">Página {page + 1}</span>
        <Button
          variant="outline"
          disabled={!hasNext}
          onClick={() => setPage((p) => p + 1)}
        >
          Próximo →
        </Button>
      </div>
    </AdminListCard>
  )
}
